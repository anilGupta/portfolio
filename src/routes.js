import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import App from './containers/App';

export default class extends Component {
  render() {
    return <HashRouter>
            <div>
              <Route path="/" component={App} />
            </div>
          </HashRouter>
  }
}