import React, { Component } from 'react';
import UrlInput from './UrlInput';
import HeadersViewer from './HeadersViewer';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = { headers: {} };

    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
  }

  handleUrlSubmit(url) {
    console.log('Fetching...', url);

    // Make request to local server
    fetch(`http://localhost:3001/fetch?url=${url}`)
      .then(res => res.json())
      .then(jsonRes => this.setState({ headers: jsonRes.headers }));
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm col-md-8 offset-md-2">
            <div className="row">
              <h1 className="col">The head(er) fetcher</h1>
            </div>
            <div className="row">
              <UrlInput onSubmit={this.handleUrlSubmit} />
            </div>
            <div className="row">
              <HeadersViewer headers={this.state.headers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
