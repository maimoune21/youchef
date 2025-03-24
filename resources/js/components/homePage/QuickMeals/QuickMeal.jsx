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

const QuickMeal = ({categorie, meals}) => {

  return (
    <div className="w-[90%] lg:w-[90%] xl:w-[85%] mx-auto rounded-xl flex flex-col py-5 pb-8 gap-4 bg-30 custom-shadow">
      <div className="px-9 flexy justify-between!">
        {categorie
          ?<h4 className="text-green font-bold text-3xl">{categorie.name}</h4>
          :<h4 className="text-green font-bold text-3xl">All</h4>
        }
        <Link href={`/meals?category=${categorie ? categorie.name : ""}`}>
          <h4 className="flexy gap-1 font-bold">
            See All
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path
                d="M1,5 L11,5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="black"
                strokeWidth={2}
              />
              <polyline points="8 1 12 5 8 9" />
            </svg>
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
            {
            meals
              .filter(meal => !categorie || meal.idCategory == categorie.idCategory)
              .map((card, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                >
                  <QuickCard meal={card} />
                </CarouselItem>
              ))
              .slice(0, 5)
            }
          </CarouselContent>
          <CarouselPrevious className="max-md:hidden cursor-pointer bg-10 absolute top-1/2 left-2 -translate-y-1/2" />
          <CarouselNext className="max-md:hidden cursor-pointer bg-10 absolute top-1/2 right-2 -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default QuickMeal;