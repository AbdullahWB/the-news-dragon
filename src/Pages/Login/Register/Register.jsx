import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-color d-flex justify-content-center align-items-center'>
              <Container className='mx-auto w-25'>
            <Form className='p-5 w-100 h-100 bg-white border rounded'>
                <h2 className='text-center text-bold mt-0 mb-3'>Register your account</h2>
                <hr />
                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Your Name</Form.Label>
                    <Form.Control className='p-3' style={{background: '#F3F3F3'}} type="text" name='name' required placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Email address</Form.Label>
                    <Form.Control className='p-3' style={{background: '#F3F3F3'}} type="email" name='email' required placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-bold'>Photo URL</Form.Label>
                    <Form.Control className='p-3' style={{background: '#F3F3F3'}} type="text" name='photo' required placeholder="Enter your Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-bold'>Password</Form.Label>
                    <Form.Control className='p-3' style={{background: '#F3F3F3'}} type="password" name='password' required placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Term & Conditions" />
                </Form.Group>
                <Button className='w-100 py-2 mb-3' variant="dark" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-center d-flex justify-content-center align-items-center">
                    Already Have An Account ? <Link to="/login" className='text-danger ms-2 text-decoration-none text-bold'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
      </div>
    );
};

export default Register;