import React, { Component } from 'react';
import './UrlInput.scss';

export default class UrlInput extends Component {
  constructor() {
    super();

    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.submitUrl = this.submitUrl.bind(this);

    this.state = { url: '' };
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  submitUrl(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.url);
  }

  render() {
    return (
      <div className="UrlInput col">
        <form onSubmit={this.submitUrl}>
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
