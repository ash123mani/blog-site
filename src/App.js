import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Vedanta from './component/Vedanta';
import AuthenticationForm from './component/AuthenticationForm';
import MyProfilePage from './component/MyProfilePage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={AuthenticationForm} />
          <Route path="/vedanta" component={Vedanta} />
          <Route path="/myprofile" component={MyProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
