"use client"; // Add this line for Next.js App Router compatibility
import React, { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Log form data for now (replace this with API integration later)
    console.log("Submitted Data:", formData);

    // Simulate a submission delay
    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>

          <form
            className="md:max-w-md w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue-600">
                Sign in
              </h3>
            </div>

            <div>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-gray-800 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  href="auth/forgot"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white ${
                  submitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                } focus:outline-none`}
              >
                {submitting ? "Signing in..." : "Sign in"}
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Don't have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
