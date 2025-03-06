import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    alert(`Username: ${username}\nPassword: ${password}`);
    // Add the logic to handle authentication (like API calls) here
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left px-6 sm:px-12">
          {/* Title */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            Login
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Welcome back! Please log in to your account to continue exploring our services.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[400px] border border-gray-300 p-6 shadow-md rounded-md"
        >
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login
