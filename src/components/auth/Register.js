import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import './Register.css'

class RegisterForm extends Component {
onSubmit = (formProps) => {
  this.props.register(formProps)
};

  render () {
    const { handleSubmit } = this.props;

    return (
      <div className="signupform">
      <div className="registerHeader">
      Register
      </div>
      <form onSubmit={handleSubmit(this.onSubmit)}>
      <fieldset>
        <label>First Name:</label>
        <br />
        <Field
        name="first_name"
        type="text"
        component="input"
        autoComplete="none"
        />

      </fieldset>

      <fieldset>
        <label>Last Name:</label>
        <br />
        <Field
        name="last_name"
        type="text"
        component="input"
        autoComplete="none"
        />
      </fieldset>

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

      <fieldset>
        <label>Confirm Password:</label>
        <br />
        <Field
        name="confirm_password"
        type="password"
        component="input"
        autoComplete="none"
        />
      </fieldset>
      <button>Register</button>
      </form>
      </div>
    )
  }
}

export default compose (
  connect(null, actions),
  reduxForm({form: 'register' })
)(RegisterForm);
