
import React, { useEffect, useState } from 'react';
import ShowAllSpots from './ShowAllSpots';

const AllTouristSpots = () => {
    const [allTouristSpots, setAllTouristSpots] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        fetch(`https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot?sort=${sortOption}`)
            .then(res => res.json())
            .then(data => setAllTouristSpots(data));
    }, [sortOption]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-bold mt-10 mb-5'>TOURISTS SPOTS</h1>
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="">Sort by</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                {allTouristSpots.map(touristSpot => (
                    <ShowAllSpots key={touristSpot._id} alltouristSpots={touristSpot} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;
