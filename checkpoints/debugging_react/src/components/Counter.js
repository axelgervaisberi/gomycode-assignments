import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

/**
 * Counter Component (State Debugging Scenario)
 * 
 * ISSUE DIAGNOSED WITH REACT DEVTOOLS:
 * In the un-debugged version, state was updated directly or updated via stale closures
 * like `setCount(count + 1)` called multiple times in rapid succession, resulting in missed state updates.
 * 
 * SOLUTION:
 * Use functional state updates `setCount(prev => prev + 1)` to guarantee deterministic state transitions.
 */
const Counter = () => {
  const [count, setCount] = useState(0);

  // Correct functional state update preventing stale state closure issues
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Multiple rapid updates safely batching via functional updater
  const handleIncrementByThree = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Card className="shadow-sm border-0 rounded-4 h-100">
      <Card.Header className="bg-primary text-white fw-bold py-3">
        1. State Management & Closures (Counter Component)
      </Card.Header>
      <Card.Body className="p-4 text-center d-flex flex-column justify-content-between">
        <div>
          <p className="text-muted mb-2">Inspect State in React DevTools: <code>State: {count}</code></p>
          <div className="display-3 fw-bold text-primary my-3">{count}</div>
          <Badge bg={count === 0 ? "secondary" : "success"} className="px-3 py-2 fs-6 rounded-pill">
            {count === 0 ? "Initial State" : `Active Count: ${count}`}
          </Badge>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
          <Button variant="outline-danger" onClick={handleDecrement} disabled={count === 0}>
            <FaMinus /> Decrement
          </Button>

          <Button variant="success" onClick={handleIncrement}>
            <FaPlus /> Increment (+1)
          </Button>

          <Button variant="info" text="white" onClick={handleIncrementByThree}>
            +3 (Batch Test)
          </Button>

          <Button variant="outline-secondary" onClick={handleReset}>
            <FaRedo /> Reset
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Counter;
