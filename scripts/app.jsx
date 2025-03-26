// app.jsx
import React, { useState, useEffect } from 'react';
import { auth, db } from './config'; // Importa Firebase
import { collection, doc, getDoc, setDoc, updateDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import Auth from './auth'; // Importa el componente Auth actualizado
import AdminDashboard from './admin-dashboard';
import Header from './header'; // Asegúrate de tener este componente definido
import HomeScreen from './home-screen'; // Asegúrate de tener este componente definido
import LessonScreen from './lesson-screen'; // Asegúrate de tener este componente definido

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);
  const [health, setHealth] = useState(5);
  const [gems, setGems] = useState(0);
  const [heartCooldown, setHeartCooldown] = useState(0);
  const [points, setPoints] = useState(0);
  const [showRankings, setShowRankings] = useState(false);
  const [lastLessonAttempted, setLastLessonAttempted] = useState(null);
  const [showHealthWarning, setShowHealthWarning] = useState(false);
  const [rankings, setRankings] = useState([]);

  // Inicialización de Firebase Authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Cargar datos del usuario desde Firestore
        const userDoc = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setProgress(userData.progress || 0);
          setStreak(userData.streak || 0);
          setPoints(userData.points || 0);
          setGems(userData.gems || 0);
          setIsAdmin(userData.isAdmin || false);
        }
        setIsAuthenticated(true);
        setCurrentScreen(isAdmin ? 'admin' : 'home');
      } else {
        setIsAuthenticated(false);
        setCurrentScreen('auth');
      }
    });
    return () => unsubscribe();
  }, []);

  // Escucha cambios en los rankings en tiempo real
  useEffect(() => {
    const rankingsQuery = query(
      collection(db, 'users'),
      orderBy('points', 'desc')
    );
    const unsubscribe = onSnapshot(rankingsQuery, (snapshot) => {
      const rankingsData = snapshot.docs.map((doc) => ({
        name: doc.data().name,
        points: doc.data().points,
        streak: doc.data().streak,
      }));
      setRankings(rankingsData);
    });
    return () => unsubscribe();
  }, []);

  // Gesto de regeneración de corazones
  useEffect(() => {
    let timer;
    if (heartCooldown > 0) {
      timer = setInterval(() => {
        setHeartCooldown((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (health < 5 && heartCooldown === 0) {
      setHealth((prev) => prev + 1);
      setHeartCooldown(1200); // 20 minutos
    }
    return () => clearInterval(timer);
  }, [health, heartCooldown]);

  // Iniciar lección
  const startLesson = (lesson) => {
    if (health <= 0) {
      setShowHealthWarning(true);
      setTimeout(() => setShowHealthWarning(false), 3000);
      return;
    }
    // Actualizar racha en Firestore
    const userRef = doc(db, 'users', auth.currentUser.uid);
    updateDoc(userRef, {
      streak: streak + 1,
      lastLogin: new Date(),
    });
    setStreak(streak + 1);
    setLastLessonAttempted(lesson);
    setCurrentLesson(lesson);
    setCurrentScreen('lesson');
  };

  // Completar lección
  const completeLesson = async (earnedPoints) => {
    if (!auth.currentUser) {
      console.error("No hay usuario autenticado");
      return;
    }
  
    const newPoints = points + (earnedPoints || 0);
    const newProgress = progress + 10;
    const newGems = gems + 5;
    const userRef = doc(db, 'users', auth.currentUser.uid);
  
    try {
      await updateDoc(userRef, {
        points: newPoints,
        progress: newProgress,
        gems: newGems,
      });
  
      // Actualiza el estado local
      setPoints(newPoints);
      setProgress(newProgress);
      setGems(newGems);
      setCurrentScreen('home');
    } catch (error) {
      console.error("Error al actualizar usuario en Firestore:", error);
      // Maneja errores (ej: muestra un mensaje al usuario)
    }
  };

  // Abrir soporte
  const openCustomerService = () => {
    window.open('https://chat.whatsapp.com/+5356960902', '_blank');
  };

  // Toggle de clasificación
  const toggleRankings = () => {
    setShowRankings(!showRankings);
  };

  // Manejar inicio de sesión exitoso
  const handleAuthSuccess = (token, isAdminUser) => {
    setIsAuthenticated(true);
    setIsAdmin(isAdminUser);
    setCurrentScreen(isAdminUser ? 'admin' : 'home');
  };

  // Cerrar sesión
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen pb-20">
      {currentScreen !== 'auth' && (
        <Header
          progress={progress}
          streak={streak}
          health={health}
          gems={gems}
          heartCooldown={heartCooldown}
          points={points}
          toggleRankings={toggleRankings}
        />
      )}
      {currentScreen === 'auth' && <Auth onAuthSuccess={handleAuthSuccess} />}
      {currentScreen === 'home' && (
        <HomeScreen
          startLesson={startLesson}
          progress={progress}
          openCustomerService={openCustomerService}
          streak={streak}
          lastLessonAttempted={lastLessonAttempted}
          health={health}
        />
      )}
      {currentScreen === 'admin' && (
        <AdminDashboard onLogout={handleLogout} />
      )}
      {showHealthWarning && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-secondary text-white font-bold py-3 px-6 rounded-lg animate-bounce">
            ¡Necesitas al menos 1 corazón para continuar!
          </div>
        </div>
      )}
      {currentScreen === 'lesson' && (
        <LessonScreen
          lesson={currentLesson}
          completeLesson={completeLesson}
          failExercise={failExercise}
        />
      )}
      {showRankings && (
        <RankingsModal
          rankings={rankings}
          userPoints={points}
          closeRankings={() => setShowRankings(false)}
        />
      )}
    </div>
  );
};

export default App;