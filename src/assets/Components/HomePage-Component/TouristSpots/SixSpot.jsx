import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SixSpot = ({ alltouristSpots }) => {
    
    const{touristSpot,
        _id,
        countryName,
        location,
        Description,
        imageURL,
        userName,
        email,
        seasonality,
        travelTime,
        totalVisitors,
        averageCost,} = alltouristSpots;


  return (
    <div>
    <Link to={`/TouristSpots/${_id}`}>
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
        <figure>
          <img
            src={imageURL}
            alt="Shoes"
            className="h-80"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{touristSpot}</h2>
          <h2 className="card-title">Seasonality: {seasonality}</h2>
          <p className="flex gap-2 items-center"><span><FaLocationDot /></span><span>{location}</span></p>
          <div className="card-actions justify-center mt-5">
            {/* <button className="btn btn-primary">View Details</button> */}
            
            <button className="btn btn-primary">View Details</button>
           
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default SixSpot;
