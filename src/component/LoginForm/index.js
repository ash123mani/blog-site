import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextInput from '../TextInput';
import { loginRequest } from './../../redux/actions/loginActions';

const LoginForm = props => {
  const { values, touched, errors, dirty, handleChange, handleBlur, handleReset, handleSubmit, isSubmitting } = props;
  return (
    <div className="register-form">
      <div className="register-form__tag">Sign In to your account</div>
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

const FormikEnhancer = withFormik({
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
  handleSubmit(payload, { props, resetForm, setSubmitting, setErrors }) {
    props.loginRequest(
      {
        email: payload.email,
        password: payload.password
      },
      () => {
        setTimeout(() => {
          props.history.push('/');
        }, 1000);
      }
    );
    setSubmitting(false);
    resetForm();
  },
  displayName: 'BasicForm'
});

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (user, callback) => dispatch(loginRequest(user, callback))
  };
};

const FormikEnhancedForm = FormikEnhancer(LoginForm);

const RoutedForm = withRouter(FormikEnhancedForm);

export default connect(
  null,
  mapDispatchToProps
)(RoutedForm);
