// firebase-config.js

// Firebase Configuration Instructions

/*
To integrate Firebase authentication for social logins (Google, Facebook, Discord), you need to set up a Firebase project and configure it for your web app.

Follow these steps:

1. Create a Firebase Project:
   - Go to the Firebase Console (https://console.firebase.google.com/) and create a new project.
   - Follow the project creation wizard, providing a project name and accepting the terms.

2. Add Firebase to your web app:
   - In your Firebase project, go to Project settings (the gear icon next to "Project Overview").
   - Scroll down to the "Your apps" section and click the web icon (</>).
   - Register your app by providing an app nickname (e.g., "Gentleman's Guide Web App").
   - In the "Add Firebase SDK" step, select "Use CDN".
   - Copy the Firebase configuration object (firebaseConfig) provided in the next step.

3. Configure Firebase in config.js:
   - Open your config.js file.
   - Replace the placeholders below with your actual Firebase configuration values from the Firebase console.

4. Enable Sign-in Providers:
   - In your Firebase project, go to "Authentication" in the left sidebar.
   - Go to the "Sign-in methods" tab.
   - Enable "Google", "Facebook", and "Discord" (or any providers you want to use).
   - For each provider, you might need to configure additional settings (e.g., OAuth client IDs and secrets, app IDs). Follow Firebase documentation for each provider setup.
     - For Facebook and Google, you'll need to create developer accounts and configure apps there to get the necessary credentials.
     - For Discord, you'll need to create a Discord application and bot to get credentials.

5. Install Firebase JS SDK in index.html:
    - Ensure you have included the Firebase SDK CDN links in your index.html file.
    - Example (check Firebase documentation for the latest versions):
      <!-- Firebase SDK -->
      <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
      <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>

6. Use Firebase Authentication in auth.jsx:
   - The auth.jsx component is already set up to use Firebase Authentication.
   - Ensure you have imported and initialized Firebase in auth.jsx using the configuration from config.js.
   - The social login functions (signInWithGoogle, signInWithFacebook, signInWithDiscord) are ready to use Firebase Authentication methods.

After completing these steps, users should be able to register and log in to your application using Google, Facebook, and Discord accounts through Firebase Authentication.
*/

console.log("Firebase configuration instructions loaded. Configure Firebase in config.js and auth.jsx");
