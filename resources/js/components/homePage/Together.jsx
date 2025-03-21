import React from "react";

import "@/../css/together.css";

import BrowseRecipesButton from "../ui/BrowseRecipesButton";

import Wave from "@/../../public/images/Wave.svg";
import handShake from "@/../../public/images/HandShake.svg";
import ExploreRecipes from "@/../../public/images/Explore-Recipes.jpeg";
import BecomeChef from "@/../../public/images/Become-Chef.jpeg";
import { Link } from "@inertiajs/react";

const Together = () => {
  return (
    <div className="flex flex-col w-full mb-26">
      <div className="text-center bg-soft pt-30 pb-10 sm:pb-10 md:pb-12">
        <img
          src={handShake}
          alt="Logo"
          className="w-16 aspect-square rounded-full bg-10 sm:w-16 mx-auto transition-transform duration-300"
        />
        <h2 className="text-green pt-3.5 pb-2 sm:text-5xl max-md:text-4xl max-sm:text-3xl tn:text-4xl font-bold tracking-wide cursor-pointer">
          Let’s do it together
        </h2>
        <div className="flex flex-col justify-center gap-3 mt-15">
          <div className=" flexy gap-8 sm:gap-12 md:gap-30 max-md:flex-col">
            <div className="flexy flex-col gap-5 max-md:mb-10">
              <img
                src={ExploreRecipes}
                alt="Explore Recipes"
                className="togetherRadiusAnimation aspect-square w-[80%] md:w-70 rounded-full"
              />
              <Link href="/meals">
                <BrowseRecipesButton label="Explore Recipes" />
              </Link>
            </div>

            <div className="flexy flex-col gap-5 max-md:mb-10">
              <img
                src={BecomeChef}
                alt="Explore Recipes"
                className="togetherRadiusAnimation2 aspect-square w-[80%] md:w-70 rounded-full"
              />
              <Link href='/postMeal'>
                <BrowseRecipesButton label="Become a Chef" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src={Wave} alt="" className="rotate-180" />
    </div>
  );
};

export default Together;
