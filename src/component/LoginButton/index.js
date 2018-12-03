import React from 'react';

import './scss/index.scss';

const LoginButton = props => {
	return (
		<div className="login-form__button">
			<a href="/login">
				<button className="register-form__button">Sign-In</button>
			</a>
		</div>
	);
};

export default LoginButton;
