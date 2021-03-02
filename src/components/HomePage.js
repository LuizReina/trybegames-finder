import React from 'react';

import SearchBar from './SearchBar';
import GameList from './GameList';

class HomePage extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <GameList />
      </main>
    );
  }
}

export default HomePage;
