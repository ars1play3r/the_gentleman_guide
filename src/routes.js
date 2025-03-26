// src/routes.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import HomeScreen from './components/HomeScreen';
import LessonScreen from './components/LessonScreen';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children, isAdmin, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !user.isAdmin) {
    return <Navigate to="/home" />;
  }

  return children ? <Route {...rest} element={children} /> : null;
};

export const RouterConfig = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Auth />} />

        {/* Rutas protegidas */}
        <ProtectedRoute path="/" element={<HomeScreen />} />
        <ProtectedRoute path="/lesson/:id" element={<LessonScreen />} />
        <ProtectedRoute
          path="/admin"
          isAdmin
          element={<AdminDashboard />}
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};