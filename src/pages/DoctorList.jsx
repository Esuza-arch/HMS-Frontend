import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/doctors')
          .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch doctors');
            }
            return response.json();
          })
          .then(data => {
              setDoctors(data);
              setLoading(false);
          })
          .catch(err => {
              setError('Failed to load doctors. Please try again later.');
              setLoading(false);
          });
    }, []);

    if (loading) return <div className="loading">Loading doctors...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="doctor-list">
            <h1>Our Doctors</h1>
            <div className="doctor-grid">
                {doctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
             </div>
        </div>
    );
}

export default DoctorList;