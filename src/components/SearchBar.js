import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGames, getGamesDeals } from '../actions';

import './searchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    const { getGamesByTitle, getGamesByDeals, isDeals } = this.props;
    return (
      <header className="search-container">
        <h1>TrybeGames</h1>
        <section className="search-bar">
          <input
            className="search-input"
            name="title"
            onChange={ this.handleChange }
            value={ title }
            placeholder="Search by game title"
            type="text"
          />
          <button
            className="search-button"
            type="button"
            onClick={ () => {
              getGamesByTitle(title);
              this.setState({
                title: '',
              });
            } }
          >
            Search
          </button>
          <button
            className="search-button"
            disabled={ isDeals }
            type="button"
            onClick={ () => {
              getGamesByDeals(title);
              this.setState({
                title: '',
              });
            } }
          >
            Deals
          </button>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isDeals: state.games.isDeals,
});

const mapDispatchToProps = (dispatch) => ({
  getGamesByTitle: (gameTitle) => dispatch(fetchGames(gameTitle)),
  getGamesByDeals: () => dispatch(getGamesDeals()),
});

SearchBar.propTypes = {
  getGamesByTitle: PropTypes.func.isRequired,
  getGamesByDeals: PropTypes.func.isRequired,
  isDeals: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
