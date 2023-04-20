import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bgpic from '../../../assets/bg.png'


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
            <div>
                <img src={bgpic} alt="" />
            </div>
        </div>
    );
};

export default RightNav;