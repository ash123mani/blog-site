import React from 'react';
import ProfilePage from './ProfilePage';
import PasswordPage from './PasswordManagement';

const MyProfilePageContents = props => {
  const activePage = props => {
    if (props.activeTab === 'profile') {
      return <ProfilePage user={props.user} />;
    } else if (props.activeTab === 'password') {
      return <PasswordPage user={props.user} />;
    } else {
      return <p>Work in progress</p>;
    }
  };

  return <React.Fragment>{activePage(props)}</React.Fragment>;
};

export default MyProfilePageContents;
