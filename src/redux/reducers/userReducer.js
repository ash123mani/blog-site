import isEmpty from 'lodash/isEmpty';

import { USER_DETAILS } from './../actions/type';

let initialState = {
  user: {},
  isAuthenticated: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };
    default:
      return state;
  }
};
