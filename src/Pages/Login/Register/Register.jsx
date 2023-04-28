import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Register.css'
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false)
    const { createUser } = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-color d-flex justify-content-center align-items-center'>
            <Container className='mx-auto w-25'>
                <Form onSubmit={handleRegister} className='p-5 w-100 h-100 bg-white border rounded'>
                    <h2 className='text-center text-bold mt-0 mb-3'>Register your account</h2>
                    <hr />
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='text-bold'>Your Name</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type="text" name='name' required placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-bold'>Email address</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type="email" name='email' required placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-bold'>Photo URL</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type="text" name='photo' required placeholder="Enter your Photo URL" />
                    </Form.Group>

                    <Form.Group className="mb-3 my-relative" controlId="formBasicPassword">
                        <Form.Label className='text-bold'>Password</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type={show ? "text" : "password"} name='password' required placeholder="Enter your password" />
                        <p className='toggle' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </small>
                        </p>
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