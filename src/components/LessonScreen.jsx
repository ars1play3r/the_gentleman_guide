// src/components/LessonScreen.jsx
import { useAuth } from '../context/AuthContext';

const LessonScreen = ({ lesson }) => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {user?.email}</h1>
      {/* Contenido de la lección */}
    </div>
  );
};