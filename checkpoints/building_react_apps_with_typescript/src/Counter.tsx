import React, { Component } from 'react';

/**
 * STEP 1: Define TypeScript Interfaces for Props and State
 * --------------------------------------------------------
 * CounterProps: Defines any props passed to Counter (empty object since no props are required).
 * CounterState: Defines the state shape, ensuring 'count' is explicitly typed as a number.
 */
interface CounterProps {}

interface CounterState {
  count: number;
}

/**
 * STEP 2: Pass Props and State Interfaces to Component Generic Class
 * ------------------------------------------------------------------
 * React.Component<P, S> is a generic class where:
 * - P = Props interface (CounterProps)
 * - S = State interface (CounterState)
 * 
 * This enables strict type checking for 'this.state' and 'this.setState(...)'.
 */
class Counter extends Component<CounterProps, CounterState> {
  /**
   * STEP 3: Explicitly Type State Initialization
   * -------------------------------------------
   * TypeScript verifies that the initial state object conforms to 'CounterState'.
   */
  state: CounterState = {
    count: 0
  };

  /**
   * STEP 4: Type Arrow Function Event Handler
   * ----------------------------------------
   * 'increment' is typed as a parameterless function returning void.
   * 'this.setState' is type-checked against 'CounterState', preventing typos like { count: '1' }.
   */
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="p-3 bg-light rounded shadow-sm text-center">
        <p className="fs-3 fw-semibold text-secondary mb-3">Count: <span className="text-success fw-bold">{this.state.count}</span></p>
        <button onClick={this.increment} className="btn btn-success btn-lg px-4 rounded-pill shadow-sm">
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
