// External
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Internal
import AboutUsPage from './pages/AboutUs';
import DashboardPage from './pages/Dashboard';
import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';
import StudyPage from './pages/Study';
import EditDeckPage from './pages/EditDeck';
import ResetPasswordPage from './pages/ResetPassword';
import SendPasswordPage from './pages/SendPassword'
import VerifyEmailPage from './pages/VerifyEmail';
import { AuthProvider } from './context/AuthContext';
import InitialAuthCheck from './components/InitialAuthCheck';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<InitialAuthCheck />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/study/:deckId" element={<StudyPage />} />
            <Route path="/edit/:deckId" element={<EditDeckPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/updatePassword" element={<ResetPasswordPage/>} />
            <Route path="/sendPassword" element={<SendPasswordPage />} />
            <Route path="/verify" element={<VerifyEmailPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
