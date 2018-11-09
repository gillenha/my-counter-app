import React, { Component } from "react";
import ListOfCounters from "./components/listCounters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrease = () => {
    const counter = this.state.value;
    this.setState({
      value: counter + 1
    });
    console.log("you clicked ", counter);
  };

  handleDecrease = () => {
    const counter = this.state.value;
    this.setState({
      value: counter - 1
    });
    console.log("you clicked ", counter);
  };

  handleDelete = () => {
    //do something
  };

  render() {
    return (
      <div>
        <ListOfCounters
          counters={this.state.counters}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
