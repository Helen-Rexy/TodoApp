import {Provider} from 'react-redux';
import React from 'react';
import Navigation from './src/Navigation';
import {store} from './src/Store';

// import TodoApp from './src/containers/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
