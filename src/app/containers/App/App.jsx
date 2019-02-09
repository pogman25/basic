import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Notification from '../Notification';
import { getPeople } from './duck';
import { getPeopleFromState } from './selectors';
import './App.css';

const mapStateToProps = state => ({
	peopleList: getPeopleFromState(state),
});

const mapDispatchToProps = {
	getPeople,
};

class App extends Component {
	componentDidMount() {
		this.getMorePeople();
	}

	getMorePeople = () => {
		this.props.getPeople();
	};

	render() {
		const { peopleList } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Пример работы с редюсерами</p>
				</header>
				<ul>
					{peopleList.map(i => (
						<li key={i.name}>{i.name}</li>
					))}
				</ul>
				<button onClick={this.getMorePeople}>больше</button>
				<Notification />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
