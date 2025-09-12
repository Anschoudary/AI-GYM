import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext'; // Import AuthProvider

// Global components (present on almost all pages)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import AllGymsPage from './components/pages/AllGymsPage';
import AIToolsPage from './components/pages/AIToolsPage';
import BlogsPage from './components/pages/BlogsPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap the entire app with AuthProvider */}
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col"> {/* Use flex-col for sticky footer */}
          <Navbar /> {/* Navbar stays outside Routes to be present on all pages */}
          <main className="flex-grow"> {/* Main content grows to push footer down */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/gyms" element={<AllGymsPage />} />
              <Route path="/aitools" element={<AIToolsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer /> {/* Footer stays outside Routes to be present on all pages */}
        </div>
      </AuthProvider>
    </Router>
  );
}

// Create a simple ContactPage placeholder for now
// const ContactPage = () => (
//   <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex items-center justify-center">
//     <h1 className="text-4xl font-bold">Contact Us Page (Content from HomePage's Contact section)</h1>
//   </div>
// );


export default App;