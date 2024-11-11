import React, { useState } from 'react';
import { AlertCircle, Check, Smartphone, Mail, Lock, User, Calendar } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    number: '',
    password: '',
    age: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required';
    } else if (formData.userName.length < 3) {
      newErrors.userName = 'Username must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.number) {
      newErrors.number = 'Phone number is required';
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    const age = parseInt(formData.age);
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || age < 13 || age > 120) {
      newErrors.age = 'Please enter a valid age between 13 and 120';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-green-200 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>
        
        <div className="relative">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Join WeChat</h2>
            <p className="text-gray-600">Connect with the world</p>
          </div>

          {success && (
            <div className="alert alert-success mb-6">
              <Check className="w-6 h-6" />
              <span>Account created successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-12 ${
                    errors.userName ? 'input-error' : 'focus:border-green-500'
                  }`}
                  placeholder="Enter your username"
                />
              </div>
              {errors.userName && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.userName}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-12 ${
                    errors.email ? 'input-error' : 'focus:border-green-500'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-12 ${
                    errors.number ? 'input-error' : 'focus:border-green-500'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.number && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.number}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-12 ${
                    errors.password ? 'input-error' : 'focus:border-green-500'
                  }`}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Age</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-12 ${
                    errors.age ? 'input-error' : 'focus:border-green-500'
                  }`}
                  placeholder="Enter your age"
                />
              </div>
              {errors.age && (
                <label className="label">
                  <span className="label-text-alt text-error flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.age}
                  </span>
                </label>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-success w-full text-white hover:bg-green-600 transition-all duration-300"
            >
              Sign Up
            </button>

            <div className="divider">OR</div>

            <button
              type="button"
              className="btn btn-outline btn-success w-full hover:bg-green-50"
            >
              Continue with Google
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="#" className="text-green-500 hover:text-green-600 font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;