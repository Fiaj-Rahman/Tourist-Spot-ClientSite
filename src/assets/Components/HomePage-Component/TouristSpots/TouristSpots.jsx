// import React, { useEffect, useState } from 'react';
// import SixSpot from './SixSpot';

// const TouristSpots = () => {

//     const [alltouristSpots,setTouristSpots] = useState([])

//     useEffect(()=>{
//         fetch('https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot')

//         .then(res=>res.json())
//         .then(data => setTouristSpots(data))
//     })



//     return (
//         <div>
//            <div> <h1 className='text-center text-4xl font-bold mt-10 mb-5'>Tourists Spots</h1></div>
//            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'> 
//            {
//                 alltouristSpots.map(alltouristSpots=> <SixSpot alltouristSpots={alltouristSpots}></SixSpot>)
//             }
//            </div>
//         </div>
//     );
// };

// export default TouristSpots;




import React, { useEffect, useState } from 'react';
import SixSpot from './SixSpot';

const TouristSpots = () => {

    const [alltouristSpots,setTouristSpots] = useState([])

    useEffect(()=>{
        fetch('https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot')

        .then(res=>res.json())
        .then(data => setTouristSpots(data.slice(0, 6)))
    })



    return (
        <div>
           <div> <h1 className='text-center text-4xl font-bold mt-10 mb-5'>TOURISTS SPOTS</h1></div>
           <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'> 
           {
                alltouristSpots.map(alltouristSpots=> <SixSpot key={alltouristSpots._id} alltouristSpots={alltouristSpots}></SixSpot>)
            }
           </div>
        </div>
    );
};

export default TouristSpots;
