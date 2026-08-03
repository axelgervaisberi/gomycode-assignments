import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaLanguage } from 'react-icons/fa';

export default function About() {
  const education = [
    { year: "2025 - Present", degree: "GoMyCode Certification", school: "Full-Stack & Software Engineering Bootcamp" },
    { year: "2018 - 2022", degree: "Bachelor's Degree", school: "International University of Grand Bassam (IUGB)" },
    { year: "2015 - 2017", degree: "Higher Education Studies", school: "Valoris University" },
    { year: "2015", degree: "Baccalauréat Series D", school: "Secondary Education Graduate" }
  ];

  const workExperience = [
    {
      period: "October 2025 - Present",
      role: "Business Analyst & Project Manager",
      company: "EBENYX Technologies",
      tasks: [
        "Client requirements gathering & business need transcription into technical specifications for development teams.",
        "Designing UI wireframes and interactive prototypes.",
        "Creating BPMN process workflow diagrams.",
        "Agile project management and sprint orchestration."
      ]
    },
    {
      period: "February 2025 - September 2025",
      role: "Software Developer Intern",
      company: "EBENYX Technologies",
      tasks: [
        "Web and Mobile application development.",
        "UI mockups and interactive wireframe design.",
        "Functional testing and quality assurance verification."
      ]
    },
    {
      period: "2022 - 2025",
      role: "Full-Stack Web Developer & Website Administrator",
      company: "Direction Général de la Décentralisation et du Développement Local (DGDLD)",
      tasks: [
        "Full-stack development using PHP, JavaScript, React, Express.js, MySQL, and TailwindCSS.",
        "Full web administration of the government entity website.",
        "Development and maintenance of the SYGIDAN solution.",
        "Mobile application development.",
        "Active participation in the Support and Mobilization Project for Local Government Resources in Côte d'Ivoire."
      ]
    }
  ];

  const techStack = [
    "Next.js", "React.js", "React Native", "Express.js", "Odoo ERP",
    "PostgreSQL", "MySQL", "Figma", "Adobe UX & Illustrator", "Prompt Engineering", "Linear"
  ];

  const interests = ["Travelling", "Technology", "Music", "Football", "Reading"];

  return (
    <Container className="py-5">
      {/* Page Title */}
      <div className="mb-5 text-center">
        <h1 className="display-5 fw-bold text-white mb-2">About Me</h1>
        <p className="lead text-muted">
          Zokouehi Axel Gervais BERI | Abidjan, Côte d'Ivoire | +225 07 78 92 99 03
        </p>
      </div>

      <Row className="g-4">
        {/* Work Experience */}
        <Col lg={7}>
          <Card className="glass-card h-100 p-4 border-0 text-white">
            <Card.Body>
              <h3 className="h4 fw-bold text-info mb-4 d-flex align-items-center gap-2">
                <FaBriefcase /> Professional Work Experience
              </h3>

              {workExperience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="fw-bold text-white mb-0">{exp.role}</h5>
                    <Badge bg="primary" className="rounded-pill">{exp.period}</Badge>
                  </div>
                  <h6 className="text-info opacity-75 mb-2">{exp.company}</h6>
                  <ul className="text-light opacity-75 small ps-3 mb-0">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx} className="mb-1">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Education & Stack */}
        <Col lg={5}>
          <div className="d-flex flex-column gap-4">
            {/* Education Card */}
            <Card className="glass-card p-4 border-0 text-white">
              <Card.Body>
                <h3 className="h4 fw-bold text-info mb-4 d-flex align-items-center gap-2">
                  <FaGraduationCap /> Education & Academic Background
                </h3>

                {education.map((edu, idx) => (
                  <div key={idx} className="timeline-item mb-3">
                    <span className="badge bg-secondary mb-1">{edu.year}</span>
                    <h6 className="fw-bold text-white mb-0">{edu.degree}</h6>
                    <small className="text-muted">{edu.school}</small>
                  </div>
                ))}
              </Card.Body>
            </Card>

            {/* Technical Stack */}
            <Card className="glass-card p-4 border-0 text-white">
              <Card.Body>
                <h3 className="h4 fw-bold text-info mb-3 d-flex align-items-center gap-2">
                  <FaCode /> Technical Stack
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <Badge key={idx} bg="dark" className="border border-info border-opacity-50 px-3 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Languages & Interests */}
            <Card className="glass-card p-4 border-0 text-white">
              <Card.Body className="d-flex flex-column gap-3">
                <div>
                  <h5 className="fw-bold text-info mb-2 d-flex align-items-center gap-2">
                    <FaLanguage /> Languages
                  </h5>
                  <p className="text-light opacity-75 mb-0">
                    <strong>French:</strong> Native | <strong>English:</strong> Advanced
                  </p>
                </div>

                <div>
                  <h5 className="fw-bold text-info mb-2 d-flex align-items-center gap-2">
                    <FaHeart /> Personal Interests
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {interests.map((item, idx) => (
                      <span key={idx} className="badge bg-secondary bg-opacity-50 text-light rounded-pill px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
