import { BrowserRouter, Route, Routes } from "react-router";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Outlet = () => (
    <Row className="justify-content-center">
        <Col md={10} className="text-center p-5 border rounded-3 bg-light">
            <h2 className="text-muted">Routed Page Content Renders Here</h2>
            <p>The actual page content for the selected route will be dynamically loaded by the router.</p>
        </Col>
    </Row>
);

const crest = "https://placehold.co/30x30/dc3545/ffffff?text=Crest";

const FoodForThoughtNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="FoodForThought Logo"
                        src={crest}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    FoodForThought
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                    <Nav>
                        {/* as={Link} uses the router's Link component */}
                        <Nav.Link as={Link} to="/about-club">About the Club</Nav.Link>
                        <Nav.Link as={Link} to="/fundraising">Fundraising</Nav.Link>
                        <Nav.Link as={Link} to="/meet-the-leadership">Meet the Leadership</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const FoodForThoughtLayout = () => {
    return (
        <div>
            <FoodForThoughtNavbar />
            <Container className="py-4">

                <Outlet />
            </Container>
        </div>
    );
}

export default function FoodForThoughtRouter() {
    return (
        <BrowserRouter>
            {/* Load Bootstrap CSS first */}
            <link 
                rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
                crossOrigin="anonymous" 
            />
            <Routes>

                <Route path="/" element={<FoodForThoughtLayout />}>
                    
                    <Route index element={null} /> 
                    
                    <Route path="about-club" element={null} />
                    
                    <Route path="fundraising" element={null} />
                    
                    <Route path="meet-the-leadership" element={null} />

                    <Route path="*" element={null} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

