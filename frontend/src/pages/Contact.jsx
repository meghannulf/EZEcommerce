import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('Your message has been sent successfully!');
    // Add logic for sending the message (like an API call) here
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left px-6 sm:px-12">
          {/* Title */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            Contact Us
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Have questions, feedback, or just want to say hello? We’d love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[400px] border border-gray-300 p-6 shadow-md rounded-md"
        >
          {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
          {success && <div className="text-green-500 text-sm mb-4 text-center">{success}</div>}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact
