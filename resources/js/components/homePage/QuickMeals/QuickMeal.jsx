import React from "react";
import QuickCard from "./QuickCard";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@inertiajs/react";

const QuickMeal = ({ categorie, meals, thisUser, favoriteMeals }) => {
    return (
        <div className="w-[90%] lg:w-[90%] xl:w-[85%] mx-auto rounded-xl flex flex-col py-5 pb-8 gap-4 bg-30 custom-shadow">
            <div className="px-9 flexy justify-between!">
                {categorie ? (
                    <h4 className="text-green font-bold text-3xl">
                        {categorie.name}
                    </h4>
                ) : (
                    <h4 className="text-green font-bold text-3xl">All</h4>
                )}
                <Link
                    href={`/meals?category=${categorie ? categorie.name : ""}`}
                >
                    <h4 className="flexy gap-1 font-bold">
                        <div class="flex items-center justify-center">
                            <div class="relative group">
                                <button class="relative inline-block p-px font-semibold leading-6 text-white bg-10 shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                    <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                                    <span class="relative z-10 block px-2 py-1 rounded-xl bg-10">
                                        <div class="relative z-10 flex items-center space-x-1">
                                            <span class="text-sm transition-all duration-500 group-hover:translate-x-1">
                                                See All
                                            </span>
                                            <svg
                                                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    clip-rule="evenodd"
                                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                    fill-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </h4>
                </Link>
            </div>
            <div className="w-full flexy">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="w-full px-15 max-sm:px-6 max-tn:px-2!"
                >
                    <CarouselContent>
                        {meals
                            .filter(
                                (meal) =>
                                    !categorie ||
                                    meal.idCategory == categorie.idCategory
                            )
                            .map((card, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                                >
                                    <QuickCard
                                        meal={card}
                                        thisUser={thisUser}
                                        favoriteMeals={favoriteMeals}
                                    />
                                </CarouselItem>
                            ))
                            .slice(0, 5)}
                    </CarouselContent>
                    <CarouselPrevious className="max-md:hidden cursor-pointer bg-10 absolute top-1/2 left-2 -translate-y-1/2" />
                    <CarouselNext className="max-md:hidden cursor-pointer bg-10 absolute top-1/2 right-2 -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    );
};

export default QuickMeal;
