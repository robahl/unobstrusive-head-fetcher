import React, { Component } from 'react';
import './UrlInput.scss';

export default class UrlInput extends Component {
  static URL_REGEXP = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;

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

    if (UrlInput.URL_REGEXP.test(this.state.url)) {
      this.props.onSubmit(this.state.url);
    }
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
