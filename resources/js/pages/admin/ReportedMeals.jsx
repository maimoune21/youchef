import { ManageIcon, FilterIcon } from "@/../../public/icons/Icons";
import React from "react";
import TextInputGroup from "@/components/ui/TextInputGroup";
import Tagine from "@/../../public/images/Tajine.jpg";
import { TrashIcon } from "@/../../public/icons/Icons";
import { MealRepports } from "@/components/models/MealReports";
import { RepportIcon } from "@/../../public/icons/Icons";

export const ReportedMeals = () => {
  const reportedMeals = [
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,},
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,},
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,},
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,},
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,},
    {id: 1, img: Tagine, title: "Traditional Moroccan Chicken Tagine", chef: "Fatima El Fassi", views: 215, day: "3", description: "Description Ipsum is simply dummy text of the printing and typesetting industry.", repports: 100,}
  ];
  return (
    <div className="mt-4 max-md:mb-20 overflow-hidden">
      <div className="TopManageDashboard max-sm:px-0!">
        <span>
          <RepportIcon style="size-7! text-white fill-gray-400" />
        </span>
        <h1 className="text-lg text-gray-500">Reported meals</h1>
      </div>
      <div className="md:m-3 rounded-sm">
        <div className="flex relative">
          <span className="bg-white! flexy absolute left-0">
            <FilterIcon style="size-7.5 text-gray-400" />
          </span>
          <TextInputGroup
            placeholder="Filter"
            className="bg-white! border-0! rounded-none! py-1 pl-10! pr-20! border-b-1! border-gray-400! focus:ring-0! focus:border-b-1!"
          />
          <button className="button absolute right-2 top-1 rounded-full! py-1.5! px-7!">
            Filter
          </button>
        </div>
        <div className="flex flex-col overflow-auto h-auto max-h-[70vh] scrollbar pb-10 max-md:pb-0!">
          {reportedMeals.map((meal) => (
            <div key={meal.id}>
              <div className="border-b-1 border-gray-400 py-2.5 px-2">
                <div className="grid lg:grid-cols-[2fr_0.5fr]">
                  <div className="flexy sm:justify-start! flex-col sm:flex-row gap-4">
                    <div className="w-64 flexy">
                      <img
                        src={meal.img}
                        className="w-full rounded-2xl"
                        alt={meal.title}
                      />
                    </div>
                    <div className="flex flex-col gap-2 py-4">
                      <h1 className="font-bold text-xl">{meal.title}</h1>
                      <h3 className="font-bold text-base">{meal.chef}</h3>
                      <span className="text-sm">
                        {meal.views} views • {meal.day} ago
                      </span>
                      <p className="text-sm">{meal.description}</p>
                    </div>
                  </div>
                  <div className="flexy lg:flex-col gap-6">
                    <MealRepports />
                    <b className="text-red-600 cursor-pointer">
                      <TrashIcon size="size-8" />
                    </b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
