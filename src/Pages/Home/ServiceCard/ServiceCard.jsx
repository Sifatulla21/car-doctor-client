import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-[200px]" src={img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-orange-500 text-2xl font-bold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/book/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;