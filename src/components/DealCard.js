import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './dealCard.css';

class DealCard extends React.Component {
  constructor() {
    super();

    this.convertToNoDecimal = this.convertToNoDecimal.bind(this);
  }

  convertToNoDecimal(savings) {
    return (parseFloat(savings)).toPrecision(2);
  }

  render() {
    const { game } = this.props;
    const { title, normalPrice, salePrice, savings, thumb, gameID } = game;
    return (
      <section className="deal-card">
        <Link to={ `/games/game-details/${gameID}` }>
          <section className="deal-card-name-img">
            <h1>{title}</h1>
            <img src={ thumb } alt={ `thumbnail for game: ${title}` } />
          </section>
          <section className="deal-info">
            <section className="deal-prices">
              <p className="deal-sale-price">
                {'US$ '}
                {salePrice}
              </p>
              <p className="deal-normal-price">
                {'US$ '}
                { normalPrice }
              </p>
            </section>
            <section className="deal-savings">
              <h3>
                { this.convertToNoDecimal(savings) }
                % OFF!!
              </h3>
            </section>
          </section>
        </Link>
      </section>
    );
  }
}

DealCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    normalPrice: PropTypes.string.isRequired,
    salePrice: PropTypes.string.isRequired,
    savings: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    gameID: PropTypes.string.isRequired,
  }).isRequired,
};

export default DealCard;
