import React from "react";
import HeroSection from "./components/HeroSection";
import CategoryProducts from "./components/CategoryProducts";

const Home = () => {
  const data = {
    name: "Pyramid Electronics",
  };

  return (
  <>
  <HeroSection myData={data} />
  <CategoryProducts/>
  </>
  );
};

export default Home;