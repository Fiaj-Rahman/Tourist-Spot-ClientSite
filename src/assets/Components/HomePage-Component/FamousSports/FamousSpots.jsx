import React from 'react';

const FamousSpots = () => {

    const data = [
        {
          imgelink:
            "./spot01.jpg",
        },
        {
          imgelink:
            "./spot02.jpeg",
        },
        {
          imgelink:
            "./spot03.jpg",
        },
        {
          imgelink:
            "./spot04.jpg",
        },
        {
          imgelink:
            "./spot05.jpg",
        },
        {
            imgelink:
              "./spot06.jpg",
          },
          {
            imgelink:
              "./spot07.jpg",
          },
          {
            imgelink:
              "./spot08.jpg",
          },
      ];
     
      const [active, setActive] = React.useState(
        "./spot03.jpg",
      );


    return (
       <div>
        <div>
            <h1 className='text-4xl text-center font-bold mt-10 mb-10'>FAMOUS SPOTS GALLERY</h1>
        </div>



        <div>
        <div className="grid gap-3">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-8 gap-2">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
        </div>
       </div>
    );
};

export default FamousSpots;