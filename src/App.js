import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Games from './pages/Games';
import SignUp from './pages/SignUp';
import GameDetails from './pages/GameDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/games" component={ Games } />
      <Route
        exact
        path="/games/game-details/:id"
        render={ (props) => <GameDetails { ...props } /> }
      />
    </Switch>
  );
}

export default App;
