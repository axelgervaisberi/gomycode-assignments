import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Import Player component and players data array
import Player from './Player';
import players from './players';

/**
 * PlayersList Component
 * Maps over the array of players and passes props to each Player component using the spread operator.
 */
const PlayersList = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center g-4">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            {/* Using spread operator to pass all properties as props */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
