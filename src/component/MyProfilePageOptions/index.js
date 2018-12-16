import React from 'react';

import './scss/index.scss';

class MyProfilePageOptions extends React.Component {
  tabs = [
    { id: 'profile', name: 'Profile' },
    { id: 'password', name: 'Password' },
    { id: 'bookmarks', name: 'Bookmarks' },
    { id: 'settings', name: 'Settings' }
  ];
  onClick = e => {
    this.props.setActiveTab(e.target.id);
  };
  showTabs = tab => {
    if (this.props.activeTab === tab.id) {
      tab.class = 'active';
    } else {
      tab.class = '';
    }
    return (
      <p onClick={this.onClick} id={tab.id} key={tab.id} className={tab.class}>
        {tab.name}
      </p>
    );
  };
  render() {
    console.log('hi', this.props);
    return (
      <div className="options">
        {this.tabs.map(tab => {
          return this.showTabs(tab);
        })}
      </div>
    );
  }
}

export default MyProfilePageOptions;
