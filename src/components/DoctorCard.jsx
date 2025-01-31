import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor}) {
    return (
        <div>
           <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.speciallty}</p>
            <p>{doctor.experience} years of experience</p>
            <Link to={`/appointments?doctorId=${doctor.id}`}>Book an appointment</Link>
           </div>
        </div>
    )
}

export default DoctorCard;