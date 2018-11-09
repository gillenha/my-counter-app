import React, { Component } from "react";
import Counter from "./counter";

class ListOfCounters extends Component {
  render() {
    const { counters, onIncrease, onDecrease, onDelete } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

export default ListOfCounters;
