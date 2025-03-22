import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Wave from "@/../../public/images/Wave.svg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import All from "@/../../public/images/categories/all.png";
import Salad from "@/../../public/images/categories/salad.png";
import Cake from "@/../../public/images/categories/cake.png";
import Soup from "@/../../public/images/categories/soup.png";
import Drinks from "@/../../public/images/categories/drinks.png";
import Pasta from "@/../../public/images/categories/pasta.png";
import Snaks from "@/../../public/images/categories/snaks.png";
import Desserts from "@/../../public/images/categories/desserts.png";
import { Link } from "@inertiajs/react";

export default function SectionCategories() {
    const Categories = [
        { label: "All", img: All },
        { label: "Salad", img: Salad },
        { label: "Cake", img: Cake },
        { label: "Soup", img: Soup },
        { label: "Drinks", img: Drinks },
        { label: "Pasta", img: Pasta },
        { label: "Snaks", img: Snaks },
        { label: "Desserts", img: Desserts },
    ];

    return (
        <div className="flex flex-col w-[100vw] lg:w-full">
            <img src={Wave} alt="" className="" />
            <div className="text-center w-full bg-soft pb-25 pt-5">
                <h2 className="text-green pt-3.5 pb-2 sm:text-5xl max-md:text-4xl max-sm:text-3xl tn:text-4xl font-bold tracking-wide cursor-pointer">
                    Meals Categories
                </h2>
                <p className="sm:w-[80%] md:w-[70%] lg:w-[60%] w-[90%] max-sm:text-sm text-base m-auto">
                    Explore a variety of recipe categories, from delicious desserts to savory main courses, healthy meals, and quick snacks. Find the perfect dish for any occasion!
                </p>
                <div className="flexy mt-5 py-10 pl-5 md:pl-0  w-full bg-[#abd5c76e]">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full md:w-[80%]"
                    >
                        <CarouselContent>
                            {Categories.map((cat, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/3 sm:basis-1/4 md:basis-1/4 lg:basis-1/6 pl-0!"
                                >
                                    <Link href="/youchef-ui" className="p-1 gap-2 flexy flex-col group hover:text-green">
                                      <div className="object-cover w-25 rounded-full aspect-square overflow-hidden">
                                        <img
                                            src={cat.img}
                                            alt={cat.label}
                                            className="h-full group-hover:scale-110 transition duration-300"
                                        />
                                      </div>
                                        
                                        <p className="font-bold text-xl group-hover:text-green-600 transition duration-300">{cat.label}</p>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="max-md:hidden cursor-pointer bg-30 hover:bg-green-600!" />
                        <CarouselNext className="max-md:hidden cursor-pointer bg-30 hover:bg-green-600!" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}