// Add polyfill for Object.entries if needed
if (!Object.entries) {
  Object.entries = function(obj) {
    return Object.keys(obj).map(key => [key, obj[key]]);
  };
}

// LocalDB for user authentication
const UserAuth = {
  // Initialize (no longer loading/saving local storage for users)
  init() {
    // No longer need to load from local storage
    // this.loadFromLocalStorage();
  },

  // Register new user (using Firebase Auth directly in auth.jsx)
  registerUser(email, password, name = "User") {
    // Registration now handled by Firebase in auth.jsx
    console.warn("Register User function in user-auth.js is deprecated, use Firebase directly in auth.jsx");
    return false; // Indicate not handled here
  },

  // Login with email and password (using Firebase Auth directly in auth.jsx)
  login(email, password) {
    // Login now handled by Firebase in auth.jsx
    console.warn("Login function in user-auth.js is deprecated, use Firebase directly in auth.jsx");
    return { success: false, message: "Use Firebase Auth" };
  },

  // Social login (removed mock and moved to Firebase in auth.jsx)
  socialLogin(provider) {
    // Social login is now handled by Firebase in auth.jsx
    console.warn("Social Login function in user-auth.js is deprecated, use Firebase directly in auth.jsx");
    return Promise.reject({ success: false, message: "Use Firebase Auth" });
  },

  // Logout current user (using Firebase Auth directly)
  logout() {
    firebase.auth().signOut().then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Logout Error', error);
    });
    return true;
  },

  // Verify token
  verifyToken(token) {
    console.warn("verifyToken function in user-auth.js is deprecated, Firebase manage users");
    return {valid: true, user: {isAdmin: false}};
  },

  // Reset password (using Firebase Auth directly in auth.jsx)
  resetPassword(email) {
    // Password reset now handled by Firebase in auth.jsx
    console.warn("resetPassword function in user-auth.js is deprecated, use Firebase directly in auth.jsx");
    return false; // Indicate not handled here
  },

  // Save/Load data to/from localStorage (no longer needed for user auth data)
  saveToLocalStorage() {
    console.warn("saveToLocalStorage in user-auth.js is deprecated as Firebase manages users");
  },

  loadFromLocalStorage() {
    console.warn("loadFromLocalStorage in user-auth.js is deprecated as Firebase manages users");
  }
};

// Initialize auth system (init function is now empty, but kept for potential future use)
window.UserAuth = UserAuth;
UserAuth.init();