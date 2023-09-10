import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BannerSlider from "./components/BannerSlider";

const Home = () => {
  const data = {
    name: "Novus Vegetables",
  };

  return (
    <> <BannerSlider/>
      <Services />
      {/* <Trusted /> */}
    </>
  );
};

export default Home;
