import React from 'react';

import './scss/index.scss';

const AlertBox = props => {
  console.log('props from alertbox', props);
  const handleClick = () => {
    props.removeError();
  };
  return props.errorMessage.error ? (
    <div className="alert-box">
      <strong>Ohh! </strong> {props.errorMessage.error}
      <span className="alert-box--closebtn" onClick={handleClick}>
        &times;
      </span>
    </div>
  ) : null;
};

export default AlertBox;
