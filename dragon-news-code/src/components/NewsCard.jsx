import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
    const {
        title,
        details,
        rating,
        total_view,
        author,
        image_url,
        thumbnail_url,
    } = news;

    return (
        <div className="w-11/12 mx-auto bg-white border rounded-lg shadow-lg space-y-2">
            {/* Author Section */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <FiShare2 size={20} />
                </button>
            </div>
            <div>
                <h2 className="font-semibold text-lg mb-2">{title}</h2>
            </div>

            {/* Thumbnail */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt="Thumbnail"
                    className="w-full h-52 object-cover"
                />
            </figure>

            {/* Content */}
            <div className="p-4">

                <p className="text-gray-600 text-sm mb-4">
                    {details.substring(0, 120)}...
                </p>
                <button className="text-blue-500 font-medium hover:underline">
                    Read More
                </button>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between p-4 border-t">
                <div className="flex items-center">
                    <AiFillStar className="text-yellow-500 mr-1" />
                    <span className="font-medium">{rating.number}</span>
                    <span className="ml-2 text-sm badge badge-outline">{rating.badge}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                    <FaEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;