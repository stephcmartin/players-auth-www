import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import './Register.css'

class Login extends Component {
onSubmit = (formProps) => {
  this.props.login(formProps, () => {
    this.props.history.push('roster');
  });

};

  render () {
    const { handleSubmit } = this.props;

    return (
      <div className="signupform">
      <div className="registerHeader">
      Sign Up
      </div>
      <form onSubmit={handleSubmit(this.onSubmit)}>

      <fieldset>
        <label>Email</label>
        <br />
        <Field
        name="email"
        type="text"
        component="input"
        autoComplete="none"
        />
      </fieldset>

      <fieldset>
        <label>Password:</label>
        <br />
        <Field
        name="password"
        type="password"
        component="input"
        autoComplete="none"
        />
      </fieldset>
      <div>
        <em>
        <small>{this.props.errorMessage}
        </small>
        </em>
      </div>
      <button>Sign In</button>
      </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.errorMessage };
}

export default compose (
  connect(mapStateToProps, actions),
  reduxForm({form: 'login' })
)(Login);
