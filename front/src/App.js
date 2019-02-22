import React, { Component } from "react";

import "./App.css";

import Comment from "./Comment.js";

class App extends Component {
  constructor(props) {
    super(props);


    this.myInputText = null;


    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    fetch("/api/getMessages")
      .then(res => res.json())
      .then(data => {
        console.log("got data!", data);
        this.setState({
          comments: data
        });
      });
  }

  renderComments() {
    return this.state.comments.map((c, i) => <Comment key={i++} comment={c} />);
  }

  postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
  }

  onCreateComment(event) {
    event.preventDefault();

    if (!this.myInputText) {
      console.log("inText not set not inserting");
      return;
    }

    // Post
    console.log("Send the post");
    this.postData("/api/createMessage", {text:this.myInputText.value} )
      .then((result) => {
        console.log("Inserted the data!!", result);

        //clearing the input
        this.myInputText.value="";
        // Redraw
        console.log("Reload data");
        this.reloadData();
      });



  }

  render() {
    console.log("Rendering");

    return (
      <div className="App">
        <h1>Comments!</h1>
        <div className="row">{this.renderComments()}</div>

        <h2>Create a new comment</h2>
        <form onSubmit={this.onCreateComment.bind(this)}>
          <div>
            <label htmlFor="inAuthor"> Author
              <input
                id="inAuthor"
                type="text"
                name="author"
              />
              {/* Remember to add the ref */ }
            </label>
          </div>
          <div>
            <label htmlFor="inComment"> Comment:
              <input
                id="inComment"
                type="text"
                name="text"
                ref = { input => this.myInputText = input}
              />
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>

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

export default App;