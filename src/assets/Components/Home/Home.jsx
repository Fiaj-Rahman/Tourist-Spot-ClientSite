
import CountriesSection from '../HomePage-Component/CourtriesSection/CountriesSection';
import FamousSpots from '../HomePage-Component/FamousSports/FamousSpots';
import Services from '../HomePage-Component/Services/Services';
import TouristSpots from '../HomePage-Component/TouristSpots/TouristSpots';
import Slider from '../Slider/Slider';

const Home = () => {
    
    return (
        <div>

            <Slider></Slider>
            <TouristSpots></TouristSpots>
            <CountriesSection></CountriesSection>
            <FamousSpots></FamousSpots>
            <Services></Services>

        </div>
    );
};

export default Home;