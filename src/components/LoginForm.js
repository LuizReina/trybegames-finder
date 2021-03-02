import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userLoginSuccessAction } from '../actions';

import './loginForm.css';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      localEmail: '',
      localPassword: '',
      isDisabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  loginValidation() {
    const { localEmail, localPassword } = this.state;
    let isDisabled = true;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    isDisabled = !(EMAIL_VALIDATION.test(localEmail)
      && localPassword.length >= MIN_PASSWORD_LENGTH);
    this.setState({ isDisabled });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.loginValidation();
    });
  }

  handleSubmit() {
    const { localEmail, localPassword } = this.state;
    const { userLoginSuccess, usersRegisteredsList } = this.props;
    const userFilter = usersRegisteredsList
      .filter((user) => user.email === localEmail && user.password === localPassword);

    if (this.checkForRegisteredLogin() === true) {
      userLoginSuccess({
        name: userFilter[0].name,
        email: localEmail,
        password: localPassword,
      });
    } else {
      alert('Check your email or password and try again.');
    }
  }

  checkForRegisteredLogin() {
    const { usersRegisteredsList } = this.props;
    const { localEmail, localPassword } = this.state;

    return usersRegisteredsList
      .some((user) => user.email === localEmail && user.password === localPassword);
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <main className="main-container">
        <fieldset className="login-container">
          <legend className="login-container-legend">Welcome!</legend>
          <section className="input-section">
            <p>Email:</p>
            <input
              name="localEmail"
              className="login-input"
              type="email"
              onChange={ this.handleChange }
            />
          </section>
          <section className="input-section">
            <p>Password:</p>
            <input
              name="localPassword"
              className="login-input"
              type="password"
              onChange={ this.handleChange }
            />
          </section>
          <button
            type="button"
            onClick={ this.handleSubmit }
            disabled={ isDisabled }
          >
            Login
          </button>
          <br />
          <p>First time here?</p>
          <Link to="/signup">Sign Up!</Link>
        </fieldset>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
  usersRegisteredsList: state.users.usersRegisteredsList,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginSuccess: (item) => dispatch(userLoginSuccessAction(item)),
});

LoginForm.propTypes = {
  userLoginSuccess: PropTypes.func.isRequired,
  usersRegisteredsList: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
