import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const TouristSpotsDetails = () => {

    const tourists = useLoaderData()
    const{_id} = useParams()
    const tourist = tourists.find(tourist => tourist._id == _id);
    console.log(_id,tourist);
    const{touristSpot,
        
        countryName,
        location,
        Description,
        imageURL,
        userName,
        email,
        seasonality,
        travelTime,
        totalVisitors,
        averageCost,} = tourist;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={imageURL} className="max-w-80 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{touristSpot}</h1>
      <h1 className="text-2xl font-bold">{countryName}</h1>
      <p className="flex gap-2 items-center"><span><FaLocationDot /></span><span>{location}</span></p>
      <p className="py-6">{Description}</p>

      <h1 className="text-xl  font-bold">Seasonality: {seasonality}</h1>
      <h1 className="text-xl font-bold">Travel Time: {travelTime}</h1>
      <p>Average Cost: {averageCost}</p>
      <p >Total Visitors: {totalVisitors}</p>
      
      <Link to={'/'}>
      <button className="btn btn-primary mt-5">Back Home Page</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TouristSpotsDetails;