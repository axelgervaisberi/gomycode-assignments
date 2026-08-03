import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 shadow-sm border-bottom border-secondary border-opacity-25">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="fw-bold fs-4 text-info cursor-pointer">
            Axel BERI<span className="text-white">.dev</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link active={router.pathname === '/'} className="px-3 rounded-pill fw-semibold">
                Home
              </Nav.Link>
            </Link>

            <Link href="/about" passHref legacyBehavior>
              <Nav.Link active={router.pathname === '/about'} className="px-3 rounded-pill fw-semibold">
                About
              </Nav.Link>
            </Link>

            <Link href="/projects" passHref legacyBehavior>
              <Nav.Link active={router.pathname === '/projects'} className="px-3 rounded-pill fw-semibold">
                Projects
              </Nav.Link>
            </Link>

            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link active={router.pathname === '/contact'} className="px-3 rounded-pill fw-semibold">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
