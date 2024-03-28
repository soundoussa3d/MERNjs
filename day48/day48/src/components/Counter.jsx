import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './slice'; // Import actions

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.counter.value, // Access state from the counter slice
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);