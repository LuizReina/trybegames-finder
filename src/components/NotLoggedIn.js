import React from 'react';
import { Link } from 'react-router-dom';

class NotLoggedIn extends React.Component {
  render() {
    return (
      <>
        <p>Seems that you're not logged in. =(</p>
        <Link to='/'>Log In</Link>
        <Link to='/'>Sign Up</Link>
      </>
    );
  }
}

export default NotLoggedIn;
