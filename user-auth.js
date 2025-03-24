// LocalDB for user authentication
const UserAuth = {
    // User storage
    users: [],
    
    // Current authenticated user
    currentUser: null,
    
    // Check if user exists
    userExists(email) {
      return this.users.some(user => user.email === email);
    },
    
    // Register new user
    registerUser(email, password, name = "User") {
      if (this.userExists(email)) return false;
      
      const isFirstUser = this.users.length === 0;
      
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In real app, this would be hashed
        name,
        isAdmin: isFirstUser, // First user gets admin privileges
        createdAt: new Date(),
        authMethod: 'email'
      };
      
      this.users.push(newUser);
      this.saveToLocalStorage();
      return true;
    },
    
    // Login with email and password
    login(email, password) {
      const user = this.users.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        this.saveToLocalStorage();
        return {
          success: true,
          token: this.generateToken(user),
          isAdmin: user.isAdmin
        };
      }
      return { success: false, message: "Credenciales inválidas" };
    },
    
    // Social login (mock implementation)
    socialLogin(provider) {
      // In a real app, we would authenticate with the actual provider
      // Here we'll simulate successful authentication
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate response from provider
          const mockProviderResponse = {
            email: `user_${Date.now()}@${provider}.com`,
            name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
            id: `${provider}_${Date.now()}`
          };
          
          // Check if user already exists
          let user = this.users.find(u => 
            u.email === mockProviderResponse.email && 
            u.authMethod === provider
          );
          
          // Create new user if doesn't exist
          if (!user) {
            user = {
              id: mockProviderResponse.id,
              email: mockProviderResponse.email,
              name: mockProviderResponse.name,
              isAdmin: this.users.length === 0, // First user gets admin privileges
              createdAt: new Date(),
              authMethod: provider
            };
            this.users.push(user);
          }
          
          this.currentUser = user;
          this.saveToLocalStorage();
          
          resolve({
            success: true,
            token: this.generateToken(user),
            isAdmin: user.isAdmin
          });
        }, 1000); // Simulate network delay
      });
    },
    
    // Logout current user
    logout() {
      this.currentUser = null;
      this.saveToLocalStorage();
      return true;
    },
    
    // Reset password (mock implementation)
    resetPassword(email) {
      const user = this.users.find(u => u.email === email);
      return !!user; // Return true if user exists
    },
    
    // Generate auth token (simple implementation)
    generateToken(user) {
      // In a real app, use a proper JWT library
      return btoa(JSON.stringify({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours expiry
      }));
    },
    
    // Verify token
    verifyToken(token) {
      try {
        const decoded = JSON.parse(atob(token));
        
        // Check if token is expired
        if (decoded.exp < Date.now()) {
          return { valid: false, message: "Token expired" };
        }
        
        // Find user by id
        const user = this.users.find(u => u.id === decoded.id);
        if (!user) {
          return { valid: false, message: "User not found" };
        }
        
        return { 
          valid: true,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin
          }
        };
      } catch (error) {
        return { valid: false, message: "Invalid token" };
      }
    },
    
    // Save data to localStorage
    saveToLocalStorage() {
      localStorage.setItem('userAuthData', JSON.stringify({
        users: this.users,
        currentUser: this.currentUser
      }));
    },
    
    // Load data from localStorage
    loadFromLocalStorage() {
      const data = localStorage.getItem('userAuthData');
      if (data) {
        const parsed = JSON.parse(data);
        this.users = parsed.users || [];
        this.currentUser = parsed.currentUser;
      }
    },
    
    // Initialize
    init() {
      this.loadFromLocalStorage();
    }
  };
  
  // Initialize auth system
  UserAuth.init();