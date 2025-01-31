import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor}) {
    return (
        <div className="doctor-card">
           <div className="doctor-info">
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialty">{doctor.speciallty}</p>
            <p className="doctor-experience">{doctor.experience} years of experience</p>
            <Link to={`/appointments?doctorId=${doctor.id}`}>Book an appointment</Link>
           </div>
        </div>
    )
}

export default DoctorCard;