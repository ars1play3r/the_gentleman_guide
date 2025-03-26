// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config'; // Importa Firebase Auth
import { useRouter } from 'next/router'; // Si usas Next.js, o 'react-router-dom' si usas Create React App

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Para redirigir según el estado

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      // Redirigir si el usuario no está autenticado
      if (!firebaseUser && router.pathname !== '/login') {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);