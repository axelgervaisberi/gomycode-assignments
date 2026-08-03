import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <Container className="py-5">
      <div className="mb-5 text-center">
        <h1 className="display-5 fw-bold text-white mb-2">Get In Touch</h1>
        <p className="lead text-muted">
          Have a project in mind or looking for a Business Analyst / Full-Stack Developer? Let's connect!
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        {/* Contact Info Card */}
        <Col md={5}>
          <Card className="glass-card h-100 p-4 border-0 text-white">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold text-info mb-4">Contact Details</h3>

                <div className="mb-4 d-flex align-items-center gap-3">
                  <div className="bg-primary bg-opacity-25 p-3 rounded-circle text-info fs-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h6 className="text-muted mb-0 small">Phone / WhatsApp</h6>
                    <span className="fw-bold fs-5 text-white">+225 07 78 92 99 03</span>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-center gap-3">
                  <div className="bg-info bg-opacity-25 p-3 rounded-circle text-info fs-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h6 className="text-muted mb-0 small">Location</h6>
                    <span className="fw-bold fs-5 text-white">Abidjan, Côte d'Ivoire</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark p-3 rounded-3 border border-secondary border-opacity-25">
                <small className="text-muted d-block mb-1">Available for Opportunities</small>
                <span className="text-success fw-bold">🟢 Open for Full-Stack & Business Analysis roles</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={7}>
          <Card className="glass-card p-4 border-0 text-white">
            <Card.Body>
              <h3 className="h4 fw-bold text-info mb-4">Send a Message</h3>

              {submitted && (
                <Alert variant="success" className="rounded-3 mb-4">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label className="fw-semibold">Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label className="fw-semibold">Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label className="fw-semibold">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Project Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-dark text-white border-secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-dark text-white border-secondary"
                  />
                </Form.Group>

                <Button variant="info" type="submit" className="w-100 py-3 fw-bold rounded-pill shadow d-flex align-items-center justify-content-center gap-2">
                  <FaPaperPlane /> Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
