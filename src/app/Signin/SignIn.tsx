"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignIn() {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("You don&apos;t have an account.");
      return;
    }

    // Simulated authentication check (Replace with actual authentication logic)
    if (email !== "test@example.com" || password !== "password123") {
      setError("Invalid email or password.");
      return;
    }

    setError("");
    alert("Successfully signed in!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mt-28 mb-20 w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your email" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your password" 
              required
            />
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 flex flex-col gap-3">
          <button 
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} /> Sign in with Google
          </button>
          <button 
            className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-2 rounded-lg shadow-sm hover:bg-blue-800 transition"
          >
            <FaFacebook size={20} /> Sign in with Facebook
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account? <a href="/SignUp" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
