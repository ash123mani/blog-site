import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import TextInput from '../TextInput';

import './scss/index.scss';

const RegisterForm = props => {
  const { values, touched, errors, dirty, handleChange, handleBlur, handleReset, handleSubmit, isSubmitting } = props;

  return (
    <div className="register-form">
      <p>Create your student account</p>
      <form onSubmit={handleSubmit}>
        <div className="register-form__name-input">
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name*"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={dirty && touched.firstName && errors.firstName}
          />
          <br />
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name*"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={dirty && touched.lastName && errors.lastName}
          />
        </div>
        <br />
        <TextInput
          type="email"
          name="email"
          placeholder="Email Address*"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.email && errors.email}
        />
        <br />
        <TextInput
          type="text"
          name="contact"
          placeholder="Contact Number*"
          label="Contact Number"
          value={values.contact}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.contact && errors.contact}
        />
        <br />
        <TextInput
          type="password"
          name="password"
          placeholder="Password*"
          label="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.password && errors.password}
        />
        <br />
        <div className="register-form__button">
          <button
            name="reset"
            type="button"
            className="register-form__button--reset"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button
            name="submit"
            type="submit"
            className="register-form__button--submit"
            disabled={!dirty || isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const formikEnhancer = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, contact }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || '',
      contact: contact || 8971711723
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(3, "C'mon, your name is longer than that")
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('Last name is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    contact: Yup.number()
      .min(10, 'Contact Number should be of 10 characters')
      .required('Contact Number is required'),
    password: Yup.string()
      .min(6, 'Password should be minimum of 6 characters')
      .required('Password is required')
  }),
  handleSubmit(payload, { resetForm, setSubmitting, setErrors }) {
    setTimeout(() => {
      if (payload.email === 'ashuma2721@gmail.com') {
        setErrors({ email: 'Email already taken.' });
      } else {
        axios
          .post('http://localhost:3001/newuser', {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            contact: payload.contact,
            password: payload.password
          })
          .then(res => console.log('res is', res))
          .catch(err => console.log(err));
        setSubmitting(true);
        alert(`Submitted with Email ${payload.email}`);
      }
    }, 2000);
    resetForm();
  }
});

export default formikEnhancer(RegisterForm);
