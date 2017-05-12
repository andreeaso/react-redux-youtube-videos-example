import React, { Component } from 'react';
import { Provider } from 'react-redux';
import YoutubeViewer from 'container/YoutubeViewer';
import { store } from 'redux-modules/redux';
import styles from './App.scss';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <YoutubeViewer/>
        </div>
      </Provider>
    );
  }
}

export default App;
