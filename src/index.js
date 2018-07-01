import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers'
import App from './components/App';
import Welcome from './components/Welcome';
import RegisterForm from './components/auth/Register';
import Roster from './components/Roster'
import Signout from './components/auth/Signout'
import Login from './components/auth/Login'

import './index.css';

const store= createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/roster" component={Roster} />
      <Route path="/login" component={Login} />
      <Route path="/signout" component={Signout} />
    </App>
    </BrowserRouter>
  </Provider>
  ,
  document.querySelector('#root')
)
