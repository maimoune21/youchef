import { Link } from "@inertiajs/react";
import worldicon from "/public/images/worldicon.svg";
import React from "react";

const WorldMeals = ({ Kitchen }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-center bg-soft pb-10 sm:pb-20 md:pb-30">
        <img src={worldicon} alt="Logo" className="w-16 sm:w-20 md:w-24 mx-auto transition-transform duration-300 " />
        <h2 className="text-green pt-3.5 pb-2 sm:text-6xl max-md:text-5xl max-sm:text-4xl tn:text-5xl font-bold tracking-wide cursor-pointer">World Meals</h2>
        <div className="flex flex-col justify-center gap-3 mt-10">
          <div className=" flexy gap-4 sm:gap-6 md:gap-8">
            <Link href={`/meals?kitchen=${Kitchen[0].name}`} className="WorldMealBtn">{Kitchen[0].name}</Link>
            <Link href={`/meals?kitchen=${Kitchen[1].name}`} className="WorldMealBtn">{Kitchen[1].name}</Link>
          </div>
          <div className="flexy gap-2 sm:gap-3 md:gap-5">
            <Link href={`/meals?kitchen=${Kitchen[2].name}`} className="WorldMealBtn">{Kitchen[2].name}</Link>
            <Link href={`/meals?kitchen=${Kitchen[3].name}`} className="WorldMealBtn px-5! sm:px-9! md:px-14!">{Kitchen[3].name}</Link>
            <Link href={`/meals?kitchen=${Kitchen[4].name}`} className="WorldMealBtn">{Kitchen[4].name}</Link>
          </div>
          <div className="flexy gap-4 sm:gap-6 md:gap-8">
            <Link href={`/meals?kitchen=${Kitchen[5].name}`} className="WorldMealBtn">{Kitchen[5].name}</Link>
            <Link href={`/meals?kitchen=${Kitchen[6].name}`} className="WorldMealBtn">{Kitchen[6].name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMeals;
