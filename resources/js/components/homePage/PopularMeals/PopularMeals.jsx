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
import Banner1 from "../../../../../public/images/banner-popular-1.png"
import Banner2 from "../../../../../public/images/banner-popular-2.png"
import { LeftArrowIcon, RightArrowIcon } from "../../../../../public/icons/Icons";

const PopularMeals = ({ popularMeals }) => {
    return (
        <div
            id="PopularMeals"
            className="text-center bg-soft pb-50 pt-5 flex flex-col w-full"
        >
            <h2 className="text-green pt-3.5 pb-2 sm:text-[54px] max-md:text-4xl max-sm:text-3xl tn:text-4xl font-bold tracking-wide cursor-pointer">
                Popular Meals
            </h2>
            <div className="relative flex flex-col justify-center mt-4">
                <img src={Banner1} className="w-72 z-10 transform rotate-[9deg] absolute -top-28 -right-20" alt="" />
                <img src={Banner2} className="w-72 z-10 transform rotate-[9deg] absolute -bottom-28 -left-20" alt="" />
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
                            className="max-md:hidden cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 hover:border-none hover:bg-transparent border-none text-white hover:text-green-600 bg-transparent rounded-sm w-10 py-6 [&_svg]:size-15!"
                            icon={<LeftArrowIcon/>}
                        />
                        <CarouselNext
                            className="max-md:hidden cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 hover:border-none hover:bg-transparent border-none text-white hover:text-green-600 bg-transparent rounded-sm w-10 py-6 [&_svg]:size-15!"
                            icon={<RightArrowIcon/>}
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default PopularMeals;
