import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const { singIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log("login page", location);
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='bg-color d-flex justify-content-center align-items-center'>
            <Container className='mx-auto w-25 '>
                <Form onSubmit={handleLogin} className='p-5 w-100 h-100 bg-white border rounded'>
                    <h2 className='text-center text-bold mt-4 mb-5'>Login your account</h2>
                    <hr />
                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                        <Form.Label className='text-bold'>Email address</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type="email" name='email' required placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3 my-relative" controlId="formBasicPassword">
                        <Form.Label className='text-bold'>Password</Form.Label>
                        <Form.Control className='p-3' style={{ background: '#F3F3F3' }} type={show ? "text" : "password"} name='password' required placeholder="Enter your password" />
                        <p className='toggle' onClick={() => setShow(!show)}>
                            <span>
                                {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100 py-2 mb-3' variant="dark" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-center d-flex justify-content-center align-items-center">
                        Dont’t Have An Account ? <Link to="/register" className='text-danger ms-2 text-decoration-none text-bold'>Register</Link>
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

export default Login;