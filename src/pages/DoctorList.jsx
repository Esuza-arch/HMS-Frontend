import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/doctors')
          .then(re)