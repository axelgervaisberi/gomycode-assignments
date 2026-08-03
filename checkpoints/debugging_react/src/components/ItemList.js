import React, { useState } from 'react';
import { Card, Button, Form, InputGroup, ListGroup, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaTrash, FaPlus } from 'react-icons/fa';

/**
 * ItemList Component (Array Mutation & Key Prop Debugging)
 * 
 * ISSUE DIAGNOSED WITH REACT DEVTOOLS:
 * 1. Array State Direct Mutation: `items.push(newItem)` or `items[i].completed = true` was mutating state directly,
 *    causing React DevTools to show state changes while the UI failed to re-render.
 * 2. Missing Unique Keys: Using array index `key={index}` caused incorrect DOM state reuse when items were deleted.
 * 
 * SOLUTION:
 * 1. Immutable state updates (`setItems([...items, newItem])` and `items.map(...)`).
 * 2. Assign unique ID `item.id` for list item `key` props.
 */
const ItemList = () => {
  const [items, setItems] = useState([
    { id: '1', title: 'Inspect component tree in React DevTools', completed: true },
    { id: '2', title: 'Verify immutable state updates in useState', completed: true },
    { id: '3', title: 'Check component render profiling performance', completed: false }
  ]);
  const [newTitle, setNewTitle] = useState('');

  // Immutable Add Item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: String(Date.now()),
      title: newTitle.trim(),
      completed: false
    };

    // Correct immutable array update
    setItems((prevItems) => [...prevItems, newItem]);
    setNewTitle('');
  };

  // Immutable Toggle Item
  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Immutable Delete Item
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Card className="shadow-sm border-0 rounded-4 h-100">
      <Card.Header className="bg-dark text-white fw-bold py-3">
        3. Array Mutation & Unique Keys (ItemList Component)
      </Card.Header>
      <Card.Body className="p-4 d-flex flex-column justify-content-between">
        <div>
          {/* Add Item Form */}
          <Form onSubmit={handleAddItem} className="mb-3">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Add new task..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <Button variant="primary" type="submit">
                <FaPlus /> Add
              </Button>
            </InputGroup>
          </Form>

          {/* Render List with Unique Keys */}
          <ListGroup variant="flush">
            {items.map((item) => (
              <ListGroup.Item
                key={item.id} // Unique ID key preventing DOM reconciliation bugs
                className="d-flex justify-content-between align-items-center bg-transparent border-bottom px-2 py-3"
              >
                <div
                  className={`d-flex align-items-center gap-2 cursor-pointer ${
                    item.completed ? 'text-decoration-line-through text-muted' : 'text-dark fw-medium'
                  }`}
                  onClick={() => handleToggleItem(item.id)}
                >
                  <FaCheckCircle className={item.completed ? "text-success" : "text-secondary"} />
                  {item.title}
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Badge bg={item.completed ? "success" : "warning"} text={item.completed ? "white" : "dark"}>
                    {item.completed ? "Done" : "Pending"}
                  </Badge>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="p-1 rounded-circle border-0"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <FaTrash size={14} />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="bg-light p-3 rounded-3 border mt-3">
          <small className="text-muted d-block fw-bold">React DevTools State Array Length:</small>
          <code className="small text-dark">items.length: {items.length} (Immutable state updates active)</code>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemList;
