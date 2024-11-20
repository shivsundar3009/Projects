import React, { useState } from 'react';
import axios from 'axios';
import { User, Mail, Phone, Lock, Calendar } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    number: '',
    password: '',
    gender: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/userRoutes/createUser', formData);
      setFormData({ userName: '', email: '', number: '', password: '', gender: '', age: '' });
      navigate('/login', { state: { success: true } });
    } catch (error) {
      console.error('Error registering user:', error.response?.data?.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#EDEDED' }} className="h-screen flex items-center justify-center">
      <div className="bg-[#f0f2f5] bg-opacity-95 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <User className="text-[#128C7E] mr-3" />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Username"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Mail className="text-[#128C7E] mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Phone className="text-[#128C7E] mr-3" />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Lock className="text-[#128C7E] mr-3" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Password"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <User className="text-[#128C7E] mr-3" />
            <div className="flex gap-4 w-full">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="radio radio-sm radio-accent mr-2"
                  required
                />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="radio radio-sm radio-accent mr-2"
                />
                <span className="text-sm">Female</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  className="radio radio-sm radio-accent mr-2"
                />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>

          {/* Age */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Calendar className="text-[#128C7E] mr-3" />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Age"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#25D366] text-white font-bold rounded-md shadow-md hover:bg-[#20c05c] focus:outline-none"
            >
              Sign Up
            </button>
          </div>

          {/* Optional: Link to Login */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/" className="text-[#128C7E] font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
