import { SET_ERROR, REMOVE_ERROR } from './type';

export const setError = error => {
  return {
    type: SET_ERROR,
    payload: error
  };
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR
  };
};
