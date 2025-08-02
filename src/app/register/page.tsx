"use client";

import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    schoolName: "",
    contactNumber: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-yellow-600">ieeja.com</a>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Exam Registration</h1>
            <p className="text-gray-800">Fill out the form below to register for the exam</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-gray-900 placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Grade Field */}
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-900 mb-2">
                Grade *
              </label>
              <select
                id="grade"
                name="grade"
                required
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-gray-900"
              >
                <option value="">Select your grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>

            {/* School Name Field */}
            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-900 mb-2">
                School Name *
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                required
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-gray-900 placeholder-gray-500"
                placeholder="Enter your school name"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-900 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-gray-900 placeholder-gray-500"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Submit Registration
              </button>
            </div>
          </form>

          {/* Back to Home Link */}
          <div className="text-center mt-6">
            <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}