// import Swal from 'sweetalert2'

// const AddTouristSpots = () => {
//   const handleAddTouristSpots = (event) => {
//     event.preventDefault();

//     const form = event.target;

//     const touristSpot = form.touristSpot.value;
//     const countryName = form.countryName.value;
//     const location = form.location.value;
//     const Description = form.Description.value;
//     const imageURL = form.imageURL.value;
//     const userName = form.userName.value;
//     const averageCost = form.averageCost.value;
//     const seasonality = form.seasonality.value;
//     const travelTime = form.countryName.value;
//     const totalVisitors = form.countryName.value;
//     const email = form.email.value;

//     const newTouristSpot = {
//       touristSpot,
//       countryName,
//       location,
//       Description,
//       imageURL,
//       userName,
//       email,
//       seasonality,
//       travelTime,
//       totalVisitors,
//       averageCost,
//     };
//     console.log(newTouristSpot);

//     //send data to the server

//     fetch('https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot',{
//       method:'POST',
//       headers:{
//         'content-type':'application/json'
      
//       },
//       body:JSON.stringify(newTouristSpot)
//     })

//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       if(data.insertedId){
//         Swal.fire({
//           title: 'Success',
//           text: 'User Successfully Added ',
//           icon: 'success',
//           confirmButtonText: 'Cool'
//         })
//       }
//     })

//   };

//   return (
//     <div>
//       <section className="p-6 bg-gray-800 text-gray-50">
//         <form
//           onSubmit={handleAddTouristSpots}
//           className="container flex flex-col mx-auto space-y-12"
//         >
//           <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
//             <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
//               <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="firstname" className="text-sm">
//                   Tourist Spot Name
//                 </label>
//                 <input
//                   id="touristSpot"
//                   type="text"
//                   name="touristSpot"
//                   placeholder="Enter Tourist Spot Name"
//                   required
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="lastname" className="text-sm">
//                   Country Name
//                 </label>
//                 <input
//                   id="countryName"
//                   type="text"
//                   required
//                   name="countryName"
//                   placeholder="Enter Country Name"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-3">
//                 <label htmlFor="email" className="text-sm">
//                   Location
//                 </label>
//                 <input
//                   id="location"
//                   type="text"
//                   required
//                   placeholder="Enter Your Location"
//                   name="location"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full">
//                 <label htmlFor="address" className="text-sm">
//                   Short Description
//                 </label>
//                 <input
//                   id="Description"
//                   type="text"
//                   required
//                   name="Description"
//                   placeholder="Write a short description here.."
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full">
//                 <label htmlFor="address" className="text-sm">
//                   Image URL
//                 </label>
//                 <input
//                   id="imageURL"
//                   type="text"
//                   required
//                   placeholder="Enter Photo URL"
//                   name="imageURL"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="zip" className="text-sm">
//                   User Name
//                 </label>
//                 <input
//                   id="userName"
//                   type="text"
//                   name="userName"
//                   required
//                   placeholder="Enter a User Name"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="city" className="text-sm">
//                   User Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   required
//                   name="email"
//                   placeholder="Enter User Email"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="city" className="text-sm">
//                   Average Cost
//                 </label>
//                 <input
//                   id="averageCost"
//                   type="number"
//                   required
//                   name="averageCost"
//                   placeholder="Enter Average Cost"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="state" className="text-sm">
//                   Seasonality
//                 </label>
//                 <input
//                   id="seasonality"
//                   type="text"
//                   required
//                   placeholder="Enter Seasonality like summer or winter..."
//                   name="seasonality"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="zip" className="text-sm">
//                   Travel Time
//                 </label>
//                 <input
//                   id="travelTime"
//                   type="text"
//                   required
//                   name="travelTime"
//                   placeholder="Enter Travel Time"
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>

//               <div className="col-span-full sm:col-span-2">
//                 <label htmlFor="city" className="text-sm">
//                   Total Visitors Per Year
//                 </label>
//                 <input
//                   id="totalVisitors"
//                   type="number"
//                   placeholder="Enter the Total Visitors Per Year.."
//                   name="totalVisitors"
//                   required
//                   className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
//                 />
//               </div>
//             </div>
//           </fieldset>
//           <div>
//             <input
//               type="submit"
//               value="Add Tourist Spot"
//               className="btn btn-block "
//             />
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default AddTouristSpots;









import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../RegisterLogComponent/FirebaseProvider';

const AddTouristSpots = () => {

  const {user} = useContext(AuthContext)

  const handleAddTouristSpots = (event) => {
    event.preventDefault();

    const form = event.target;

    const touristSpot = form.touristSpot.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const Description = form.Description.value;
    const imageURL = form.imageURL.value;
    const userName = form.userName.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.countryName.value;
    const totalVisitors = form.countryName.value;
    const email = form.email.value;
    const userEmail = user.email;

    const newTouristSpot = {
      touristSpot,
      countryName,
      location,
      Description,
      imageURL,
      userName,
      email,
      seasonality,
      travelTime,
      totalVisitors,
      averageCost,
      userEmail
    };
    console.log(newTouristSpot);

    //send data to the server

    fetch('https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      
      },
      body:JSON.stringify(newTouristSpot)
    })

    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'User Successfully Added ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  };

  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          onSubmit={handleAddTouristSpots}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Tourist Spot Name
                </label>
                <input
                  id="touristSpot"
                  type="text"
                  name="touristSpot"
                  placeholder="Enter Tourist Spot Name"
                  required
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Country Name
                </label>
                <input
                  id="countryName"
                  type="text"
                  required
                  name="countryName"
                  placeholder="Enter Country Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  placeholder="Enter Your Location"
                  name="location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Short Description
                </label>
                <input
                  id="Description"
                  type="text"
                  required
                  name="Description"
                  placeholder="Write a short description here.."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Image URL
                </label>
                <input
                  id="imageURL"
                  type="text"
                  required
                  placeholder="Enter Photo URL"
                  name="imageURL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  required
                  placeholder="Enter a User Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  User Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="Enter User Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  id="averageCost"
                  type="number"
                  required
                  name="averageCost"
                  placeholder="Enter Average Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Seasonality
                </label>
                <input
                  id="seasonality"
                  type="text"
                  required
                  placeholder="Enter Seasonality like summer or winter..."
                  name="seasonality"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  id="travelTime"
                  type="text"
                  required
                  name="travelTime"
                  placeholder="Enter Travel Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  id="totalVisitors"
                  type="number"
                  placeholder="Enter the Total Visitors Per Year.."
                  name="totalVisitors"
                  required
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>
            </div>
          </fieldset>
          <div>
            <input
              type="submit"
              value="Add Tourist Spot"
              className="btn btn-block "
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpots;
