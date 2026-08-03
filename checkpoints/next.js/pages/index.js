import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featuredProjects = [
    {
      title: "ANAGED Portal & SIM",
      description: "Fullstack Web Portal and Management Information System developed for ANAGED, featuring high-concurrency microservices, document storage, and fast search indexing.",
      techStack: ["Next.js", "PostgreSQL", "Docker", "Redis", "MinIO", "MeiliSearch"],
      role: "Fullstack Lead"
    },
    {
      title: "TransCI Transport Platform",
      description: "Inter-city transport ticketing platform allowing commuters to search routes, purchase bus tickets online from their mobile phones, and receive digital tickets via WebSockets.",
      techStack: ["React.js", "Django", "PostgreSQL", "Docker", "Redis", "WebSockets"],
      role: "Fullstack Architecture"
    }
  ];

  const keySkills = [
    "Next.js & React", "React Native", "Node.js & Express", "Python & Django",
    "PostgreSQL & MySQL", "Odoo ERP", "Docker & Microservices", "BPMN & Agile PM",
    "UI/UX Design (Figma)", "Prompt Engineering"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/image.png"
              alt="Zokouehi Axel Gervais BERI"
              width={190}
              height={190}
              priority
              className={styles.profileImage}
            />
          </div>

          <h1 className={styles.title}>Zokouehi Axel Gervais BERI</h1>
          <p className={styles.subtitle}>
            Full-Stack Web & Mobile Developer | Business Analyst | Technical Project Manager
          </p>

          <div className="d-flex justify-content-center gap-3 mb-5">
            <Link href="/projects" passHref legacyBehavior>
              <Button variant="info" size="lg" className="rounded-pill px-4 fw-bold shadow">
                View My Projects
              </Button>
            </Link>

            <Link href="/contact" passHref legacyBehavior>
              <Button variant="outline-light" size="lg" className="rounded-pill px-4 shadow">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Key Skills Pills */}
          <div className="max-w-4xl mx-auto">
            {keySkills.map((skill, idx) => (
              <span key={idx} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="display-6 fw-bold text-white mb-2">Featured Work</h2>
              <p className="text-muted mb-0">Highlights from recent enterprise web applications</p>
            </div>
            
            <Link href="/projects" passHref legacyBehavior>
              <Button variant="link" className="text-info text-decoration-none fw-bold">
                View All Projects &rarr;
              </Button>
            </Link>
          </div>

          <Row className="g-4">
            {featuredProjects.map((proj, idx) => (
              <Col lg={6} key={idx}>
                <ProjectCard {...proj} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
