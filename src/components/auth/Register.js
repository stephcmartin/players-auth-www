import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class RegisterForm extends Component {
  render () {
    return (
      <form>
      <fieldset>
        <label>First Name:</label>
        <Field
        name="first_name"
        type="text"
        component="input"
        />

      </fieldset>

      <fieldset>
        <label>Last Name:</label>
        <Field
        name="last_name"
        type="text"
        component="input"
        />
      </fieldset>

      <fieldset>
        <label>Email</label>
        <Field
        name="email"
        type="text"
        component="input"
        />
      </fieldset>

      <fieldset>
        <label>Password:</label>
        <Field
        name="password"
        type="password"
        component="input"
        />
      </fieldset>

      <fieldset>
        <label>Confirm Password:</label>
        <Field
        name="confirm_password"
        type="password"
        component="input"
        />
      </fieldset>
      </form>
    )
  }
}

export default reduxForm({form: 'signup' })(RegisterForm);
