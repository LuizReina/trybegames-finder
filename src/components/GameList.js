import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DealCard from './DealCard';
import NormalCard from './NormalCard';

import './gameList.css';

class GameList extends React.Component {
  render() {
    const { gamesList, isDeals } = this.props;
    return (
      <main className="container">
        <section className="game-card-list">
          {
            isDeals
              ? gamesList.map((game) => <DealCard key={ game.gameID } game={ game } />)
              : gamesList.map((game) => <NormalCard key={ game.gameID } game={ game } />)
          }
          {
            gamesList.length === 0
              ? <h2>No matchs with given title.</h2>
              : ''
          }
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  gamesList: state.games.gamesList,
  isDeals: state.games.isDeals,
});

GameList.propTypes = {
  gamesList: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  isDeals: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(GameList);
