import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import our auth context

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth(); // Get the signup function from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulate signup
    const success = signup(username, email, password); // Call the signup function from context
    if (success) {
      navigate('/dashboard'); // Redirect to dashboard on successful signup
    } else {
      setError('Signup failed. Please try again.'); // This would typically come from backend
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#121212] p-8 rounded-lg shadow-2xl space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#f5f5f5]">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-[#a3a3a3]">
            Or{' '}
            <Link to="/login" className="font-medium text-[#dc2626] hover:text-[#b91c1c]">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-900 text-white p-3 rounded-md text-sm text-center">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <input
                id="signup-username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#dc2626] hover:bg-[#b91c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dc2626]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;