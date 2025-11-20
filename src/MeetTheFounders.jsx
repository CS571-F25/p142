import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function App() {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        xintegrity="sha384-9ndCyUaIbzAi2FUVXJi0C6R3T7XQWn9Ww3z0r4bT5A0tE/P2H1A5Vf2e7D6U0n2F" 
        crossOrigin="anonymous" 
      />
      <Container className="py-5">
        
        <div className="mb-5 text-center">
            <h1>Meet our Leadership</h1>
        </div>
        
        <Row>
          

          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src="https://placehold.co/600x400/000000/ffffff?text=Paul's+Picture"
                alt="Placeholder for Paul's Picture"
              />
              <Card.Body>
                <Card.Title>Stuff about Paul in here</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src="https://placehold.co/600x400/000000/ffffff?text=Jack's+Picture"
                alt="Placeholder for Jack's Picture"
              />
              <Card.Body>
                <Card.Title>Stuff about Jack in here</Card.Title>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src="https://placehold.co/600x400/000000/ffffff?text=Devin's+Picture"
                alt="Placeholder for Devin's Picture"
              />
              <Card.Body>
                <Card.Title>Stuff about Devin in here</Card.Title>
                <Card.Text>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}
