import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5 border-top border-secondary border-opacity-25">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <h4 className="fw-bold text-info mb-3">Zokouehi Axel Gervais BERI</h4>
            <p className="text-muted pe-md-4">
              Full-Stack Web & Mobile Developer and Business Analyst dedicated to crafting high-performance digital solutions and managing end-to-end technical product delivery.
            </p>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-md-end">
            <h5 className="fw-bold text-white mb-3">Contact & Location</h5>
            <p className="text-muted mb-1 d-flex align-items-center gap-2">
              <FaPhone className="text-info" /> +225 07 78 92 99 03
            </p>
            <p className="text-muted mb-3 d-flex align-items-center gap-2">
              <FaMapMarkerAlt className="text-info" /> Abidjan, Côte d'Ivoire
            </p>
          </Col>
        </Row>

        <hr className="my-4 border-secondary border-opacity-25" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
          <small className="text-muted">
            &copy; {new Date().getFullYear()} Zokouehi Axel Gervais BERI. All rights reserved.
          </small>

          <div className="d-flex gap-3 fs-5">
            <a href="https://github.com/axelgervaisberi" target="_blank" rel="noopener noreferrer" className="text-muted text-hover-info">
              <FaGithub />
            </a>
            <a href="mailto:axel.beri@example.com" className="text-muted text-hover-info">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
