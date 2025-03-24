// User data and ranking management
const UserData = {
  // Current user data
  current: {
    name: "User",
    points: 0,
    streak: 0,
    lastLogin: null
  },
  
  // Sample rankings (would be replaced with real data from backend)
  rankings: [
    { name: "María G.", points: 1250, streak: 15 },
    { name: "Carlos R.", points: 980, streak: 8 },
    { name: "Alejandro M.", points: 895, streak: 12 },
    { name: "Javier L.", points: 750, streak: 5 },
    { name: "Ana P.", points: 685, streak: 7 },
    { name: "Current User", points: 0, streak: 0 }
  ],
  
  // Update user points
  updatePoints(points) {
    this.current.points += points;
    this.updateRankings();
  },
  
  // Update streak
  updateStreak() {
    const today = new Date().toDateString();
    if (this.current.lastLogin !== today) {
      this.current.streak += 1;
      this.current.lastLogin = today;
      this.updateRankings();
    }
  },
  
  // Update rankings
  updateRankings() {
    // Find and update current user in rankings
    const userIndex = this.rankings.findIndex(user => user.name === "Current User");
    if (userIndex >= 0) {
      this.rankings[userIndex].points = this.current.points;
      this.rankings[userIndex].streak = this.current.streak;
    }
    
    // Sort rankings
    this.rankings.sort((a, b) => b.points - a.points);
  },
  
  // Initialize user data
  init() {
    // Check if user has logged in today
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('gentlemansGuideUserData');
    
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.current = parsedData.current;
      
      // Update streak if it's a new day
      if (this.current.lastLogin !== today) {
        this.current.streak += 1;
        this.current.lastLogin = today;
      }
    } else {
      this.current.lastLogin = today;
    }
    
    // Save to localStorage
    this.save();
  },
  
  // Save user data to localStorage
  save() {
    localStorage.setItem('gentlemansGuideUserData', JSON.stringify({
      current: this.current,
      rankings: this.rankings
    }));
  }
};
