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
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const allValuesZero = this.state.counters.map(reset => {
      reset.value = 0;
      return reset;
    });
    this.setState({
      counters: allValuesZero
    });
  };

  handleDragonBall = () => {
    const vegeta = this.state.counters.map(punchIt => {
      punchIt.value = 9000;
      return punchIt;
    });
    this.setState({
      counters: vegeta
    });
  };

  render() {
    return (
      <div>
        <ListOfCounters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDb={this.handleDragonBall}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
