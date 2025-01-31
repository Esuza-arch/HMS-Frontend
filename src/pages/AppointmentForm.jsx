import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field, ErroMessage } from 'formik';
import * as Yup from 'yup';

const AppointmentSchema = Yup.object().shape({
    date: Yup.date() 
      .min(new Date(), 'Date must be in the future')
      .required('Date is required'),
    time: Yup.string()
      .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
      .required('Time is required'), 
    reason: Yup.string()
      .min(10, 'Reason must be at least 10 characters')
      .required('Reason is required')   
});

function AppointmentForm() {
    const [seaarchParams] = useSearchParams();
    const [submitStatus, setSubmitStatus] = useState('idle');
    const doctorId = searchParams.get('doctorId') || 1

    return (
        <div className="appointment-form">
            <h1>Book an Appointment</h1>
            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    reason: '',
                }}
                validationSchema={AppointmentSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch('http://127.0.0.1:5555/appointments', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            doctorId: doctorId,
                            patientId: 1,
                            ...values,
                        }),
                    })
                    .then(response => {
                        if (!response.ok) throw new Error('Failed to book appointment');
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
                    <Form className>
                        <div className="form-group">
                            <label htmlForm="date" className="form-label">Date</label>
                            <Field type="date" id="date" name="date" className="form-input"/>
                            <ErrorMessage name="date" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlForm="time" className="form-label">Time</label>
                            <Field type="time" id="time" name="time" className="form-input"/>
                            <ErrorMessage name="time" component="div" className="error-message"/>
                        </div>

                        <div className="form-group">
                            <label htmlForm="reason" className="form-label">Reason for visit</label>
                            <Field as="textarea" id="reason" name="reason" className="form-input" rows={4}/>
                            <ErrorMessage name="reason" component="div" className="error-message" />
                        </div>

                        <button type="submit" className="button" disabled={isSubmitting}>
                            {isSubmitting ? 'Booking...' : 'Book Appointment'}
                        </button>

                        {submitStatus === 'success' && (
                            <div>
                                Appointment booked successfully!
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="error-message">
                                Failed to book appointment. Please try again.
                            </div>
                        )}
                    </Form>
                )}    
            </Formik>
        </div>
    );
}

export default AppointmentForm;