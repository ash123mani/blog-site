import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import TextInput from '../TextInput';

const LoginForm = props => {
  const { values, touched, errors, dirty, handleChange, handleBlur, handleReset, handleSubmit, isSubmitting } = props;
  return (
    <div className="register-form">
      <p>Sign In to your account</p>
      <form onSubmit={handleSubmit}>
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
        <TextInput
          type="password"
          name="password"
          placeholder="Password*"
          label="Password"
          value={values.password}
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
  mapPropsToValues({ email, password }) {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit(payload, { resetForm, setSubmitting, setErrors }) {
    console.log('Data submitted by user', payload);
    setTimeout(() => {
      if (payload.email === 'ashuma2721@gmail.com' && payload.password === 'password') {
        setErrors({ password: 'Email or Password is wrong' });
      } else {
        axios
          .post('http://localhost:3001/login', {
            email: payload.email,
            password: payload.password
          })
          .then(res => {
            if (res.data.status === 200) {
              alert(`${res.data.message}`);
            } else {
              return Promise.reject(res);
            }
          })
          .catch(err => {
            console.log('inise catch', err);
            setErrors({ password: `${err.data.message}` });
          });
        setSubmitting(false);
      }
    }, 2000);
    resetForm();
  }
});

export default formikEnhancer(LoginForm);
