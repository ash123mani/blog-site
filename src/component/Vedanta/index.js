import React, { Component } from 'react';
import axios from 'axios';

class Vedanta extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  callApi = () => {
    const res = axios.get('http://localhost:5000/api/hello');

    return res;
  };

  render() {
    return (
      <div>
        <p className="App-intro">Hi</p>
      </div>
    );
  }
}

export default Vedanta;
