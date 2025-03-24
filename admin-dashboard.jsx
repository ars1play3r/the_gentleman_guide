import React from 'react';
import ReactDOM from 'react-dom/client';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
        <button className="logout-button">Cerrar sesión</button>
      </header>
      <nav className="admin-nav">
        <ul>
          <li><a href="#themes">Temas</a></li>
          <li><a href="#content">Contenido</a></li>
          <li><a href="#users">Usuarios</a></li>
          <li><a href="#settings">Configuración General</a></li>
        </ul>
      </nav>
      <main className="admin-content">
        <section id="themes">
          <h2>Gestión de Temas</h2>
          {/* Theme management controls */}
          <p>Opciones para modificar la apariencia del sitio.</p>
        </section>
        <section id="content">
          <h2>Gestión de Contenido</h2>
          {/* Content management controls */}
          <p>Opciones para editar lecciones y preguntas.</p>
        </section>
        <section id="users">
          <h2>Gestión de Usuarios</h2>
          {/* User management controls */}
          <p>Opciones para administrar usuarios registrados.</p>
        </section>
        <section id="settings">
          <h2>Configuración General</h2>
          {/* General site settings */}
          <p>Ajustes generales del sitio.</p>
        </section>
      </main>
      <footer className="admin-footer">
        <p> 2024 The Gentleman's Guide Admin Dashboard</p>
      </footer>
    </div>
  );
};

// Render the AdminDashboard component
const adminDashboardRoot = ReactDOM.createRoot(document.getElementById('admin-dashboard-container'));
adminDashboardRoot.render(<AdminDashboard />);