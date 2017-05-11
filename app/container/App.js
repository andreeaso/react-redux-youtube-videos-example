import React, { Component } from 'react';
import { Provider } from 'react-redux';
import YoutubeViewer from 'container/YoutubeViewer';
import { store } from 'redux-modules/redux';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <YoutubeViewer/>
        </div>
      </Provider>
    );
  }
}

export default App;
