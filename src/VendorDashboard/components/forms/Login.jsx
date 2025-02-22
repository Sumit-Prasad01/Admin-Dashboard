import React, { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Login successful');
      setEmail('');
      setPassword('');
      showWelcomeHandler();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {loading ? (
          <div className="flex flex-col items-center">
            <ThreeCircles visible={loading} height={50} width={50} color="#4fa94d" />
            <p className="mt-2 text-gray-600">Logging in... Please wait</p>
          </div>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={loginHandler} autoComplete="off">
            <h3 className="text-2xl font-semibold text-center">Vendor Login</h3>
            <label className="text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
            />
            <label className="text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded-md w-full focus:ring focus:ring-green-300"
              />
              <span
                className="absolute right-3 top-2 cursor-pointer text-gray-600"
                onClick={handleShowPassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
