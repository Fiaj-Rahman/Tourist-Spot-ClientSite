import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../RegisterLogComponent/FirebaseProvider";
import { Link } from "react-router-dom";

const MyTouristSpots = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://travel-spot-asia-server-assignement10.vercel.app/addTouristSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user,control]);


  const handleDelete=(id)=>{
    fetch(`https://travel-spot-asia-server-assignement10.vercel.app/delete/${id}`,{
        method:"DELETE",
    })

    .then((res)=>(res.json()))
    .then((data)=>{
        if(data.deletedCount > 0)
        {
            setControl(!control)
        }
    })
}


  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mt-10 mb-10">
          MY ADDED TOURIST SPOTS
        </h1>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr >
               
                <th>Spot Name</th>
                <th>Country Name</th>
                <th>Seasonality</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                item?.map(p=>(
                    <>
                    <tr>
                
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={p.imageURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{p.touristSpot}</div>
                      <div className="text-sm opacity-50">{p.location}</div>
                    </div>
                  </div>
                </td>
                <td >
                  {p.countryName}
                
                </td>
                <td>{p.seasonality}</td>
                <th>
                  <Link to={`/product/${p._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                </th>
                <th>
                  <Link><button onClick={()=>handleDelete(p._id)} className="btn btn-ghost btn-xs">Delete</button></Link>
                </th>
              </tr>
                    </>
                ))
              }
            </tbody>
          
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTouristSpots;
