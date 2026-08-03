import { Card, Badge } from 'react-bootstrap';

const ProjectCard = ({ title, description, techStack, role }) => {
  return (
    <Card className="glass-card h-100 shadow border-0 p-4 text-white">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h3 className="h4 fw-bold text-info mb-0">{title}</h3>
            {role && <Badge bg="outline-light" className="bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{role}</Badge>}
          </div>

          <p className="text-light opacity-75 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        <div>
          <h6 className="fw-semibold text-muted mb-2 small text-uppercase tracking-wider">Technologies Used</h6>
          <div className="d-flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <Badge key={idx} bg="dark" className="border border-secondary border-opacity-50 px-3 py-2 fw-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
