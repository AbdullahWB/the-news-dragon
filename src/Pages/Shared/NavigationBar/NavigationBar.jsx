import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container style={{marginBottom: '80px'}}>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link style={{textDecoration: 'none'}}>
                                <Link style={{textDecoration: 'none'}} to='/category/0'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>Features</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&<FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            {user ? <Link to='/register'>
                                <Button className='py-2 px-5' variant="dark">Register</Button></Link> : <Link to='/login'>
                                <Button className='py-2 px-5' variant="dark">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;