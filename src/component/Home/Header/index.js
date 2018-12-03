import React from 'react';
import { Icon } from 'antd';
import LoginButton from '../../LoginButton';
import MyProfileTab from '../../MyProfileTab';

import './scss/index.scss';

const Header = () => {
  var state = {
    isLogin: false
  };

  return (
    <div className="header">
      <div className="header-content">
        <a href="/" className="header__link header-content__home">
          Home
        </a>
        <a href="/finance" className="header__link">
          Finance
        </a>
        <a href="/vedanata" className="header__link">
          Vedanta
        </a>
        <a href="/technology" className="header__link">
          Web Tech
        </a>
        <div className="header__dropdown">
          <button className="header__dropdown-button">
            More
            <Icon className="header__dropdown-icon" type="caret-down" theme="outlined" />{' '}
          </button>
          <div className="header__dropdown-content">
            <a href="#about" className="header__dropdown-content--link">
              About
            </a>
            <a href="#contact" className="header__dropdown-content--link">
              Contact Us
            </a>
          </div>
          {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars" />
          </a> */}
        </div>
        {state.isLogin ? <MyProfileTab /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
