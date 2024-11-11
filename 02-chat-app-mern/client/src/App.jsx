// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
