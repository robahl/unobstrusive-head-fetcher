import React, { Component } from 'react';
import UrlInput from './UrlInput';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
  }

  handleUrlSubmit(url) {
    console.log('Fetching...', url);

    // Make request to local server
    fetch(`http://localhost:3001/fetch?url=${url}`)
      .then(res => res.json())
      .then(jsonRes => this.setState({ header: jsonRes }));
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
