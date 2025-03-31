import React from "react";
import ContactUs from "@/components/homePage/ContactUs";
import Header from "@/components/homePage/Header";
import WorldMeals from "@/components/homePage/WorldMeals";
import Together from "@/components/homePage/Together";
import SectionCategories from "@/components/homePage/Categories";
import QuickMeals from "@/components/homePage/QuickMeals/QuickMeals";
import PopularMeals from "@/components/homePage/PopularMeals/PopularMeals";

const Home = ({ meals }) => {
  
  return (
    <>
      <Header />
      <SectionCategories/>
      <PopularMeals popularMeals={meals.sort((a, b) => b.views - a.views).slice(0, 6)} />
      <WorldMeals />
      <QuickMeals meals={meals.sort((a, b) => b.views - a.views)}/>
      <Together />
      <ContactUs />
    </>
  );
};

export default Home;