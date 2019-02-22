import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App.js";
import AboutPage from "./AboutPage.js";

export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/about" component={AboutPage} />
        </div>


      </Router>
    );
  }
}
