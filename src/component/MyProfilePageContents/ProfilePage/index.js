import React from 'react';
import { withFormik } from 'formik';

import TextInput from './../../TextInput';

import './scss/index.scss';

const FormikProfilePage = props => {
  const { values, dirty, touched, handleSubmit, handleBlur, handleChange, errors, isSubmitting } = props;
  return (
    <div className="profile-page register-form">
      <form onSubmit={handleSubmit}>
        <div className="register-form__tag profile-page__content">Your Personal Details</div>
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
          type="text"
          name="contact"
          placeholder="Contact Number*"
          label="Contact Number"
          value={values.contact}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.contact && errors.contact}
        />
      </form>
    </div>
  );
};

const ProfilePage = withFormik({
  mapPropsToValues({ firstName, lastName, email, contact, user }) {
    return {
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName,
      email: email || user.email,
      contact: contact || user.contactNumber
    };
  }
})(FormikProfilePage);

export default ProfilePage;
