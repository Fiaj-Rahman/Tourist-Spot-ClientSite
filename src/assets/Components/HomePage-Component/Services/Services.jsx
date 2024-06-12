import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Services = () => {
  const data = [
    {
      label: "Handpicked Destinations",
      value: "html",
      desc: `Explore the world's most captivating destinations carefully selected by our team of travel experts. From hidden gems to iconic landmarks, we curate unique experiences that cater to every traveler's taste and preference.`,
    },
    {
      label: "Best Price Guaranteed",
      value: "react",
      desc: `Enjoy peace of mind knowing that you're getting the best value for your money. With our best price guarantee, you can book your dream vacation with confidence, knowing that you're getting unbeatable prices on flights, accommodations, and tours.`,
    },
    {
      label: "24/7 Customer Service",
      value: "vue",
      desc: `Your satisfaction is our top priority. That's why our dedicated customer service team is available around the clock to assist you with any questions, concerns, or special requests. Whether you need assistance with booking changes, travel advice, or emergency support, we're here to help every step of the way.`,
    },
  ];

  return (
    <div className="max-w-7xl m-auto mt-10 rounded-xl p-5">
      <div>
        <h1 className="text-center text-4xl font-bold">
          OUR SERVICES
          <p className="text-center text-xl mt-5 mb-5 ">WHAT WE DO FOR YOU</p>
        </h1>
      </div>

      <div className="mb-10 text-center">
        <p>
          At CozyCasa Properties, we specialize in residential real estate,
          offering a diverse range of properties tailored to meet the unique
          needs of our clients. From single-family homes to townhouses,
          apartments, student housing, senior living communities, and vacation
          rentals, we provide a comprehensive selection of options. Our
          dedicated team is committed to delivering exceptional service and
          guiding you through every step of your real estate journey. Contact us
          today to explore our portfolio and find your ideal home.
        </p>
      </div>

      <div className=" bg-orange-200 rounded-xl">
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="font-bold">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
