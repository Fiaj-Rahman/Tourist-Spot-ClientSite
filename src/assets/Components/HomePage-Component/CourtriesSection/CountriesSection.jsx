import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const CountriesSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mt-10 mb-5">
          COUNTRIES INFORMATION
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">

        {/* one  */}
        <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/w0vVqnG/bangladesh.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bangladesh</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>



         {/* two  */}
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/ZMcnnLq/Thailand.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thailand</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>


         {/* three  */}
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/tMVCWvJ/Indonesia.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Indonesia</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>




         {/* four  */}
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/89yFgzC/Malaysia.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Malaysia</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>



         {/* five  */}
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/1Lv9fQj/Vietnam.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vietnam</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>




         {/* six  */}
         <div className="card card-compact w-full bg-base-100 shadow-xl mt-10 p-3">
          <figure>
            <img
              src={"https://i.ibb.co/c1gdn9K/Cambodia.jpg"}
              alt="Shoes"
              className="h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cambodia</h2>

            <p className="flex gap-2 items-center">
              <span>
                <FaLocationDot />
              </span>
              <span> Southeast Asia</span>
            </p>

            <div className="card-actions justify-center mt-5">
              {/* <button className="btn btn-primary">View Details</button> */}

              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>









      </div>
    </div>
  );
};

export default CountriesSection;
