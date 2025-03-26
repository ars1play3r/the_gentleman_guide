import { db, auth } from './config'; // Importa Firebase desde config.js

const UserData = {
  current: {
    name: 'User',
    points: 0,
    streak: 0,
    lastLogin: null
  },
  rankings: [],

  // Inicializa los datos del usuario
  async init() {
    if (!auth.currentUser) return; // Solo si hay usuario autenticado

    const userDocRef = db.collection('users').doc(auth.currentUser.uid);

    // Obtiene los datos del usuario actual
    const userDoc = await userDocRef.get();
    if (userDoc.exists) {
      this.current = { ...userDoc.data() };
    } else {
      // Crea un nuevo usuario si no existe
      const today = new Date().toDateString();
      const newUser = {
        name: auth.currentUser.displayName || 'User',
        points: 0,
        streak: 0,
        lastLogin: today
      };
      await userDocRef.set(newUser);
      this.current = newUser;
    }

    // Escucha cambios en tiempo real
    userDocRef.onSnapshot((doc) => {
      if (doc.exists) {
        this.current = { ...doc.data() };
        this.updateRankings();
      }
    });

    this.updateRankings();
  },

  // Actualiza los puntos del usuario
  async updatePoints(points) {
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    await userRef.update({
      points: this.current.points + points
    });
    this.current.points += points;
    this.updateRankings();
  },

  // Actualiza la racha de días consecutivos
  async updateStreak() {
    const today = new Date().toDateString();
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    
    const data = (await userRef.get()).data();
    if (data.lastLogin !== today) {
      await userRef.update({
        streak: data.streak + 1,
        lastLogin: today
      });
      this.current.streak += 1;
      this.current.lastLogin = today;
      this.updateRankings();
    }
  },

  // Actualiza los rankings desde Firestore
  async updateRankings() {
    // Obtiene todos los usuarios ordenados por puntos
    const rankingsQuery = await db
      .collection('users')
      .orderBy('points', 'desc')
      .get();

    this.rankings = rankingsQuery.docs.map(doc => ({
      name: doc.data().name,
      points: doc.data().points,
      streak: doc.data().streak
    }));
  },

  // Guarda los datos en Firestore (no necesario si usas métodos anteriores)
  async save() {
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    await userRef.set(this.current);
  }
};

// Inicializa el sistema al cargar la página
UserData.init();

export default UserData;