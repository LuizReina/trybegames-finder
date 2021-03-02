import React from 'react';

import DealGameInfos from './DealGameInfos';

import './gameInfos.css';

class GameInfos extends React.Component {
  render() {
    return (
      <main className="top-container">
        <DealGameInfos />
      </main>
    );
  }
}

export default GameInfos;
