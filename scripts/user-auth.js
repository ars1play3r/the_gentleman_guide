// Importa Firebase desde config.js
import { auth, db } from './config';

// Colección de usuarios en Firestore
const usersCollection = db.collection('users');

// UserAuth con Firebase
const UserAuth = {
  // Usuario actual (sincronizado con Firebase)
  currentUser: null,

  // Inicializa el sistema
  init() {
    // Sincroniza el usuario actual en tiempo real
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Actualiza currentUser con datos de Firestore
        const userData = await usersCollection.doc(user.uid).get();
        this.currentUser = {
          ...user,
          ...(userData.exists ? userData.data() : {}),
        };
      } else {
        this.currentUser = null;
      }
    });
  },

  // Registrar usuario con correo y contraseña
  async registerUser(email, password, name = "User") {
    try {
      // Crea el usuario en Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Guarda datos adicionales en Firestore
      await usersCollection.doc(user.uid).set({
        name,
        isAdmin: this.isFirstUser(),
        authMethod: 'email',
        createdAt: new Date(),
      });

      return true;
    } catch (error) {
      console.error('Error al registrar:', error.message);
      return false;
    }
  },

  // Iniciar sesión con correo y contraseña
  async login(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      return { success: true, token: await auth.currentUser.getIdToken() };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  // Iniciar sesión con proveedor social (Google/Facebook)
  async socialLogin(providerName) {
    const provider = providerName === 'google'
      ? new firebase.auth.GoogleAuthProvider()
      : new firebase.auth.FacebookAuthProvider();

    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;

      // Verifica si el usuario ya existe en Firestore
      const userDoc = await usersCollection.doc(user.uid).get();

      if (!userDoc.exists) {
        // Si es nuevo, guarda datos básicos
        await usersCollection.doc(user.uid).set({
          name: user.displayName || 'Social User',
          authMethod: providerName,
          isAdmin: this.isFirstUser(),
          createdAt: new Date(),
        });
      }

      return { success: true, token: await user.getIdToken() };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  // Restablecer contraseña
  async resetPassword(email) {
    try {
      await auth.sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      console.error('Error al restablecer:', error.message);
      return false;
    }
  },

  // Verificar token (no necesario con Firebase, pero lo mantengo)
  verifyToken(token) {
    return auth.verifyIdToken(token)
      .then(decodedToken => ({ valid: true, user: decodedToken }))
      .catch(() => ({ valid: false, message: "Token inválido" }));
  },

  // Verificar si es el primer usuario (para asignar admin)
  async isFirstUser() {
    const snap = await usersCollection.get();
    return snap.size === 0;
  },

  // Salir de la sesión
  async logout() {
    await auth.signOut();
    this.currentUser = null;
  },
};

// Inicializa el sistema
UserAuth.init();