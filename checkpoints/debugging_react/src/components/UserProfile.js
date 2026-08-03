import React from 'react';
import { Card, Badge, Alert } from 'react-bootstrap';
import { FaUserCheck } from 'react-icons/fa';

/**
 * UserProfile Component (Props Debugging Scenario)
 * 
 * ISSUE DIAGNOSED WITH REACT DEVTOOLS:
 * Inspecting Props in React DevTools revealed that when parent components pass undefined or incomplete props,
 * attempting to access `user.name` causes runtime crashes: `TypeError: Cannot read properties of undefined`.
 * 
 * SOLUTION:
 * Implement default props fallbacks, optional chaining (`user?.name`), and type safety checks.
 */
const UserProfile = ({ user = { name: 'Guest Developer', email: 'guest@example.com', role: 'Tester', age: 28 } }) => {
  // Safe extraction with fallback values preventing crashes
  const { name = 'Anonymous User', email = 'N/A', role = 'Member', age = 0 } = user || {};

  return (
    <Card className="shadow-sm border-0 rounded-4 h-100">
      <Card.Header className="bg-success text-white fw-bold py-3">
        2. Props & Undefined Values (UserProfile Component)
      </Card.Header>
      <Card.Body className="p-4 d-flex flex-column justify-content-between">
        <div>
          <Alert variant="success" className="d-flex align-items-center gap-2 py-2 mb-3">
            <FaUserCheck /> React DevTools Props verified cleanly
          </Alert>

          <h4 className="fw-bold text-dark mb-1">{name}</h4>
          <p className="text-muted mb-3">{email}</p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <Badge bg="info" className="px-3 py-2 fs-6 rounded-pill text-dark">
              Role: {role}
            </Badge>
            <Badge bg="dark" className="px-3 py-2 fs-6 rounded-pill">
              Age: {age} yrs
            </Badge>
          </div>
        </div>

        <div className="bg-light p-3 rounded-3 border">
          <small className="text-muted d-block fw-bold">DevTools Props Inspection:</small>
          <code className="small text-dark">user: &#123; name: "{name}", role: "{role}", age: {age} &#125;</code>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
