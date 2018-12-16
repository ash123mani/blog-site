import React from 'react';
import { withFormik } from 'formik';

import TextInput from '../../TextInput';

import './scss/index.scss';

const PassWordManagement = props => {
  const { values, errors, dirty, touched, handleSubmit, handleChange, handleBlur, isSubmitting } = props;
  return (
    <div className="register-form password">
      <form onSubmit={handleSubmit}>
        <div className="register-form__tag password-content">Change your password</div>
        <TextInput
          type="password"
          name="currentPassword"
          placeholder="Current Password*"
          label="Current Password"
          value={values.currentPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.currentPassword && errors.currentPassword}
        />
        <TextInput
          type="password"
          name="newPassword"
          placeholder="New Password*"
          label="New Password"
          value={values.newPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.newPassword && errors.newPassword}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password*"
          label="Confirm"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={dirty && touched.confirmPassword && errors.confirmPassword}
        />
      </form>
    </div>
  );
};

const PasswordPage = withFormik({
  mapPropsToValues({ currentPassword, newPassword, confirmPassword }) {
    return {
      currentPassword: currentPassword || '',
      newPassword: newPassword || '',
      confirmPassword: confirmPassword || ''
    };
  }
})(PassWordManagement);

export default PasswordPage;
