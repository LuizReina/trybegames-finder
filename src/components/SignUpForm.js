import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createNewUserAction } from '../actions';
import './loginForm.css';

class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      isDisabled: true,
      IsUserCreated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.loginValidation();
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createNewUser } = this.props;
    const { name, email, password } = this.state;
    createNewUser({ name, email, password });
    this.setState({
      IsUserCreated: true,
    })
  };

  loginValidation() {
    const { email, password } = this.state;
    let isDisabled = true;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    isDisabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ isDisabled });
  }

  render() {
    const { isDisabled, IsUserCreated } = this.state;
    return (
      <main className="main-container">
          <fieldset className="login-container">
            <legend className="login-container-legend">Welcome!</legend>
            <section className="input-section">
              <p>Name:</p>
              <input
                name="name"
                className="login-input"
                type="text"
                onChange={ this.handleChange }
              />
            </section>
            <section className="input-section">
              <p>Email:</p>
              <input
                name="email"
                className="login-input"
                type="email"
                onChange={ this.handleChange }
              />
            </section>
            <section className="input-section">
              <p>Password:</p>
              <input
                name="password"
                className="login-input"
                type="password"
                onChange={ this.handleChange }
              />
            </section>
            <button
              type="submit"
              onClick={ this.handleSubmit }
              disabled={ isDisabled }
            >
              Sign Up
            </button>
          </fieldset>
          {
            IsUserCreated
            ? <Redirect to="/" />
            : ''
          }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (item) => dispatch(createNewUserAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
