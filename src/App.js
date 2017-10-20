import React, { Component } from 'react';
import 'normalize.css';
import styles from './App.css';
import VideoBackground from './Components/VideoBackground';

class App extends Component {

  render() {
    return (
      <div className={ styles.App }>
        <VideoBackground />
      </div>
    );
  }

}

export default App;
