import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FIREBASE_CONFIG } from '/config.js';
import '/i18n.js';

// Initialize Firebase (initializeApp removed as it might be called multiple times, initialize in app.jsx instead)
let firebaseApp;
try {
  firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
} catch (e) {
  console.error("Firebase initialization error:", e);
}
const auth = firebaseApp.auth();

const Auth = ({ onAuthSuccess }) => {
  const [currentAuthScreen, setCurrentAuthScreen] = useState('login'); // 'login', 'register', 'forgotPassword'
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Basic client-side validation
    if (!email || !password) {
      setErrorMessage(I18N.t('please_enter_email_and_password'));
      setIsLoading(false);
      return;
    }

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          onAuthSuccess(token, false); // Assuming email/password users are not admins by default, adjust as needed
        });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessageFB = error.message;
        console.error("Login error:", errorCode, errorMessageFB);
        setErrorMessage(I18N.t('invalid_credentials')); // Generic error message for security
        setIsLoading(false);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!email || !password || !confirmPassword) {
      setErrorMessage(I18N.t('all_fields_are_required'));
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(I18N.t('passwords_do_not_match'));
      setIsLoading(false);
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          onAuthSuccess(token, false); // Assuming new users are not admins
        });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessageFB = error.message;
        console.error("Registration error:", errorCode, errorMessageFB);
        if (errorCode === 'auth/email-already-in-use') {
          setErrorMessage(I18N.t('email_already_registered'));
        } else {
          setErrorMessage(I18N.t('registration_failed')); // Generic registration error
        }
        setIsLoading(false);
      });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const email = event.target.email.value;

    if (!email) {
      setErrorMessage(I18N.t('please_enter_your_email'));
      setIsLoading(false);
      return;
    }

    auth.sendPasswordResetEmail(email)
      .then(() => {
        setErrorMessage(I18N.t('email_sent_with_password_reset_instructions'));
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessageFB = error.message;
        console.error("Forgot password error:", errorCode, errorMessageFB);
        setErrorMessage(I18N.t('no_account_found_with_this_email'));
        setIsLoading(false);
      });
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setErrorMessage('');

    let socialProvider;
    if (provider === 'google') {
      socialProvider = new firebase.auth.GoogleAuthProvider();
    } else if (provider === 'facebook') {
      socialProvider = new firebase.auth.FacebookAuthProvider();
    } else if (provider === 'discord') {
      // Discord is not directly supported as a standard provider by Firebase,
      // you would typically use a custom auth flow or a service like Firebase Functions
      // to handle Discord OAuth and then sign in to Firebase with a custom token.
      // For simplicity, and as Discord is not a standard Firebase Auth provider,
      // we will show an alert indicating it's not directly supported.
      alert("Discord login is not directly supported. Please refer to Firebase documentation for custom auth flows.");
      setIsLoading(false);
      return; // Exit function after alert
      // If implementing Discord, the flow would be significantly more complex.
    }

    if (socialProvider) {
      auth.signInWithPopup(socialProvider)
        .then((result) => {
          // Social login successful.
          const user = result.user;
          user.getIdToken().then((token) => {
             onAuthSuccess(token, false); // Social logins are typically not admin
          });
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessageFB = error.message;
          console.error("Social login error:", errorCode, errorMessageFB);
          setErrorMessage(I18N.t('error_logging_in_with_provider', { provider }));
          setIsLoading(false);
        });
    }
  };

  let authContent;
  switch (currentAuthScreen) {
    case 'login':
      authContent = (
        <div className="auth-card">
          <h2 className="auth-title">{I18N.t('login')}</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleLogin} className="auth-form">
            <input type="email" name="email" placeholder={I18N.t('email')} required className="auth-input"/>
            <input type="password" name="password" placeholder={I18N.t('password')} required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? I18N.t('loading') : I18N.t('login')}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('register')} className="auth-link-button">{I18N.t('register')}</button>
            <button onClick={() => setCurrentAuthScreen('forgotPassword')} className="auth-link-button">{I18N.t('forgot_password')}</button>
          </div>
          <div className="auth-social-login">
            <p className="auth-social-text">{I18N.t('or_login_with')}</p>
            <div className="auth-social-buttons">
              <button 
                className="auth-social-button auth-social-google"
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5">
                  <path d="M20.633 10.477c0-.998-.086-1.752-.254-2.524H12v4.757h4.857c-.293 1.52-1.175 2.516-2.393 3.272v4.045h3.873c2.27-2.093 3.597-5.186 3.597-8.549zM12 21.94c3.28 0 5.99-1.097 8.042-2.995l-3.873-3.004c-1.075.728-2.475 1.15-4.169 1.15-3.183 0-5.874-2.178-6.824-5.079H2.934v3.191C4.899 18.353 8.61 21.94 12 21.94zm-.059-20.038c1.656 0 3.117.61 4.22 1.672L16.05 2.057C13.97 0.74 10.984-.059 8.359-.059 5.06 0 2.27 1.576.516 3.844L4.39 6.842c.932-2.159 2.79-3.71 4.011-4.356 1.221-.646 2.633-.999 4.039-.999zM5.079 14.056c-.279-.752-.435-1.57-.435-2.427s.156-1.675.435-2.427V5.991H2.934C2.042 7.532 1.5 9.773 1.5 12s.542 4.468 1.434 6.009l2.145-3.004z"/>
                </svg>
              </button>
              <button 
                className="auth-social-button auth-social-facebook"
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.537v1.888h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                </svg>
              </button>
              <button 
                className="auth-social-button auth-social-discord"
                onClick={() => handleSocialLogin('discord')}
                disabled={isLoading}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M19.65 3.95c.29.27.53.58.72.92.19.34.35.7.46 1.08.11.37.18.76.21 1.15l.002.38c.04 2.82-1.59 5.44-4.13 6.98-1.4.83-2.89 1.42-4.44 1.82-.08.02-.16.03-.24.05-.41.08-.82.12-1.24.12-.42 0-.83-.04-1.24-.12-.08-.02-.16-.03-.24-.05-1.55-.4-3.04-.99-4.44-1.82-2.54-1.54-4.17-4.16-4.13-6.98l.002-.38c.03-.39.1-.78.21-1.15.11-.38.27-.74.46-1.08.19-.34.43-.65.72-.92C4.08 3.07 4.57 3 5.07 3c.51 0 .99.07 1.46.21.97.28 1.9.7 2.76 1.25.35.22.71.47 1.06.74.08.06.16.12.24.19.42.35.82.72 1.2.96.17.11.34.22.51.32.08.05.16.09.24.14.18.1.35.19.53.28.25.13.5.24.76.34.08.03.16.06.24.09.11.04.22.07.33.1.05.01.11.03.16.04.2.05.41.08.62.08.21 0 .41-.03.62-.08.05-.01.11-.03.16-.04.11-.03.22-.07.33-.1.08-.03.16-.06.24-.09.26-.1.51-.21.76-.34.18-.09.35-.19.53-.28.08-.05.16-.09.24-.14.17-.1.34-.21.51-.32.38-.24.78-.61 1.2-.96.08-.07.16-.13.24-.19.35-.27.71-.52 1.06-.74.86-.55 1.79-.97 2.76-1.25.47-.14.95-.21 1.46-.21.5 0 .99.07 1.48.21zm-8.12 8.98c.57 0 1.03-.38 1.03-.85 0-.47-.46-.85-1.03-.85-.57 0-1.03.38-1.03.85 0 .47.46.85 1.03.85zm5.4 0c.57 0 1.03-.38 1.03-.85 0-.47-.46-.85-1.03-.85-.57 0-1.03.38-1.03.85 0 .47.46.85 1.03.85zM12 16.23c.83 0 1.62-.27 2.31-.78-2.02-.65-3.55-2.05-3.55-3.68 0-.65.23-1.28.64-1.81 2.01.57 3.55 2.07 3.55 3.69 0 1.63-1.53 3.04-3.55 3.69.41.53.64 1.16.64 1.81 0 1.63-1.53 3.03-3.55 3.68.69.51 1.48.78 2.31.78z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
      break;
    case 'register':
      authContent = (
        <div className="auth-card">
          <h2 className="auth-title">{I18N.t('register')}</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleRegister} className="auth-form">
            <input type="email" name="email" placeholder={I18N.t('email')} required className="auth-input"/>
            <input type="password" name="password" placeholder={I18N.t('password')} required className="auth-input"/>
            <input type="password" name="confirmPassword" placeholder={I18N.t('confirm_password')} required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? I18N.t('loading') : I18N.t('register')}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('login')} className="auth-link-button">{I18N.t('already_have_an_account_login')}</button>
          </div>
        </div>
      );
      break;
    case 'forgotPassword':
      authContent = (
        <div className="auth-card">
          <h2 className="auth-title">{I18N.t('forgot_password')}</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleForgotPassword} className="auth-form">
            <input type="email" name="email" placeholder={I18N.t('email')} required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? I18N.t('loading') : I18N.t('reset_password')}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('login')} className="auth-link-button">{I18N.t('back_to_login')}</button>
          </div>
        </div>
      );
      break;
    default:
      authContent = <p>{I18N.t('error_loading_auth_screen')}</p>;
  }

  return (
    <div className="auth-container">
      {authContent}
    </div>
  );
};

// Render the Auth component
const authRoot = ReactDOM.createRoot(document.getElementById('auth-container'));
authRoot.render(<Auth />);