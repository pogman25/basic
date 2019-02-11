import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Preload from 'src/sharedComponents/Preload';
import PeopleList from '../../components/PeopleList';
import {
  getPeopleFromState,
  getNextPage,
  getTotalCountFromState,
  getIsFetchingFromState,
} from './selectors';
import { getPeople } from './duck';

const mapStateToProps = state => ({
  isFetching: getIsFetchingFromState(state),
  peopleList: getPeopleFromState(state),
  nextPage: getNextPage(state),
  totalCount: getTotalCountFromState(state),
});

const mapDispatchToProps = {
  getPeople,
};

class People extends Component {
  componentDidMount() {
    this.getMorePeople();
  }

  getMorePeople = () => {
    this.props.getPeople();
  }

  render() {
    const { peopleList, isFetching, nextPage } = this.props;
    return (
      <Fragment>
        <PeopleList peopleList={peopleList} />
        <div>
          {!!nextPage && !isFetching && <button onClick={this.getMorePeople}>больше</button>}
          {isFetching && <Preload />}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);
