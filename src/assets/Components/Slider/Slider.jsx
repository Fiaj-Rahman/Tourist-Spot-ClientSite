import { Carousel } from "@material-tailwind/react";

const Slider = () => {
    return (
        <div className="">
            <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="./slider01.jpg"
        alt="image 1"
        className="h-96 w-full object-cover object-center"
      />
      <img
        src="slider02.jpg"
        alt="image 2"
        className="h-96 w-full object-cover object-center"
      />
      <img
        src="slider03.jpg"
        alt="image 3"
        className="h-96 w-full object-cover object-center"
      />
    </Carousel>
        </div>
    );
};

export default Slider;