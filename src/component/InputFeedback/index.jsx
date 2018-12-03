import React from 'react';

const InputFeedback = props => {
	return props.error ? <div className="input-feedback">{props.error}</div> : null;
};

export default InputFeedback;
