import React from 'react';
import { Link } from 'react-router-dom';

import './dealCard.css';

class DealCard extends React.Component {
  constructor() {
    super();

    this.convertToNoDecimal = this.convertToNoDecimal.bind(this);
  }

  convertToNoDecimal = (savings) => (parseFloat(savings)).toPrecision(2);
  
  render() {
    const { game } = this.props;
    const { title, normalPrice, salePrice, savings, thumb, gameID } = game;
    return (
      <section className="deal-card">
        <Link to={`/games/game-details/${gameID}`}>
          <section className="deal-card-name-img">
            <h1>{title}</h1>
            <img src={ thumb } alt={`thumbnail for game: ${title}`} />
          </section>
          <section className="deal-info">
            <section className="deal-prices">
              <p><span className="deal-sale-price">US$ {salePrice}</span></p>
              <p>US$<span className="deal-normal-price"> {normalPrice}</span></p>
            </section>
            <section className="deal-savings">
              <h3>{this.convertToNoDecimal(savings)}% OFF!!</h3>
            </section>
          </section>
         </Link>
        </section>
    );
  }
}

export default DealCard;