import React, { useState } from 'react';
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

