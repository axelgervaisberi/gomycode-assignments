import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import ItemList from './components/ItemList';
import './App.css';

/**
 * Main App Component bringing together all debugged component scenarios
 */
function App() {
  const sampleUser = {
    name: 'Zokouehi Axel Gervais BERI',
    email: 'gervaisberi@proton.me',
    role: 'Full-Stack Developer & Business Analyst',
    age: 28
  };

  return (
    <div className="App min-vh-100 py-5 bg-dark text-white">
      <Container style={{ maxWidth: '1100px' }}>
        {/* App Title */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-2">⚛️ React Debugging Dashboard</h1>
          <p className="lead text-light opacity-75">
            Diagnosing and resolving React State, Props, and Array Mutation issues using React Developer Tools
          </p>

          <Alert variant="info" className="d-inline-block text-start px-4 py-3 rounded-4 shadow-sm border-0">
            <strong>🔧 React Developer Tools Status:</strong> Open Chrome/Firefox DevTools &rarr; <strong>Components</strong> & <strong>Profiler</strong> tabs to inspect live state & prop trees.
          </Alert>
        </div>

        {/* Debugged Components Grid */}
        <Row className="g-4 mb-4">
          <Col lg={6}>
            <Counter />
          </Col>

          <Col lg={6}>
            <UserProfile user={sampleUser} />
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={12}>
            <ItemList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
