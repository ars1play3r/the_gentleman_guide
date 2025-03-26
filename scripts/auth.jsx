// auth.jsx
import React, { useState } from 'react';
import { auth } from './config'; // Importa auth desde config.js
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";

const Auth = ({ onAuthSuccess }) => {
  const [currentAuthScreen, setCurrentAuthScreen] = useState('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Login con correo y contraseña
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      setErrorMessage('Por favor, introduce email y contraseña.');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      onAuthSuccess(token, user.email.endsWith('@admin.com')); // Ejemplo de isAdmin
    } catch (error) {
      setErrorMessage(error.message || 'Credenciales incorrectas');
      setIsLoading(false);
    }
  };

  // Registro de usuario
  const handleRegister = async (event) => {
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

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      onAuthSuccess(token, user.email.endsWith('@admin.com'));
    } catch (error) {
      setErrorMessage('Este email ya está registrado.');
      setIsLoading(false);
    }
  };

  // Restablecer contraseña
  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    const email = event.target.email.value;

    if (!email) {
      setErrorMessage('Por favor, introduce tu email.');
      setIsLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage('Se ha enviado un correo con instrucciones para restablecer tu contraseña.');
    } catch (error) {
      setErrorMessage('No se encontró ninguna cuenta con ese email.');
    }
    setIsLoading(false);
  };

  // Login con proveedores sociales
  const handleSocialLogin = async (providerName) => {
    setIsLoading(true);
    setErrorMessage('');

    let provider;
    if (providerName === 'google') {
      provider = new GoogleAuthProvider();
    } else if (providerName === 'facebook') {
      provider = new FacebookAuthProvider();
    } else if (providerName === 'discord') {
      provider = new OAuthProvider('discord'); // Necesitas configurar Discord en Firebase
    } else {
      setErrorMessage(`Proveedor no soportado: ${providerName}`);
      setIsLoading(false);
      return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      onAuthSuccess(token, user.email && user.email.endsWith('@admin.com'));
    } catch (error) {
      setErrorMessage(`Error al iniciar sesión con ${providerName}`);
      setIsLoading(false);
    }
  };

  // Renderizado de pantallas
  let authContent;
  switch (currentAuthScreen) {
    case 'login':
      // ... (el JSX de login es el mismo, solo cambian las funciones)
      break;
    case 'register':
      // ... (el JSX de registro es el mismo)
      break;
    case 'forgotPassword':
      // ... (el JSX de restablecimiento es el mismo)
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

export default Auth;