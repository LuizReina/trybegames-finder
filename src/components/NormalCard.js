import React from 'react';
import { Link } from 'react-router-dom';

import './normalCard.css';

class NormalCard extends React.Component {  
  render() {
    const { game } = this.props;
    const { external, cheapest, thumb, gameID } = game;
    return (
      <section className="normal-card">
        <Link to={`/games/game-details/${gameID}`}>
          <section className="normal-card-name-img">
            <h1>{external}</h1>
            <img src={ thumb } alt={`thumbnail for game: ${external}`} />
          </section>
          <section className="normal-info">
            <section className="normal-prices">
              <p>US$<span> {cheapest}</span></p>
            </section>
          </section>
        </Link>
      </section>
    );
  }
}

export default NormalCard;