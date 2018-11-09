import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { value } = this.props.counter;
    return (
      <div>
        <div className="row p-1 m-2">
          <h3 className="col-1 m-2">{value}</h3>
          <button
            className="col-1 m-2 btn btn-success"
            onClick={() => this.props.onIncrease()}
          >
            +
          </button>
          <button
            className="col-1 m-2 btn btn-warning"
            onClick={() => this.props.onDecrease()}
          >
            -
          </button>
          <button
            className="m-2 btn btn-danger"
            onClick={() => this.props.onDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
