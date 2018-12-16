import { USER_DETAILS } from './type';

const getLoggedInUserDetails = () => {
  if (localStorage.getItem('jwtToken') && localStorage.getItem('userDetails')) {
    return JSON.parse(localStorage.getItem('userDetails'));
  } else {
    return {};
  }
};

export const userDetails = () => {
  return {
    type: USER_DETAILS,
    payload: getLoggedInUserDetails()
  };
};
