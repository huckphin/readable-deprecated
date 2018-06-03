import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';

class App extends Component {
  state = {
    categories: null,
  };

  render() {
    return (
      <TopBar />
    );
  }
}

export default App;
