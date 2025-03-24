// Internationalization support
const I18N = {
    languages: ['es', 'pt', 'en'],
    translations: {
      es: {
        appTitle: "The Gentleman's Guide",
        // Auth
        login: "Iniciar Sesión",
        register: "Regístrate",
        forgotPassword: "¿Olvidaste tu contraseña?",
        // Lessons
        continueLearning: "Continúa aprendiendo",
        dailyPractice: "Práctica diaria",
        customerService: "Atención al cliente",
        // Common
        points: "Puntos",
        streak: "Racha",
        hearts: "Corazones",
        gems: "Gemssss"
      },
      pt: {
        appTitle: "O Guia do Cavalheiro",
        login: "Iniciar Sessão",
        Register: "Registro",
        forgotPassword: "Esqueceu sua senha?",
        continueLearning: "Continuar aprendendo", 
        dailyPractice: "Prática diária",
        customerService: "Atendimento ao cliente",
        points: "Pontos",
        streak: "Sequência",
        hearts: "Corações",
        gems: "Gemas"
      },
      en: {
        appTitle: "The Gentleman's Guide",
        login: "Sign In", 
        register: "Register",
        forgotPassword: "Forgot Password?",
        continueLearning: "Continue Learning",
        dailyPractice: "Daily Practice",
        customerService: "Customer Service",
        points: "Points",
        streak: "Streak",
        hearts: "Hearts", 
        gems: "Gems"
      }
    },
    currentLang: 'es',
    
    t(key) {
      return this.translations[this.currentLang][key] || key;
    },
    
    setLanguage(lang) {
      if (this.languages.includes(lang)) {
        this.currentLang = lang;
      }
    }
  };
  
  window.I18N = I18N;