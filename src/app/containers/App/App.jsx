import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Notification from '../Notification';
import PeopleList from '../../components/PeopleList';
import Preload from '../../components/Preload';
import { getPeople } from './duck';
import { showError } from '../Notification/duck';
import {
  getPeopleFromState,
  getNextPage,
  getTotalCountFromState,
  getIsFetchingFromState,
} from './selectors';
import './App.css';

const mapStateToProps = state => ({
  isFetching: getIsFetchingFromState(state),
  peopleList: getPeopleFromState(state),
  nextPage: getNextPage(state),
  totalCount: getTotalCountFromState(state),
});

const mapDispatchToProps = {
  getPeople,
  showError,
};

class App extends Component {
  componentDidMount() {
    this.getMorePeople();
  }

  getMorePeople = () => {
    this.props.getPeople();
  };

  showError = () => {
    this.props.showError('teset error');
  };

  render() {
    const { peopleList, nextPage, isFetching } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Пример работы с редюсерами</p>
          <button onClick={this.showError}>show error</button>
        </header>
        <PeopleList peopleList={peopleList} />
        <div>
          {!!nextPage && !isFetching && <button onClick={this.getMorePeople}>больше</button>}
          {isFetching && <Preload />}
        </div>
        <Notification />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
