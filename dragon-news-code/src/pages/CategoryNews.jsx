import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const { data }= useLoaderData();
    console.log(data);
    
    return (
        <div>
            <h2> {data.length} News found in this category </h2>
        </div>
    );
};

export default CategoryNews;