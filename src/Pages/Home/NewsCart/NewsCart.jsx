import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import './NewsCart.css'

const NewsCart = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-5 p-3">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ms-2 flex-grow-1 mt-3'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='my-3' variant='top' src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} .... <Link className='My-link' to={`/news/${_id}`}>Read More</Link> </>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex bg-transparent py-4">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='My-link'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;