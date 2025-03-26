import React, { useState, useEffect } from 'react';
import { auth, db } from '../config'; // Asegúrate de importar Firebase
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';

const AdminDashboard = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState({ title: '', content: '' });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Cargar usuarios desde Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const usersQuery = query(collection(db, 'users'));
      const querySnapshot = await getDocs(usersQuery);
      const usersList = [];
      querySnapshot.forEach(doc => {
        usersList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  // Cargar lecciones desde Firestore
  useEffect(() => {
    const fetchLessons = async () => {
      const lessonsQuery = query(collection(db, 'lessons'));
      const querySnapshot = await getDocs(lessonsQuery);
      const lessonsList = [];
      querySnapshot.forEach(doc => {
        lessonsList.push({ id: doc.id, ...doc.data() });
      });
      setLessons(lessonsList);
    };
    fetchLessons();
  }, []);

  // Eliminar un usuario
  const handleDeleteUser = async (userId) => {
    await deleteDoc(doc(db, 'users', userId));
    setUsers(users.filter(user => user.id !== userId));
    setShowDeleteConfirm(false);
  };

  // Eliminar una lección
  const handleDeleteLesson = async (lessonId) => {
    await deleteDoc(doc(db, 'lessons', lessonId));
    setLessons(lessons.filter(lesson => lesson.id !== lessonId));
  };

  // Agregar nueva lección
  const handleAddLesson = async (e) => {
    e.preventDefault();
    await setDoc(collection(db, 'lessons'), {
      title: newLesson.title,
      content: newLesson.content,
      createdAt: new Date(),
    });
    setNewLesson({ title: '', content: '' });
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
        <button onClick={onLogout} className="logout-button">Cerrar sesión</button>
      </header>
      <nav className="admin-nav">
        <ul>
          <li><a href="#users" onClick={() => window.scrollTo(0, 0)}>Usuarios</a></li>
          <li><a href="#lessons" onClick={() => window.scrollTo(0, 0)}>Lecciones</a></li>
          <li><a href="#settings" onClick={() => window.scrollTo(0, 0)}>Configuración</a></li>
        </ul>
      </nav>
      <main className="admin-content">
        {/* Gestión de Usuarios */}
        <section id="users" className="admin-section">
          <h2>Usuarios Registrados</h2>
          <div className="user-list">
            {users.map(user => (
              <div key={user.id} className="user-card">
                <div>
                  <strong>{user.name}</strong> <span>{user.email}</span>
                  <br />
                  <small>{user.isAdmin ? 'Administrador' : 'Usuario normal'}</small>
                </div>
                <div>
                  <button 
                    className="btn btn-warning" 
                    onClick={() => setSelectedUser(user)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => setShowDeleteConfirm(user.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modal de confirmación de eliminación */}
          {showDeleteConfirm && (
            <div className="modal-overlay">
              <div className="modal-content">
                <p>¿Estás seguro de eliminar este usuario?</p>
                <button onClick={() => setShowDeleteConfirm(false)}>Cancelar</button>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(showDeleteConfirm)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Gestión de Lecciones */}
        <section id="lessons" className="admin-section">
          <h2>Lecciones</h2>
          <div className="lesson-form">
            <h3>Agregar Nueva Lección</h3>
            <form onSubmit={handleAddLesson}>
              <input
                type="text"
                placeholder="Título de la lección"
                value={newLesson.title}
                onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Contenido de la lección"
                value={newLesson.content}
                onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-success">Agregar</button>
            </form>
          </div>
          <div className="lesson-list">
            {lessons.map(lesson => (
              <div key={lesson.id} className="lesson-card">
                <h3>{lesson.title}</h3>
                <p>{lesson.content.slice(0, 100)}...</p>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleDeleteLesson(lesson.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Configuración General */}
        <section id="settings" className="admin-section">
          <h2>Configuración del Sitio</h2>
          <div className="settings-form">
            {/* Agregar campos de configuración (ej: mantenimiento, banners) */}
            <div className="form-group">
              <label>Modo de Mantenimiento:</label>
              <input type="checkbox" />
            </div>
          </div>
        </section>
      </main>
      <footer className="admin-footer">
        <p>© 2024 The Gentleman's Guide - Administración</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;