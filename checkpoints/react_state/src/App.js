import React, { Component } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import './App.css';

/**
 * Class-based App Component
 * Demonstrates React state, event handling, conditional rendering,
 * and component lifecycle methods (componentDidMount & componentWillUnmount).
 */
class App extends Component {
  // Class constructor initializing component state
  constructor(props) {
    super(props);
    
    // Initializing state with Person object, shows boolean, and timeElapsed counter
    this.state = {
      person: {
        fullName: "Axel Gervais",
        bio: "Passionate Full-Stack Developer with expertise in React, Node.js, and modern web architectures. Enjoys building interactive web applications and solving complex algorithmic challenges.",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
        profession: "Full-Stack Software Engineer"
      },
      shows: false,
      timeElapsed: 0
    };

    // Timer ID reference for cleaning up interval
    this.timerID = null;
  }

  /**
   * Component Lifecycle: componentDidMount
   * Invoked immediately after component is mounted to DOM.
   * Starts a 1-second interval timer to track time elapsed.
   */
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  /**
   * Component Lifecycle: componentWillUnmount
   * Invoked right before component is unmounted and destroyed.
   * Clears the interval timer to prevent memory leaks.
   */
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  /**
   * Toggle Handler
   * Toggles the 'shows' boolean state to display or hide the person profile.
   */
  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App min-vh-100 py-5 bg-light d-flex flex-column align-items-center justify-content-center">
        <Container className="d-flex flex-column align-items-center">
          
          {/* Header Title */}
          <h1 className="display-5 fw-bold text-primary mb-3">React Class Component & State</h1>
          
          {/* Component Lifecycle Timer Field */}
          <div className="mb-4">
            <Badge bg="secondary" className="fs-6 px-3 py-2 shadow-sm rounded-pill">
              ⏱️ Time elapsed since mount: <span className="fw-bold text-warning">{timeElapsed}</span> second(s)
            </Badge>
          </div>

          {/* Profile Toggle Button */}
          <Button
            variant={shows ? "danger" : "primary"}
            size="lg"
            onClick={this.toggleShow}
            className="mb-4 shadow-sm px-4 rounded-pill fw-bold"
          >
            {shows ? "Hide Profile" : "Show Profile"}
          </Button>

          {/* Conditional Profile Rendering */}
          {shows && (
            <Card className="profile-card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: '450px', width: '100%' }}>
              <Card.Img
                variant="top"
                src={person.imgSrc}
                alt={person.fullName}
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <Card.Body className="p-4 text-center">
                <Card.Title className="display-6 fw-bold text-dark mb-1">
                  {person.fullName}
                </Card.Title>
                <Card.Subtitle className="text-primary mb-3 fw-semibold fs-5">
                  {person.profession}
                </Card.Subtitle>
                <Card.Text className="text-muted leading-relaxed">
                  {person.bio}
                </Card.Text>
              </Card.Body>
            </Card>
          )}

        </Container>
      </div>
    );
  }
}

export default App;
