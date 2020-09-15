import React, { Component } from "react";
import "../componentStyle/markDown.css";
import marked from "react-marked";

class App extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">Convert your MarkDown</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter you markdown here</h5>
            <textarea
              className="form-control"
              id="editor"
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-6">
            <h5 className="text-center">See the result</h5>
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
