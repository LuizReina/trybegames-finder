import React from 'react';
import { connect } from 'react-redux';

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
            ? gamesList.length > 0
              ? gamesList.map((game) => <DealCard key={ game.gameID } game={ game } />)
              : <h2>No matchs with given title.</h2>
            : gamesList.map((game) => <NormalCard key={ game.gameID } game={ game } />)
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

export default connect(mapStateToProps, null)(GameList);
