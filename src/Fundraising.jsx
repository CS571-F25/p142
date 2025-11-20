import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        crossOrigin="anonymous" 
      />
      
      <Container className="py-5 text-center">
        
        <Row className="mb-4">
          <Col>
            <h1>Support Our Mission</h1>
          </Col>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4}>
            <Button 
              variant="primary" 
              size="lg"
              href="https://placeholder.com/donate" 
              target="_blank"
            >
              Donate Now
            </Button>
          </Col>
        </Row>

      </Container>
    </>
  );
}
