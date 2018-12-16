import React from 'react';
import { Icon } from 'antd';

import './scss/index.scss';

const MyProfileTab = props => {
  const myProfileTabs = [
    { link: '/myprofile', type: 'idcard', name: 'My Profile' },
    { link: '/bookmarks', type: 'book', name: 'Bookmarks' },
    { link: '/contact-us', type: 'phone', name: 'Contact Us' },
    { link: '/logout', type: 'logout', name: 'Log out' }
  ];

  const showMyProfileTabs = tab => {
    return (
      <a href={tab.link} className="drop-down__link-wrapper">
        <Icon type={tab.type} className="drop-down__link-icon" />
        <span>{tab.name}</span>
      </a>
    );
  };

  return (
    <div className="my-profile-tab">
      <div>
        <span className="my-profile-tab__name">{props.user.firstName}</span>
        <div className="my-profile-tab__icon">
          <Icon type="user" />
        </div>
      </div>
      <div className="drop-down">
        <div className="drop-down__content">
          {myProfileTabs.map(tab => {
            return showMyProfileTabs(tab);
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProfileTab;
