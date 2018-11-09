import React, { Component } from "react";
import Counter from "./counter";

class ListOfCounters extends Component {
  render() {
    const { count, counters, onIncrease, onDecrease, onDelete } = this.props;
    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default ListOfCounters;
