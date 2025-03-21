import React, { useEffect, useState } from "react";
import { SignalIcon, HeartIcon, TimeIcon, DotsIcon, EyeIcon } from "@/../../public/icons/Icons";
import Profile from "@/../../public/images/Profile.png";

const MealCard = ({ meal }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    meal.duration > 5
      ? setStatus("hard")
      : meal.duration > 3
      ? setStatus("medium")
      : setStatus("easy");
  }, [meal.duration]); // Added dependency

  const calculateDaysDifference = () => {
    const today = new Date(meal.date);
    const target = new Date();
    const differenceInMs = target - today;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return differenceInDays;
  };

  return (
    <div className="custom-shadow bg-60 rounded-xl flex flex-col transition duration-900 group overflow-hidden">
      <div className="relative w-full">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-full rounded-t-xl object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute bottom-3 text-sm left-3 bg-30 max-sm:text-xs flexy rounded-full p-1 gap-1">
          <TimeIcon className="w-6 h-6" />
          {meal.duration} min
        </div>
        <div
          className={`absolute bottom-3 text-sm right-3 bg-30 max-sm:text-xs flexy rounded-full py-1 px-1 pt-0.5 ${
            status === "hard"
              ? "text-red-500"
              : status === "medium"
              ? "text-orange-500"
              : "text-green-500"
          }`}
        >
          <div className="flexy px-1">
            <SignalIcon size="size-5.5 pb-0.5" />
            <p>{status}</p>
          </div>
        </div>
        <div className="bg-white rounded-full p-1 absolute top-3 right-3">
          <HeartIcon className="w-6 h-6" /> {/* Added proper closing */}
        </div>
      </div>
      <div className="w-full p-3 flex flex-col gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
        <div className="flex flex-col">
          <div className="flexy justify-between!">
            <h3 className="font-bold text-2xl max-sm:text-xl">{meal.title}</h3>
            <DotsIcon className="w-6 h-6" />
          </div>
          <div className="text-sm max-sm:text-xs flexy justify-start! gap-1">
            {meal.views} views
            <div className="h-1.5 w-1.5 text-sm max-sm:text-xs rounded-full bg-gray-700 m-0.5"></div>
            {calculateDaysDifference()} days ago
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-2">
            <div className="flexy justify-start! gap-2">
              <img
                src={Profile}
                alt=""
                className="rounded-full w-8 object-cover"
              />
              <h6 className="max-sm:text-xs max-lg:text-sm"></h6>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="rounded-full border-1 p-1.5 border-[var(--bg-10)] bg-[var(--bg-10)]">
              <EyeIcon style="size-5.5 text-black cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
