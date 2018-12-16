import { ACTIVE_TAB } from './type';

export const setActiveTab = tabName => {
  return {
    type: ACTIVE_TAB,
    payload: tabName
  };
};
