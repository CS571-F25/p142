import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        crossOrigin="anonymous" 
      />
      
      <Container className="py-5">
        
        {/* Main Title Row */}
        <Row className="mb-2 text-center">
          <Col>
            <h1>Food for Thought</h1>
          </Col>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col md={6}>
            <img 
              src="https://placehold.co/800x150/e9ecef/495057?text=Our+Story+at+a+Glance" 
              alt="Our Story at a Glance Placeholder"
              className="img-fluid d-block mx-auto"
            />
          </Col>
        </Row>

        <Row className="mb-5 justify-content-center">
          <Col md={8} lg={6}>
            <Nav defaultActiveKey="#mission" className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="#mission">Our Mission</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#history">Key Milestones</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#team">Get Involved</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        
        <section id="mission">
          <h2 className="border-bottom">Our Mission</h2>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </section>

        <section id="history">
          <h2 className="border-bottom">What to expect at a meeting</h2>
          <Row>
            <Col>
              <p>
                Aliquam erat volutpat. Nam elementum, augue vitae luctus feugiat, elit ligula tincidunt leo, ac tincidunt purus velit eget dolor. Donec sed justo libero. Fusce eu ipsum vel lectus semper lacinia. Curabitur sed arcu eget erat auctor egestas. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sit amet purus eget enim sollicitudin vulputate.
              </p>
            </Col>
          </Row>
        </section>

        <section id="team">
          <h2 className="border-bottom">Get Involved</h2>
          <Row>
            <Col>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed interdum, odio sit amet interdum facilisis, urna sapien convallis tellus, nec vehicula elit arcu ac elit. Quisque at nunc sit amet dolor volutpat finibus. Nunc sit amet nisl at nisi placerat tincidunt. Ut pretium velit eu libero ultrices, non pharetra justo dictum.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}
