import React , { Component } from 'react';

export default class RegisterForm extends Component {
  render () {
    return (

      <form>
      <fieldset>
        <label>First Name:</label>
      </fieldset>

      <fieldset>
        <label>Last Name:</label>
      </fieldset>

      <fieldset>
        <label>Password:</label>
      </fieldset>

      <fieldset>
        <label>Confirm Password:</label>
      </fieldset>
      </form>
    )
  }
}
