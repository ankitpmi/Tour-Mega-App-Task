import React from 'react'
import Navigation from "./App/Navigation/Navigation";
import { Provider } from 'react-redux';
import store from './App/Redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
