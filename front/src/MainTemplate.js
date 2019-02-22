import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import MenuBar from "./MenuBar.js";

export default class MainTemplate extends Component {
  render() {
    return (
      <Router>
        <div>

          <MenuBar />

          <h1>This my App</h1>
          <div>Content goes here:</div>

          {this.props.children}


          <div>
            Made by John with{" "}
            <span role="img" aria-label="heart emoji">
              ♥️
            </span>
          </div>

        </div>
      </Router>

    );
  }
}


MainTemplate.propTypes = {
  children: PropTypes.array
};