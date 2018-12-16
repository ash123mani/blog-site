import axios from 'axios';

import { userDetails } from './userActions';
import { setError } from './errorActions';

import { LOGIN_REQUEST_BEGIN, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE } from './type';

export const loginRequestBegin = () => {
  return {
    type: LOGIN_REQUEST_BEGIN
  };
};

export const loginRequestSuccess = user => {
  console.log('user from loginRequestSuccess', user);
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: user
  };
};

export const loginRequestFailure = error => {
  return {
    type: LOGIN_REQUEST_FAILURE,
    payload: error
  };
};

export const loginRequest = (user, callback) => {
  console.log(typeof callback);
  console.log('user from loginRequest', user);
  return dispatch => {
    dispatch(loginRequestBegin());
    return axios
      .post('http://localhost:3001/login', {
        email: user.email,
        password: user.password
      })
      .then(res => {
        if (res.data.status === 200) {
          console.log('user from loginRequest', res.data.user);
          localStorage.setItem('jwtToken', res.data.user.token);
          localStorage.setItem('userDetails', JSON.stringify(res.data.user));
          dispatch(loginRequestSuccess(res.data.user));
          dispatch(userDetails(res.data.user));
          callback();
        } else {
          dispatch(setError(res.data.message));
          dispatch(loginRequestFailure(res.data.message));
          return Promise.reject(res);
        }
      })
      .catch(err => {
        console.log('inise catch', err);
      });
  };
};
