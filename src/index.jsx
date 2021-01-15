import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/test.module.scss'

function App() {
  return (
    <div className="App">
        <div className={styles.test}>
          woah.
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
