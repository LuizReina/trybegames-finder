import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from '../components/HomePage';
import NotLoggedIn from '../components/NotLoggedIn';
import { getGamesDeals } from '../actions';

class Games extends React.Component {
  componentDidMount() {
    const { getGamesByDeals } = this.props;
    getGamesByDeals();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <main>
        {
          isLoggedIn
            ? <HomePage />
            : <NotLoggedIn />
        }
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getGamesByDeals: () => dispatch(getGamesDeals()),
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

Games.propTypes = {
  getGamesByDeals: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
