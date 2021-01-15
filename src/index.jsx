import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import TodoApp from './modules/todoapp/todoapp.jsx'

function App() {
  return (
    <div className="App">
        <div>
          woah. <FontAwesomeIcon icon={faCoffee} />
          <TodoApp />
        </div>
    </div>
  );
}

ReactDOM.render(
    App(),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
