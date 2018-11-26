import React, { Component } from 'react';
import UrlInput from './UrlInput';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
  }

  handleUrlSubmit(url) {
    console.log('URL submitted', url);
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <h1 className="col">The head(er) fetcher</h1>
        </div>
        <div className="row">
          <UrlInput onSubmit={this.handleUrlSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
