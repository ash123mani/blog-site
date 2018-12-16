import { ACTIVE_TAB } from './../actions/type';

const initialState = {
  activeTab: 'profile'
};

export const activeTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };
    default:
      return state;
  }
};
