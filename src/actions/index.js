import axios from 'axios';
import { AUTH_USER } from './types';

export const register =(formProps) => dispatch => {
  // Create user
  axios.post('https://players-api.developer.alchemy.codes/api/user', formProps)
};
