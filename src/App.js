import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { save, load } from "redux-localstorage-simple"

import reducers from './reducers'
import PasswordList from './components/password-list'

import logo from './logo.svg';
import './App.css';

const createStoreWithMiddleware = applyMiddleware(
    save() // Saving done here
)(createStore)

const store = createStoreWithMiddleware(
    reducers,
    load()
)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <PasswordList />
      </div>
     </Provider>
    );
  }
}

export default App;
