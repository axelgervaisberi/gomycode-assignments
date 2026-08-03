import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

/**
 * Root App Component displaying converted TypeScript React components.
 */
const App: React.FC = () => {
  return (
    <div className="App min-vh-100 py-5 bg-dark">
      <Container style={{ maxWidth: '800px' }}>
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold mb-2">React with TypeScript 5</h1>
          <p className="lead text-light opacity-75">
            Converting JavaScript React Components to TypeScript with explicit interfaces
          </p>
        </div>

        <Row className="g-4">
          {/* Component 1: Greeting (Functional Component) */}
          <Col md={6}>
            <Card className="h-100 shadow border-0 rounded-4">
              <Card.Header className="bg-primary text-white fw-bold py-3">
                Code 01: Functional Component
              </Card.Header>
              <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
                <Greeting name="Software Developer" />
              </Card.Body>
            </Card>
          </Col>

          {/* Component 2: Counter (Class Component) */}
          <Col md={6}>
            <Card className="h-100 shadow border-0 rounded-4">
              <Card.Header className="bg-success text-white fw-bold py-3">
                Code 02: Class Component
              </Card.Header>
              <Card.Body className="p-4 d-flex flex-column justify-content-center">
                <Counter />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
