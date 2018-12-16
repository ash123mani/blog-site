import { LOGIN_REQUEST_BEGIN, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE } from './../actions/type';

const initialState = {
  loading: false,
  user: {},
  error: null,
  isLoggedIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_BEGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isLoggedIn: true
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
