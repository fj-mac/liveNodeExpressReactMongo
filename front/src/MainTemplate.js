import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuBar from "./MenuBar.js";

export default class MainTemplate extends Component {
  render() {
    return (
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

    );
  }
}


MainTemplate.propTypes = {
  children:  PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};