import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import our auth context

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate(); // For programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate login
    const success = login(username, password); // Call the login function from context
    if (success) {
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password.'); // This would typically come from backend
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#121212] p-8 rounded-lg shadow-2xl space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#f5f5f5]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#a3a3a3]">
            Or{' '}
            <Link to="/signup" className="font-medium text-[#dc2626] hover:text-[#b91c1c]">
              create a new account
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
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm mb-4"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#333] placeholder-[#a3a3a3] text-[#f5f5f5] bg-[#0a0a0a] focus:outline-none focus:ring-[#dc2626] focus:border-[#dc2626] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#dc2626] focus:ring-[#dc2626] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#a3a3a3]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#dc2626] hover:text-[#b91c1c]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#dc2626] hover:bg-[#b91c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#dc2626]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;