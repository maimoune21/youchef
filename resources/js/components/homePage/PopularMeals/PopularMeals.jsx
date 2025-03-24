import React from "react";
import PopularCard from "./PopularCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { LeftArrowIcon, RightArrowIcon } from "../../../../../public/icons/Icons";

const PopularMeals = ({ popularMeals }) => {
    return (
        <div
            id="PopularMeals"
            className="text-center bg-soft pb-40 pt-5 flex flex-col w-full"
        >
            <h2 className="text-green pt-3.5 pb-2 sm:text-[54px] max-md:text-4xl max-sm:text-3xl tn:text-4xl font-bold tracking-wide cursor-pointer">
                Popular Meals
            </h2>
            <div className="flex flex-col justify-center mt-4">
                <div className="max-sm:w-[100%] w-[95%] md:w-[85%] lg:w-[80%] xl:w-[80%] mx-auto rounded-xl overflow-hidden">
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
                        className="w-full"
                    >
                        <CarouselContent className="m-0 w-full">
                            {popularMeals.map((meal, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full bg-transparent px-3"
                                >
                                    <PopularCard meal={meal} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="max-md:hidden cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 hover:border-none hover:bg-transparent border-none text-green-600 bg-transparent rounded-sm w-7 py-6"
                            icon={<LeftArrowIcon style='size-10!'/>}
                        />
                        <CarouselNext
                            className="max-md:hidden cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 hover:border-none hover:bg-transparent border-none text-green-600 bg-transparent rounded-sm w-7 py-6"
                            icon={<RightArrowIcon style='size-10!'/>}
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default PopularMeals;
