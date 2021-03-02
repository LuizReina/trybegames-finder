import React from 'react';
import { Link } from 'react-router-dom';

import './notLoggedIn.css';

class NotLoggedIn extends React.Component {
  render() {
    return (
      <main className="first-container">
        <section className="not-logged-in-container">
          <p>Seems that you are not logged in. =(</p>
          <section className="btn-sign-log">
            <Link className="links" to="/">Log In</Link>
            <Link className="links" to="/signup">Sign Up</Link>
          </section>
        </section>
      </main>
    );
  }
}

export default NotLoggedIn;
