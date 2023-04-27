import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='container mt-5'>
            <div className="text-center" style={{ marginBottom: '70px' }}>
                <img src={logo} alt="" />
                <p className='mt-3 fs-4'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex p-3 rounded-3 mb-2' style={{ backgroundColor: '#F3F3F3' }}>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50}>
                Iran court issues $312.9 million judgement against US over 2017 IS attack || Angry Traders Attack Fire Brigade Officers for Showing Up Late, Force Them to Run for Safety
                </Marquee>
            </div>
        </div>
    );
};

export default Header;