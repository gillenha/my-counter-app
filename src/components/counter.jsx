import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { value } = this.props.counter;
    return (
      <div className="row">
        <h3>{value}</h3>
        <button
          className="col-1 m-2 btn btn-success"
          onClick={() => this.props.onIncrease(this.props.counter)}
        >
          +
        </button>
        <button
          className="col-1 m-2 btn btn-warning"
          onClick={() => this.props.onDecrease(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          className="m-2 btn btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
