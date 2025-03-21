import React from "react";
import ContactUs from "@/components/homePage/ContactUs";
import Header from "@/components/homePage/Header";
import WorldMeals from "@/components/homePage/WorldMeals";
import Together from "@/components/homePage/Together";
import SectionCategories from "@/components/homePage/Categories";
import QuickMeals from "@/components/homePage/QuickMeals/QuickMeals";
import PopularMeals from "@/components/homePage/PopularMeals/PopularMeals";

const Home = () => {
  return (
    <>
      <Header />
      <SectionCategories />
      <WorldMeals />
      <PopularMeals />
      <QuickMeals />
      <Together />
      <ContactUs />
    </>
  );
};

export default Home;
