import React from 'react';
import { connect } from 'react-redux';

import GameInfos from '../components/GameInfos';
import { fetchGameDetails } from '../actions';

class GameDetails extends React.Component {

  componentDidMount() {
    const { getGameDetails, match: { params: { id } } } = this.props;
    getGameDetails(id);
  }

  render() {
    const { isFetchingGames } = this.props;
    return (
      <main>
        {
          isFetchingGames
          ? <h1>Carregando</h1>
          : <GameInfos />
        }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetchingGames: state.games.isFetchingGames,
});

const mapDispatchToProps = (dispatch) => ({
  getGameDetails: (gameId) => dispatch(fetchGameDetails(gameId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
