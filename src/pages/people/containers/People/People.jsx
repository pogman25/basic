import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
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
    const { getPeople } = this.props;
    getPeople();
  }

  render() {
    const {
      peopleList, isFetching, nextPage, totalCount,
    } = this.props;
    return (
      <Fragment>
        <PeopleList peopleList={peopleList} />
        <div>
          {!!nextPage && !isFetching && (
            <button type="button" onClick={this.getMorePeople}>
              больше
            </button>
          )}
          <p>{`получено ${peopleList.length} из ${totalCount}`}</p>
          {isFetching && <Preload />}
        </div>
      </Fragment>
    );
  }
}

People.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  nextPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  getPeople: PropTypes.func.isRequired,
  peopleList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      eye_color: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      height: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);
