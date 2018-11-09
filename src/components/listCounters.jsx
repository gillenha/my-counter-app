import React, { Component } from "react";
import Counter from "./counter";

class ListOfCounters extends Component {
  render() {
    const {
      counters,
      onIncrease,
      onDecrease,
      onDelete,
      onReset,
      onDb
    } = this.props;
    return (
      <div className="container">
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
            value={counter.value}
            counter={counter}
          />
        ))}
        <p>
          Reset all counters to zero
          <button className="btn btn-primary m-2" onClick={onReset}>
            Reset
          </button>
        </p>
        <p>
          IT'S OVER 9,000!
          <button className="btn btn-dark m-2" onClick={onDb}>
            PUNCH IT!
          </button>
        </p>
      </div>
    );
  }
}

export default ListOfCounters;
