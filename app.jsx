import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FIREBASE_CONFIG } from '/config.js';
import '/user-data.js';
import '/user-auth.js';
import '/i18n.js';
import '/config-lessons.js';

// Initialize Firebase only once
let firebaseApp;
try {
  firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
} catch (e) {
  console.error("Firebase initialization error:", e);
}
const auth = firebaseApp.auth();

// Header Component
const Header = ({ progress, streak, health, gems, heartCooldown, points, toggleRankings, setCurrentLang }) => {
  // Format the remaining time in MM:SS format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="bg-white p-4 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold text-primary">The Gentleman's Guide</div>
        </div>

        <div className="flex space-x-4">
          <div className="flex items-center cursor-pointer" onClick={toggleRankings}>
            <div className="h-5 w-5 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
              </svg>
            </div>
            <span className="ml-1 font-bold">{points}</span>
          </div>

          <div className="flex items-center">
            <div className="h-5 w-5 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.71.75.75 0 00-1.222.873 9.157 9.157 0 002.313 2.367 9.761 9.761 0 01-3.153.744.75.75 0 00-.094 1.48 11.27 11.27 0 005.022-.312c.723-.176 1.426-.418 2.102-.724a7.548 7.548 0 014.434-.684.75.75 0 00.327-1.465 9.054 9.054 0 01-5.286.804 11.324 11.324 0 002.14-3.954.75.75 0 00-.868-.959z" />
              </svg>
            </div>
            <span className="ml-1 font-bold">{streak}</span>
          </div>
          
          <div className="flex items-center">
            <div className="h-5 w-5 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <span className="ml-1 font-bold">{health}</span>
            {heartCooldown > 0 && health < 5 && (
              <span className="ml-1 text-xs text-red-500">{formatTime(heartCooldown)}</span>
            )}
          </div>

          <div className="flex items-center">
            <div className="h-5 w-5 text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.75v4.757a13.04 13.04 0 01-3.58 8.94l-5.398 5.398a.75.75 0 01-1.06 0l-5.398-5.398A13.04 13.04 0 012 10.758V6a.75.75 0 01.722-.75 11.209 11.209 0 007.877-3.08z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-1 font-bold">{gems}</span>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              onChange={(e) => setCurrentLang(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="es">Español</option>
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-2 mt-2">
        <div
          className="bg-primary h-2 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};

// RankingsModal Component
const RankingsModal = ({ rankings, userPoints, closeRankings }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Clasificación</h2>
          <button onClick={closeRankings} className="text-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="divide-y">
          {rankings.map((user, index) => (
            <div
              key={index}
              className={`py-3 flex items-center ${user.points === userPoints ? 'bg-primary/10' : ''}`}
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <span className="font-bold">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{user.name}</h3>
                <p className="text-sm text-neutral">{user.points} puntos</p>
              </div>
              <div className="flex items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.71.75.75 0 00-1.222.873 9.157 9.157 0 002.313 2.367 9.761 9.761 0 01-3.153.744.75.75 0 00-.094 1.48 11.27 11.27 0 005.022-.312c.723-.176 1.426-.418 2.102-.724a7.548 7.548 0 014.434-.684.75.75 0 00.327-1.465 9.054 9.054 0 01-5.286.804 11.324 11.324 0 002.14-3.954.75.75 0 00-.868-.959z" />
                </svg>
                <span>{user.streak}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// HomeScreen Component
const HomeScreen = ({ startLesson, progress, openCustomerService, streak, lastLessonAttempted, health }) => {
  return (
    <div className="container mx-auto pt-24 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">{I18N.t('continueLearning')}</h1>

      {health <= 0 && (
        <div className="bg-secondary/10 rounded-xl shadow-md p-6 mb-8 border-2 border-secondary">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
              <div className="h-8 w-8 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">¡Te has quedado sin corazones!</h2>
              <p className="text-neutral">Espera a que se regenere al menos 1 corazón para continuar.</p>
            </div>
          </div>
        </div>
      )}

      {streak > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <div className="h-8 w-8 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.71.75.75 0 00-1.222.873 9.157 9.157 0 002.313 2.367 9.761 9.761 0 01-3.153.744.75.75 0 00-.094 1.48 11.27 11.27 0 005.022-.312c.723-.176 1.426-.418 2.102-.724a7.548 7.548 0 014.434-.684.75.75 0 00.327-1.465 9.054 9.054 0 01-5.286.804 11.324 11.324 0 002.14-3.954.75.75 0 00-.868-.959z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">¡Racha de {streak} días!</h2>
              <p className="text-neutral">Continúa aprendiendo para mantener tu racha</p>
            </div>
          </div>
          <div className="streak-animation">🔥</div>
        </div>
      )}

      {lastLessonAttempted && health <= 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-3">Lección interrumpida</h2>
          <p className="text-neutral mb-4">Podrás continuar con "{lastLessonAttempted.title}" cuando tengas corazones disponibles</p>

          <button
            className="w-full bg-gray-300 text-white py-3 rounded-lg font-bold cursor-not-allowed"
            disabled
          >
            Continuar lección
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-3">{I18N.t('continueLearning')}</h2>
        <p className="text-neutral mb-4">{I18N.t('progress')} {progress}% {I18N.t('course')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {window.BARBER_LESSONS.map((lesson, index) => (
            <LessonCard
              key={index}
              lesson={lesson}
              isLocked={index > Math.floor(progress / 10) + 1}
              isCompleted={index < Math.floor(progress / 10)}
              isDisabled={health <= 0}
              onClick={() => !isLocked && startLesson(lesson)}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-3">{I18N.t('dailyPractice')}</h2>
        <p className="text-neutral mb-4">{I18N.t('review')}</p>

        <button
          className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
          onClick={() => startLesson(window.BARBER_LESSONS[0])}
        >
          {I18N.t('startPractice')}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-3">{I18N.t('customerService')}</h2>
        <p className="text-neutral mb-4">{I18N.t('help')}</p>

        <button
          className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-blue-500 transition"
          onClick={openCustomerService}
        >
          {I18N.t('contact')}
        </button>
      </div>
    </div>
  );
};

// LessonCard Component
const LessonCard = ({ lesson, isLocked, isCompleted, isDisabled, onClick }) => {
  return (
    <div
      className={`rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all ${
        isLocked || isDisabled ? 'bg-gray-200 opacity-60' : isCompleted ? 'bg-primary/10' : 'bg-white border-2 border-primary hover:bg-primary/5'
      }`}
      onClick={isDisabled ? null : onClick}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
        isLocked ? 'bg-gray-300' : isCompleted ? 'bg-primary' : 'bg-primary/20'
      }`}>
        {isLocked ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
          </svg>
        ) : isCompleted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 11-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
          </svg>
        ) : (
          <span className="text-primary font-bold text-2xl">{lesson.icon}</span>
        )}
      </div>

      <h3 className={`font-bold text-center ${isLocked ? 'text-gray-500' : 'text-gray-800'}`}>
        {lesson.title}
      </h3>
    </div>
  );
};

// LessonScreen Component
const LessonScreen = ({ lesson, completeLesson, failExercise }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [shuffledExercises, setShuffledExercises] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    // Shuffle the exercises when entering a lesson
    if (lesson && lesson.exercises) {
      const shuffled = [...lesson.exercises].map(exercise => {
        if (exercise.options) {
          // Create a copy of the exercise with shuffled options
          const shuffledOptions = [...exercise.options]
            .sort(() => Math.random() - 0.5);

          return {
            ...exercise,
            options: shuffledOptions
          };
        }
        return exercise;
      });

      setShuffledExercises(shuffled);
    }
  }, [lesson]);

  const exercises = shuffledExercises.length > 0 ? shuffledExercises : lesson.exercises;
  const currentExercise = exercises[currentExerciseIndex];

  const handleAnswer = (isAnswerCorrect) => {
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      failExercise();
    }

    setTimeout(() => {
      setShowFeedback(false);

      if (currentExerciseIndex < exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setProgress((currentExerciseIndex + 1) / exercises.length * 100);
      } else {
        completeLesson(correctAnswers);
      }
    }, 1500);
  };

  const startExercises = () => {
    setShowContent(false);
    setProgress(0);
  };

  return (
    <div className="container mx-auto pt-24 px-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="w-full bg-gray-200 h-2 mb-8">
          <div
            className="bg-primary h-2 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!showContent && (
          <div className="mb-4 flex justify-between">
            <div className="text-neutral">{I18N.t('question')} {currentExerciseIndex + 1} {I18N.t('of')} {exercises.length}</div>
            <div className="text-primary font-bold">{I18N.t('points')} {correctAnswers} / {exercises.length}</div>
          </div>
        )}

        {showContent && lesson.content ? (
          <LessonContent content={lesson.content} onComplete={startExercises} />
        ) : (
          <Exercise
            exercise={currentExercise}
            onAnswer={handleAnswer}
            disabled={showFeedback}
          />
        )}

        {showFeedback && (
          <div className={`fixed bottom-0 left-0 right-0 p-4 text-center text-white font-bold ${
            isCorrect ? 'bg-primary' : 'bg-secondary'
          }`}>
            {isCorrect ? (
              <div className="flex items-center justify-center">
                <span className="animate-bounce text-2xl mr-2">✨</span>
                {I18N.t('correct')} +1 {I18N.t('point')}
                <span className="animate-bounce text-2xl ml-2">✨</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">❌</span>
                {I18N.t('incorrect')} {I18N.t('tryAgain')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// LessonContent Component
const LessonContent = ({ content, onComplete }) => {
  return (
    <div className="lesson-content">
      <h2 className="text-2xl font-bold mb-6 text-center">{I18N.t('basicTools')}</h2>

      <div className="space-y-8 mb-6">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center border-b pb-6">
            <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
              <div className="h-48 w-48 bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full py-3 rounded-lg font-bold text-white bg-primary hover:bg-yellow-600 transition"
        onClick={onComplete}
      >
        {I18N.t('startPractice')}
      </button>
    </div>
  );
};

// Exercise Component
const Exercise = ({ exercise, onAnswer, disabled }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    if (disabled) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (disabled || selectedOption === null) return;
    onAnswer(selectedOption === exercise.correctAnswer);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{exercise.question}</h2>

      {exercise.type === 'multiple-choice' && (
        <div className="space-y-3 mb-8">
          {exercise.options.map((option, index) => (
            <div
              key={index}
              className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                selectedOption === option
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedOption === option ? 'border-primary' : 'border-gray-300'
              }`}>
                {selectedOption === option && (
                  <div className="w-3 h-3 rounded-full bg-primary" />
                )}
              </div>
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}

      {exercise.type === 'image-selection' && (
        <div className="grid grid-cols-2 gap-4 mb-8">
          {exercise.options.map((option, index) => (
            <div
              key={index}
              className={`p-4 border-2 rounded-lg cursor-pointer transition text-center ${
                selectedOption === option.text
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleOptionSelect(option.text)}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral" viewBox="0 0 24 24" fill="currentColor">
                    {option.icon}
                  </svg>
                </div>
                <span className="font-medium">{option.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className={`w-full py-3 rounded-lg font-bold text-white transition ${
          selectedOption === null || disabled
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-primary hover:bg-yellow-600'
        }`}
        onClick={handleSubmit}
        disabled={selectedOption === null || disabled}
      >
        {I18N.t('check')}
      </button>
    </div>
  );
};

const App = () => {
  const [currentLang, setCurrentLang] = useState('es');
  const [currentScreen, setCurrentScreen] = useState('auth'); // 'auth', 'home', 'lesson', 'admin'
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const [isAdmin, setIsAdmin] = useState(false); // Track admin role
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);
  const [health, setHealth] = useState(5);
  const [gems, setGems] = useState(0);
  const [heartCooldown, setHeartCooldown] = useState(0);
  const [points, setPoints] = useState(0);
  const [showRankings, setShowRankings] = useState(false);
  const [lastLessonAttempted, setLastLessonAttempted] = useState(null);
  const [showHealthWarning, setShowHealthWarning] = useState(false);

  // Initialize user data and auth state on component mount
  useEffect(() => {
    UserData.init();
    setStreak(UserData.current.streak);
    setPoints(UserData.current.points);

    // Check for authentication status
    const token = localStorage.getItem('authToken');
    if (token) {
      //const tokenData = UserAuth.verifyToken(token);
      //if (tokenData.valid) {
        setIsAuthenticated(true);
       // setIsAdmin(tokenData.user.isAdmin);
        //setCurrentScreen(tokenData.user.isAdmin ? 'admin' : 'home');
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            user.getIdTokenResult().then((idTokenResult) => {
              setIsAdmin(idTokenResult.claims.admin);
              setCurrentScreen(idTokenResult.claims.admin ? 'admin' : 'home');
            });
          } else {
            setCurrentScreen('auth');
            setIsAuthenticated(false);
          }
        });
     // } else {
        // Token is invalid, remove it and stay at auth screen
      //  localStorage.removeItem('authToken');
      //}
    } else {
      setCurrentScreen('auth'); // Go to auth screen if not authenticated
    }

  }, []);

  // Heart regeneration cooldown timer (remains same)
  useEffect(() => {
    let timer;
    if (heartCooldown > 0) {
      timer = setInterval(() => {
        setHeartCooldown(prev => Math.max(0, prev - 1));
      }, 1000);
    } else if (health < 5 && heartCooldown === 0) {
      setHealth(prev => prev + 1);
      // Reset cooldown timer for next heart (20 minutes = 1200 seconds)
      setHeartCooldown(1200);
    }

    return () => clearInterval(timer);
  }, [heartCooldown, health]);

  const startLesson = (lesson) => {
    if (health <= 0) {
      setShowHealthWarning(true);
      setTimeout(() => setShowHealthWarning(false), 3000);
      return;
    }

    // Update streak when starting a lesson
    UserData.updateStreak();
    setStreak(UserData.current.streak);

    setLastLessonAttempted(lesson);
    setCurrentLesson(lesson);
    setCurrentScreen('lesson');
  };

  const completeLesson = (earnedPoints) => {
    setProgress(progress + 10);
    setStreak(streak + 1);
    setGems(gems + 5);

    // Update points
    UserData.updatePoints(earnedPoints || 0);
    setPoints(UserData.current.points);

    setCurrentScreen('home');
  };

  const failExercise = () => {
    setHealth(prev => {
      const newHealth = prev - 1;
      // Start cooldown timer when health reaches zero
      if (newHealth === 0) {
        setHeartCooldown(1200); // 20 minutes = 1200 seconds
        setCurrentScreen('home'); // Return to home screen
      }
      return newHealth;
    });
  };

  const openCustomerService = () => {
    window.open('https://chat.whatsapp.com/+5356960902', '_blank');
  };

  const toggleRankings = () => {
    setShowRankings(!showRankings);
  };

  // Function to handle successful authentication and set auth state
  const handleAuthSuccess = (token, isAdminUser) => {
    localStorage.setItem('authToken', token); // Store token
    setIsAuthenticated(true);
    setIsAdmin(isAdminUser);
    
    firebase.auth().onAuthStateChanged(user => {
          if (user) {
            user.getIdTokenResult().then((idTokenResult) => {
              setIsAdmin(idTokenResult.claims.admin);
              setCurrentScreen(idTokenResult.claims.admin ? 'admin' : 'home');
            });
          } else {
            setCurrentScreen('auth');
            setIsAuthenticated(false);
          }
        });
  };

  // Function to handle logout
  const handleLogout = () => {
    window.UserAuth.logout(); // Use our logout function
    localStorage.removeItem('authToken'); // Remove token
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentScreen('auth'); // Go back to auth screen
  };
  
  const handleSetCurrentLang = (lang) => {
    setCurrentLang(lang);
    I18N.setLanguage(lang);
  };

  return (
    <div className="min-h-screen pb-20">
      {currentScreen !== 'auth' && (
        <Header
          progress={progress}
          streak={streak}
          health={health}
          gems={gems}
          heartCooldown={heartCooldown}
          points={points}
          toggleRankings={toggleRankings}
          setCurrentLang={handleSetCurrentLang}
        />
      )}

      {currentScreen === 'auth' && (
        <Auth onAuthSuccess={handleAuthSuccess} />
      )}

      {currentScreen === 'home' && isAuthenticated && !isAdmin && (
        <HomeScreen
          startLesson={startLesson}
          progress={progress}
          openCustomerService={openCustomerService}
          streak={streak}
          lastLessonAttempted={lastLessonAttempted}
          health={health}
        />
      )}

      {currentScreen === 'admin' && isAuthenticated && isAdmin && (
        <AdminDashboard onLogout={handleLogout} />
      )}


      {showHealthWarning && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-secondary text-white font-bold py-3 px-6 rounded-lg animate-bounce">
            {I18N.t('needHeart')}
          </div>
        </div>
      )}

      {currentScreen === 'lesson' && isAuthenticated && !isAdmin && (
        <LessonScreen
          lesson={currentLesson}
          completeLesson={completeLesson}
          failExercise={failExercise}
        />
      )}

      {showRankings && isAuthenticated && !isAdmin && (
        <RankingsModal
          rankings={UserData.rankings}
          userPoints={points}
          closeRankings={() => setShowRankings(false)}
        />
      )}
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('app-container'));
root.render(<App />);