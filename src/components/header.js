import React, { Component } from "react";

export default class Header extends Component {
  render() {

    return (
      <header className="main-header">
        <button onClick={this.props.handleToggleThem}> dark mode </button>
        <h1> log  </h1>
        <h2> user </h2>
      </header>
    );
  }
}
