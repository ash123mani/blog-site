import React from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';

import './scss/index.scss';

class AuthenticationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isRegister: true
    };
  }
  onLogInClick = e => {
    this.setState({ isRegister: false, isLogin: true });
  };
  onRegisterClick = e => {
    this.setState({ isLogin: false, isRegister: true });
  };
  render() {
    const signInClasses = ['auth-form__button--sign-in'];
    const signUpClasses = ['auth-form__button--sign-up'];

    if (this.state.isLogin === true && this.state.isRegister === true) {
      signInClasses.push('sign-in__button--active');
    }
    if (this.state.isLogin === true && this.state.isRegister === false) {
      signInClasses.push('sign-in__button--active');
    }
    if (this.state.isRegister === true && this.state.isLogin === false) {
      signUpClasses.push('sign-up__button--active');
    }

    return (
      <div className="auth-form">
        <div className="auth-form__header">
          <p>Header</p>
        </div>
        <div className="auth-form__main-container">
          <div className="auth-form__container">
            <div className="auth-form__content">
              <div className="auth-form__tabs">
                <button className={signInClasses.join(' ')} onClick={this.onLogInClick} name="sign-in">
                  Sign In
                </button>
                <button className={signUpClasses.join(' ')} onClick={this.onRegisterClick} name="sign-up">
                  Sign Up
                </button>
              </div>
              {this.state.isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthenticationForm;
