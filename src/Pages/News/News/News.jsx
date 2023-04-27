import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditorsInside from '../EditorsInside/EditorsInside';
import './News.css'
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
    const news = useLoaderData()
    const {_id, title, image_url, details, category_id} = news
    return (
        <div>
            <Card className='mb-5' style={{padding: '30px'}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='p-0 mt-4'>
                    <Card.Title className='text-bold fs-3 mb-4'>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button className='btn-col'><FaArrowLeft></FaArrowLeft><span className='ms-3'>All news in this category</span></Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;