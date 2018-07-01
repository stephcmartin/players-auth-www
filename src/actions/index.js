import axios from 'axios';
import { AUTH_USER , AUTH_ERROR } from './types';

export const register = (formProps, callback) => async dispatch => {
  // Create user
  try{
    const response = await axios.post(
      'https://players-api.developer.alchemy.codes/api/user', 
      formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token});
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    // CATCH anything that goes wrong with request
      dispatch({ type: AUTH_ERROR, payload: 'Email in use'})
  }
};
