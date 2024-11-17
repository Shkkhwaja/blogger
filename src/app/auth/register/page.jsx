"use client"; // Add this line for Next.js App Router compatibility
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
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
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full p-4">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form
            className="max-w-lg w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="remember-me"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-gray-800"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none ${
                  submitting ? "bg-gray-400" : ""
                }`}
              >
                {submitting ? "Creating..." : "Create an account"}
              </button>
              <p className="text-sm mt-6 text-gray-800">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
