// Home.jsx
import React from 'react';
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startLesson = (lesson) => {
    if (auth.currentUser) {
      // Guardar progreso en Firestore
      // ...
      navigate('/lesson/' + lesson.id);
    }
  };

  return (
    <div>
      <h1>Lecciones</h1>
      {/* Renderizar lecciones con startLesson */}
    </div>
  );
};

export default Home;