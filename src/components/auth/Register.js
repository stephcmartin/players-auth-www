import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'

class RegisterForm extends Component {
onSubmit = (formProps) => {
  this.props.register(formProps)
};

  render () {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
      <fieldset>
        <label>First Name:</label>
        <Field
        name="first_name"
        type="text"
        component="input"
        autoComplete="none"
        />

      </fieldset>

      <fieldset>
        <label>Last Name:</label>
        <Field
        name="last_name"
        type="text"
        component="input"
        autoComplete="none"
        />
      </fieldset>

      <fieldset>
        <label>Email</label>
        <Field
        name="email"
        type="text"
        component="input"
        autoComplete="none"
        />
      </fieldset>

      <fieldset>
        <label>Password:</label>
        <Field
        name="password"
        type="password"
        component="input"
        autoComplete="none"
        />
      </fieldset>

      <fieldset>
        <label>Confirm Password:</label>
        <Field
        name="confirm_password"
        type="password"
        component="input"
        autoComplete="none"
        />
      </fieldset>
      <button>Register</button>
      </form>
    )
  }
}

export default compose (
  connect(null, actions),
  reduxForm({form: 'register' })
)(RegisterForm);
