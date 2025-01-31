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

    return (
        <div>
            <h1 className="review-form">Write a Review</h1>
            <Formik
                initialValues={{
                    doctorId: '',
                    rating: 5,
                    comment: '',
                }}
                validationSchema={ReviewSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch('http://127.0.0.1:5555/reviews', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...values,
                            patientI: 1,
                        }),
                    })
                    .then(response => {
                        if (!response.ok) throw new Error('Failed to submit review');
                        setSubmitStatus('success');
                        resetForm();
                    })
                    .catch(() => {
                        setSubmitStatus('error');
                    })
                    .finally(() => {
                        setSubmitting(false);
                    });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="form">
                        <div className="form-group">
                            <label htmlFor="doctorId" className="form-label">Select Doctor</label>
                            <Field as="select" name="doctorId" className="form-input">
                                <option value="">Choose a doctor</option>
                                {doctors.map(doctor => (
                                    <option key={doctor.id} value={doctor.id}>{doctor.name} - {doctor.specialty}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="doctorId" component="div" className="error-message"/>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Rating</label>
                            <div className="rating-input">
                                <Field name="rating">
                                    {({ field }) => (
                                        <div className="star-rating">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button key={star}type="button" onClick={() => field.onChange({
                                                    target: { name: 'rating', value: star}
                                                })} className={`star-button $(star <= field.value ? 'active' : '')`}> <Star size={24} /> </button>
                                            ))}
                                        </div>
                                    )}
                                </Field>
                                <ErrorMessage name="rating" component="div" className="error-message"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comment" className="form-label">Your Review</label>
                            <Field as="textarea" id="comment" name="comment" className="form-input" rows={4}/>
                            <ErrorMessage name="comment" component="div" className="error-message"/>
                        </div>

                        <button type="submit" className="button" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="error-message">
                                Failed to submit review. Please try again.
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ReviewForm;