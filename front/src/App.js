import React, {Component} from "react";

import "./App.css";

class App extends Component {

  componentDidMount() {
    fetch("/api/getMessages")
      .then( res => console.log("got data?" ,res));
  }


  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Comments!</h1>
        <div id="comments"></div>
        <form action="/api/createMessage">
          <input type="text" id="comment"/>
        </form>
        <div>Made by John with <span role="img">♥️</span></div>
      </div>);
  }
}

export default App;