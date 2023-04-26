import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bgpic from '../../../assets/bg.png'
import { Link } from 'react-router-dom';


const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button variant="outline-primary"><FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub /> login with github</Button>
            <div>
                <h2>Find Us On</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Morbi leo risus</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={bgpic} alt="" />
                <div className='position-absolute top-0 p-5 text-center'>
                    <h1 className='text-white text-bold mb-4'>Create an Amazing Newspaper</h1>
                    <p className='text-white mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Link to="">
                        <Button className='p-3 fs-5' variant="danger">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RightNav;