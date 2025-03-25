import React, { useEffect, useState } from "react";
import Categorie from "@/components/ui/Categories";
import Countries from "@/components/ui/Countries";
import { SearchIcon } from "/public/icons/Icons";
import MealCard from "@/components/ui/MealCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterIcon } from "/public/icons/Icons";

const Favorites = ({ favoriteMeals, categories, Kitchen, thisUser }) => {
    console.log(favoriteMeals);
    const [meals, setMeals] = useState([]);
    const [categorie, setCategorie] = useState("");
    const [countries, setCountries] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        setMeals(
            favoriteMeals.filter((meal) => {
                const isCategoryMatch = categorie
                    ? meal.idCategory == categorie
                    : true;
                const isCountryMatch = countries
                    ? meal.idKitchen == countries
                    : true;
                const isSearchMatch = search
                    ? meal.title.toLowerCase().includes(search.toLowerCase())
                    : true;
                return isCategoryMatch && isCountryMatch && isSearchMatch;
            })
        );
    }, [categorie, countries, search, favoriteMeals]);

    return (
        <section className="w-full flex flex-col gap-2 border-b-2">
            <div>
                <div className="flexy bg-banner w-full">
                    <h1 className="text-3xl p-5 text-green font-bold">
                        Favorites
                    </h1>
                </div>
                <div className="">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-auto!"
                        defaultValue="item-0"
                    >
                        <AccordionItem value="item-1" className="bg-10">
                            <div className="w-20">
                                <AccordionTrigger className="bg-white rounded-br-lg mb-1.5 rounded-tr-none rounded-bl-none rounded-tl-none inline-flex! py-1.5! px-2 hover:no-underline cursor-pointer justify-start">
                                    <span
                                        className={`text-center font-bold flexy gap-2`}
                                    >
                                        <FilterIcon style="size-5.5" />
                                        <h1>Filter</h1>
                                    </span>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="p-0!">
                                <nav className="bg-10 flex flex-col py-5 px-8 gap-3">
                                    <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-[0.5fr_1fr_0.5fr] gap-5 sm:gap-10 md:gap-20 w-full">
                                        <select
                                            name="category"
                                            id="cat"
                                            className="py-2 pl-2 rounded-sm border-[0.3px] text-sm font-semibold bg-white cursor-pointer"
                                            onChange={(e) =>
                                                setCategorie(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                All Categories
                                            </option>
                                            <Categorie
                                                categories={categories}
                                            />
                                        </select>
                                        <div className="relative flexy max-sm:order-3">
                                            <input
                                                type="text"
                                                className="px-8 py-2 pl-11 w-[100%] rounded-sm bg-white font-semibold"
                                                placeholder="Search in favorite meals..."
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                            />
                                            <div className="absolute left-2 bg-10 rounded-full p-1.5">
                                                <SearchIcon size="size-5 text-white" />
                                            </div>
                                        </div>
                                        <select
                                            name="country"
                                            id="cnt"
                                            className="py-2 pl-2 rounded-sm border-[0.3px] text-sm font-semibold bg-white cursor-pointer"
                                            onChange={(e) =>
                                                setCountries(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                All Kitchens
                                            </option>
                                            <Countries countries={Kitchen} />
                                        </select>
                                    </div>
                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            {meals.length == 0 ? (
                <h1 className="text-3xl text-center my-5">
                    No Favorites Found
                </h1>
            ) : (
                <div className="w-[90%] py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                    {meals.map((card, i) => (
                        <MealCard
                            key={i}
                            meal={card}
                            thisUser={thisUser}
                            favoriteMeals={favoriteMeals}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
