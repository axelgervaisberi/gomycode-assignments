import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projectsList = [
    {
      title: "Sygidan Citoyen",
      description: "Mobile application enabling citizens to easily interact with local government authorities, report community issues, and track local public service requests in real-time.",
      techStack: ["Laravel", "React", "MySQL", "REST API"],
      role: "Mobile & Backend Developer"
    },
    {
      title: "ANAGED Website + SIM",
      description: "Comprehensive enterprise web portal and Management Information System (SIM) engineered for ANAGED, incorporating secure document management, high-performance database indexing, and microservices containerization.",
      techStack: ["Next.js", "PostgreSQL", "Docker", "Redis", "MinIO", "MeiliSearch"],
      role: "Fullstack Developer"
    },
    {
      title: "TransCI Inter-City Transport",
      description: "Inter-city bus ticketing platform allowing commuters to search bus schedules and buy tickets directly from their mobile phones without waiting in physical queues.",
      techStack: ["React.js", "Django", "PostgreSQL", "Docker", "Redis", "WebSockets"],
      role: "Fullstack Software Architect"
    },
    {
      title: "SIGETI - Industrial Land Management System",
      description: "Government-level platform allowing industrial operators to apply for industrial land plots online, obtain official authorization documents, pay land royalties, and track application status.",
      techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      role: "Fullstack Web Developer"
    }
  ];

  return (
    <Container className="py-5">
      <div className="mb-5 text-center">
        <h1 className="display-5 fw-bold text-white mb-2">Projects & Case Studies</h1>
        <p className="lead text-muted max-w-2xl mx-auto">
          Explore key software solutions, web portals, and mobile applications developed across public administration and enterprise tech sectors.
        </p>
      </div>

      <Row className="g-4">
        {projectsList.map((project, idx) => (
          <Col lg={6} key={idx}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
