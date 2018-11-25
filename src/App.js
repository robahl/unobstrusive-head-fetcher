import React, { Component } from 'react';
import UrlInput from './UrlInput';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <h1 className="col">The head fetcher</h1>
        </div>
        <div className="row">
          <UrlInput />
        </div>
      </div>
    );
  }
}

export default App;
