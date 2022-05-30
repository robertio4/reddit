import React from 'react';
import styles from './App.module.css';
import Header from './containers/Header';
import Main from './containers/Main';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
