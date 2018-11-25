import React, { Component } from 'react';
import './UrlInput.scss';

export default class UrlInput extends Component {
  constructor() {
    super();

    this.handleUrlChange = this.handleUrlChange.bind(this);

    this.state = { url: '' };
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  render() {
    return (
      <div className="UrlInput col">
        <form>
          <input
            type="text"
            value={this.state.url}
            onChange={this.handleUrlChange}
          />
        </form>
      </div>
    );
  }
}
