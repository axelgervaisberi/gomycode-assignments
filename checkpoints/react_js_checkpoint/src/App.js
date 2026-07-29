import React, { useState } from 'react';
// Importing UI components from react-bootstrap
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Row,
  Col,
  Form
} from 'react-bootstrap';

/**
 * Main App Component
 * Uses React Fragment, Navbar, Heading, 3 Cards, and a Form as requested.
 */
function App() {
  // State to manage form input fields
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    // React Fragment groups elements without introducing extra HTML nodes
    <React.Fragment>
      <div className="App">
        {/* React-Bootstrap Navigation Bar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
          <Container>
            <Navbar.Brand href="#home">Tech Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Heading Section */}
        <Container className="text-center my-5">
          <h1 className="display-4 fw-bold text-primary mb-3">React JS Fundamentals</h1>
          <p className="lead text-muted">
            Build modern, responsive web applications using React components and React-Bootstrap UI elements.
          </p>
        </Container>

        {/* 3 React-Bootstrap Cards Section */}
        <Container id="courses" className="my-5">
          <h2 className="text-center mb-4">Featured Cards</h2>
          <Row className="g-4">
            {/* Card 1 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60"
                  alt="React Components"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">React Components</Card.Title>
                  <Card.Text className="text-muted">
                    Learn how to create reusable UI components using JSX, props, and state management.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">Explore Course</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60"
                  alt="React-Bootstrap Layouts"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">React-Bootstrap Layouts</Card.Title>
                  <Card.Text className="text-muted">
                    Design sleek, responsive web layouts effortlessly using grid systems and Bootstrap components.
                  </Card.Text>
                  <Button variant="success" className="mt-auto">Learn Layouts</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60"
                  alt="Interactive Forms"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">Interactive Forms</Card.Title>
                  <Card.Text className="text-muted">
                    Handle user input, controlled components, state updates, and form submissions in React.
                  </Card.Text>
                  <Button variant="info" className="text-white mt-auto">Build Forms</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* React-Bootstrap Form Component */}
        <Container id="contact" className="my-5 p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
          <h2 className="text-center mb-4">Contact Form</h2>
          {isSubmitted ? (
            <div className="alert alert-success text-center" role="alert">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
