import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Star } from 'lucide-react';

const ReviewSchema = Yup.object().shape({
    doctorId: Yup.number().required('Please select a doctor'),
    rating: Yup.number()
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be at most 5')
      .required('Rating is required'),
    comment: Yup.string()
      .min(10, 'Comment must be at least 10 characters')
      .required('Comment is required'),
});

function ReviewForm() {
    const [doctors, setDoctors] = useState([]);
    const [submitStatus, setSubmitStatus] = useState('idle');

    useEffect(() => {
        fetch('http://127.0.0.1:5555/doctors')
          .then(response => response.json())
          .then(data => setDoctors(data))
          .then(error => console.error('Error fetching doctors:', error));
    }, []);