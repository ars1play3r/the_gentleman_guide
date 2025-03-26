// config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (reemplaza con tus propias credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyD23dFQX4TaTEPbY4O-IxudPhg8MP-3JOo",
  authDomain: "the-gentleman-s-guide-f5354.firebaseapp.com",
  projectId: "the-gentleman-s-guide-f5354",
  storageBucket: "the-gentleman-s-guide-f5354.firebaseapp.com",
  messagingSenderId: "777083189013",
  appId: "1:777083189013:web:589fec4fd356e485169b1c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);