import React from 'react';
// --- NEW: Import useLocation ---
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- CORRECTED IMPORT PATHS to match your project structure ---
import { AuthProvider } from './components/context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import AllGymsPage from './components/pages/AllGymsPage';
import AIToolsPage from './components/pages/AIToolsPage';
import BlogsPage from './components/pages/BlogsPage';
import ContactPage from './components/pages/ContactPage';
import GymPage from './components/pages/GymPage';


// --- NEW: The AppContent wrapper that contains our layout and logic ---
// This component can use the useLocation hook because it's inside <Router>
const AppContent = () => {
  const location = useLocation();
  // We are in "focus mode" if the path is exactly '/aitools'
  const isAiToolsPage = location.pathname === '/aitools';

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      {/* Conditionally render Navbar only if we are NOT on the AI tools page */}
      {!isAiToolsPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/gyms" element={<AllGymsPage />} />
          <Route path="/aitools" element={<AIToolsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gym/:id" element={<GymPage />} />
        </Routes>
      </main>

      {/* Conditionally render Footer only if we are NOT on the AI tools page */}
      {!isAiToolsPage && <Footer />}
    </div>
  );
};


// The main App component is now simpler. It just sets up the providers and router.
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;