import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
import moment from 'moment';
import { FaCalendarAlt } from "react-icons/fa";

const EditorsInside = () => {
    return (
        <div className='container p-0'>
            <h3 className='mb-3'>Editors Insight</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='p-4 w-100 h-100'>
                        <Card.Img className='image-fluid h-100' variant="top" src='https://i.pinimg.com/550x/08/91/87/089187cf1bab83ce8633e4deb6c1ab01.jpg' />
                        <Card.Body className='px-0'>
                            <Card.Title>Fashion News</Card.Title>
                            <Card.Text>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Text>
                        </Card.Body>
                        <p><FaCalendarAlt></FaCalendarAlt> {moment().add(10, 'days').calendar()}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-4 w-100 h-100'>
                        <Card.Img className='image-fluid h-100' variant="top" src='https://editorial01.shutterstock.com/preview-440/10181138b/7614b35b/Shutterstock_10181138b.jpg' />
                        <Card.Body className='px-0'>
                            <Card.Title>Fashion News</Card.Title>
                            <Card.Text>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Text>
                        </Card.Body>
                        <p><FaCalendarAlt></FaCalendarAlt> {moment().add(10, 'days').calendar()}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className='p-4 w-100 h-100'>
                        <Card.Img className='image-fluid h-100' variant="top" src='https://media.fashionnetwork.com/m/e9eb/e93d/666d/0a7e/b387/c2f2/8e9f/0020/5cf9/8800/8800.jpg' />
                        <Card.Body className='px-0'>
                            <Card.Title>Fashion News</Card.Title>
                            <Card.Text>
                                21 The Most Stylish Wedding Guest Dresses For Spring
                            </Card.Text>
                        </Card.Body>
                        <p><FaCalendarAlt></FaCalendarAlt> {moment().add(10, 'days').calendar()}</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInside;