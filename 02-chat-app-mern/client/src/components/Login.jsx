import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { useEffect } from 'react';
import { useNavigate  , useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {  


  const navigate = useNavigate();
  const location = useLocation();
  const { showSuccess, showError } = useToast();

  const [hasShownSuccess, setHasShownSuccess] = useState(false);

  useEffect(() => {
    // Show success toast only if it hasn't been shown yet
    if (location.state?.success && !hasShownSuccess) {
      showSuccess("Successfully Registered! Please log in.");
      setHasShownSuccess(true); // Mark the success toast as shown
    }
  }, [location.state?.success, hasShownSuccess, showSuccess]);

  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/authRoutes/loginUser', formData);
      // navigate('/homeScreen' ,{ state : { success : true} });
      navigate("/homeScreen"),
      toast.success("happy G")
    } catch (error) {
      showError(error.response?.data?.message)
    }
  };

  return (
    <div
      style={{ backgroundColor: '#EDEDED' }} // Solid color background
      className="h-screen flex items-center justify-center"
    >
      <ToastContainer />
      <div className="bg-[#f0f2f5] bg-opacity-95 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Log In</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username/Email */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Mail className="text-[#128C7E] mr-3" />
            <input
              type="text"
              id="identifier"
              name="identifier"
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Username or Email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b border-gray-300 pb-2">
            <Lock className="text-[#128C7E] mr-3" />
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#25D366] text-white font-bold rounded-md shadow-md hover:bg-[#20c05c] focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Optional: Link to Signup */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#128C7E] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
