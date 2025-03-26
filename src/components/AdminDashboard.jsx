// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Panel de Administración</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {' '}
            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;