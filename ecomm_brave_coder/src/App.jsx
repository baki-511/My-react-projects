import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import FeatureSectionBreakfast from "./Components/FeatureSectionBreakfast";
import BannerSection from "./Components/BannerSection";
import BlogSection from "./Components/BlogSection";
import NewsLetter from "./Components/NewsLetter";
import FeatureSectionFruits from "./Components/FeatureSectionFruits";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
      <BannerSection/>
      <BlogSection/>
      <NewsLetter/>
      <FeatureSection/>
      <Footer/>
    </main>
  );
};

export default App;
