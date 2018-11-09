import React, { Component } from "react";
import ListOfCounters from "./components/listCounters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 1 }
    ]
  };

  handleIncrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
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
