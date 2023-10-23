"use client";
import React from "react";
import MainSection from "@/sections/MainSection/MainSection";
import BestCategoriesSection from "@/sections/CategoriesSection/BestCategoriesSection/BestCategoriesSection";
import AboutSection from "@/sections/AboutSection/AboutSection";

const Home = () => {
  return (
    <>
      <MainSection/>
      <BestCategoriesSection/>
      <AboutSection/>
    </>
  );
};

export default Home;
