import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h4 className='text-bold mb-3'>Dragon News Home: {categoryNews.length}</h4>}
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;