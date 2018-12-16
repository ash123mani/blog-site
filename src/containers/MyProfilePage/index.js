import React from 'react';
import { connect } from 'react-redux';

import MyProfilePageOptions from '../../component/MyProfilePageOptions';
import MyProfilePageContents from '../../component/MyProfilePageContents';

import { setActiveTab } from './../../redux/actions/activeTab';

import './scss/index.scss';

const MyProfilePageContainer = props => {
  return (
    <div className="my-profile">
      <div className="my-profile__container">
        <div className="my-profile__container--options">
          <div className="name">
            <span>Account</span>
          </div>
          <div className="options-content">
            <MyProfilePageOptions setActiveTab={props.setActiveTab} activeTab={props.activeTab} />
          </div>
        </div>
        <div className="my-profile__container--details">
          <MyProfilePageContents user={props.userDetails} activeTab={props.activeTab} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.user,
    activeTab: state.activeTabReducer.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveTab: tab => dispatch(setActiveTab(tab))
  };
};

const MyProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfilePageContainer);

export default MyProfilePage;
