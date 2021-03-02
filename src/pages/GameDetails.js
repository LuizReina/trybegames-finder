import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

GameDetails.propTypes = {
  getGameDetails: PropTypes.func.isRequired,
  isFetchingGames: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
