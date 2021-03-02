import React from 'react';

import './gameDetailedDeals.css'

class GameDetailedDeals extends React.Component {
  constructor() {
    super();

    this.convertToNoDecimal = this.convertToNoDecimal.bind(this);
  }

  convertToNoDecimal = (savings) => (parseFloat(savings)).toPrecision(2);

  render() {
    const { dealCard: { storeID, price, retailPrice, savings } } = this.props;
    return (
      <main className="detailed-card-list">
        <section className="detailed-card">
          <p>{`Store ID: ${storeID}`}</p>
          <p>{`Deal Price: US$ ${price}`}</p>
          <p>{`Normal Price: US$ ${retailPrice}`}</p>
          <p>{`Saving: ${ this.convertToNoDecimal(savings) }% OFF`}</p>
        </section>
      </main>
    );
  }
}

export default GameDetailedDeals;