// App.jsx
import React, { useState, useEffect } from 'react';
import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Verificar si es administrador (ej: desde Firestore)
        setUser(firebaseUser);
        setIsAdmin(firebaseUser.email?.endsWith('@admin.com'));
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        isAdmin ? (
          <AdminDashboard />
        ) : (
          <Home />
        )
      ) : (
        <Auth onAuthSuccess={() => {}} />
      )}
    </div>
  );
};

export default App;