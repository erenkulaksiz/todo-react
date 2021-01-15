import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss'

import TodoApp from './modules/todoapp/todoapp.jsx'

function App() {
  return (
    <TodoApp />
  );
}

ReactDOM.render(
  App(),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
