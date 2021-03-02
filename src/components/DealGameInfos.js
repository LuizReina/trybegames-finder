import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameDetailedDeals from './GameDetailedDeals';

import './gameInfos.css';

class GameInfos extends React.Component {
  render() {
    const { selectedGame } = this.props;
    const {
      info: { title, thumb },
      cheapestPriceEver: { price },
      deals,
    } = selectedGame;
    const { dealID } = deals;

    return (
      <main className="top-container">
        <h1>Game Details</h1>
        <section className="game-details-container">
          <section className="infos-container">
            <section className="game-infos">
              <h3>Name: </h3>
              <p>{title}</p>
              <h3>Cheapest Price Ever: </h3>
              <p>{`US$ ${price}`}</p>
            </section>
            <section className="game-thumb">
              <img
                src={ thumb }
                alt={ `thumbnail for game ${title}` }
                className="thumb-detailed"
              />
            </section>
          </section>
        </section>
        <h1>Currently Deals</h1>
        <section className="deals-container">
          {deals.map((deal) => <GameDetailedDeals key={ dealID } dealCard={ deal } />)}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedGame: state.games.selectedGame,
});

GameInfos.propTypes = {
  selectedGame: PropTypes.shape({
    info: PropTypes.string.isRequired,
    cheapestPriceEver: PropTypes.string.isRequired,
    deals: PropTypes.shape({
      dealID: PropTypes.string.isRequired,
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(GameInfos);
