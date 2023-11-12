import HelmetData from "../../Component/HelmetData/HelmetData";
import Banner from "./Banner/Banner";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";

const Home = () => {
  return (
    <>
      <HelmetData>Food Community</HelmetData>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
    </>
  );
};

export default Home;
