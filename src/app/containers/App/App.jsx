import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import People from 'src/pages/people';
import logo from './logo.svg';
import Notification from '../Notification';
import { showError } from './duck';
import './App.css';

const mapDispatchToProps = {
  showError,
};

class App extends Component {
  showError = () => {
    this.props.showError('teset error');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Пример работы с редюсерами</p>
          <button onClick={this.showError}>show error</button>
        </header>
        <Switch>
          <Route path="/" exact component={People} />
        </Switch>
        <Notification />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App);
