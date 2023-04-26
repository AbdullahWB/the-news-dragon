import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4 className='mb-4'>All category</h4>
            {
                categories.map(category => <p
                    className='p-3 my-p'
                    key={category.id}
                >
                    <NavLink
                        to={`/category/${category.id}`}
                        className={({isActive}) => isActive ? "active text-decoration-none text-danger text-bold" : "text-decoration-none text-black"}
                    >
                        {category.name}
                    </NavLink>

                </p>)
            }
        </div>
    );
};

export default LeftNav;