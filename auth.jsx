const { useState } = window.React;

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
      setErrorMessage('Por favor, introduce email y contraseña.');
      setIsLoading(false);
      return;
    }

    // Use our authentication system
    const result = UserAuth.login(email, password);
    
    if (result.success) {
      onAuthSuccess(result.token, result.isAdmin);
    } else {
      setErrorMessage(result.message || 'Credenciales incorrectas');
      setIsLoading(false);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!email || !password || !confirmPassword) {
      setErrorMessage('Todos los campos son obligatorios.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      setIsLoading(false);
      return;
    }

    // Try to register the user
    const registerSuccess = UserAuth.registerUser(email, password);
    
    if (registerSuccess) {
      // Auto-login after successful registration
      const loginResult = UserAuth.login(email, password);
      onAuthSuccess(loginResult.token, loginResult.isAdmin);
    } else {
      setErrorMessage('Este email ya está registrado.');
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    const email = event.target.email.value;

    if (!email) {
      setErrorMessage('Por favor, introduce tu email.');
      setIsLoading(false);
      return;
    }

    // Use our password reset function
    const resetSuccess = UserAuth.resetPassword(email);
    
    if (resetSuccess) {
      setErrorMessage('Se ha enviado un correo con instrucciones para restablecer tu contraseña. (Simulado)');
    } else {
      setErrorMessage('No se encontró ninguna cuenta con ese email.');
    }
    setIsLoading(false);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setErrorMessage('');
    
    // Use our social login function
    UserAuth.socialLogin(provider)
      .then(result => {
        if (result.success) {
          onAuthSuccess(result.token, result.isAdmin);
        } else {
          setErrorMessage(result.message || `Error al iniciar sesión con ${provider}`);
          setIsLoading(false);
        }
      })
      .catch(error => {
        setErrorMessage(`Error al iniciar sesión con ${provider}`);
        setIsLoading(false);
      });
  };

  let authContent;
  switch (currentAuthScreen) {
    case 'login':
      authContent = (
        <div className="auth-card">
          <h2 className="auth-title">Iniciar Sesión</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleLogin} className="auth-form">
            <input type="email" name="email" placeholder="Email" required className="auth-input"/>
            <input type="password" name="password" placeholder="Contraseña" required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('register')} className="auth-link-button">Registrarse</button>
            <button onClick={() => setCurrentAuthScreen('forgotPassword')} className="auth-link-button">¿Olvidaste tu contraseña?</button>
          </div>
          <div className="auth-social-login">
            <p className="auth-social-text">O inicia sesión con:</p>
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
          <h2 className="auth-title">Regístrate</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleRegister} className="auth-form">
            <input type="email" name="email" placeholder="Email" required className="auth-input"/>
            <input type="password" name="password" placeholder="Contraseña" required className="auth-input"/>
            <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Registrarse'}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('login')} className="auth-link-button">¿Ya tienes una cuenta? Iniciar Sesión</button>
          </div>
        </div>
      );
      break;
    case 'forgotPassword':
      authContent = (
        <div className="auth-card">
          <h2 className="auth-title">¿Olvidaste tu contraseña?</h2>
          {errorMessage && <p className="auth-error">{errorMessage}</p>}
          <form onSubmit={handleForgotPassword} className="auth-form">
            <input type="email" name="email" placeholder="Email" required className="auth-input"/>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Restablecer Contraseña'}
            </button>
          </form>
          <div className="auth-links">
            <button onClick={() => setCurrentAuthScreen('login')} className="auth-link-button">Volver a Iniciar Sesión</button>
          </div>
        </div>
      );
      break;
    default:
      authContent = <p>Error loading auth screen.</p>;
  }

  return (
    <div className="auth-container">
      {authContent}
    </div>
  );
};