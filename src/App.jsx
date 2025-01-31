import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import AppointmentForm from './pages/AppointmentForm';
import ReviewForm from './pages/ReviewForm';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/appointments" element={<AppointmentForm />} />
            <Route path="/reviews" element={<ReviewForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
