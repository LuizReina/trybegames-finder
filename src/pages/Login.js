import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <LoginForm />
        {
          isLoggedIn
            ? <Redirect to="/games" />
            : ''
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Login);
