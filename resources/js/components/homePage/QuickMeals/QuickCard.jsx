import { SignalIcon, HeartIcon, TimeIcon, DotsIcon } from "/public/icons/Icons";
import React, { useEffect, useState } from "react";
import Profile from "/public/images/Profile.png";

const QuickCard = ({ data }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    data.duration > 5
      ? setStatus("hard")
      : data.duration > 3
      ? setStatus("medium")
      : setStatus("easy");
  }, [data.duration]);

  const calculateDaysDifference = () => {
    const today = new Date(data.date);
    const target = new Date();
    const differenceInMs = target - today;
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return differenceInDays;
  };

  return (
    <div className="custom-shadow bg-60 rounded-3xl grid grid-col-[65%_auto] transition duration-900 md:pb-4 m-2 group overflow-hidden">
      <div className="relative w-full">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full rounded-t-3xl object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute bottom-1 text-xs left-3 bg-30 flexy rounded-full p-1 gap-1">
          <TimeIcon />
          {data.duration} min
        </div>
        <div
          className={`absolute bottom-1 text-xs right-3 bg-30 flexy rounded-full py-1 px-1 pt-0.5 ${
            status === "hard"
              ? "text-red-500"
              : status === "medium"
              ? "text-orange-500"
              : "text-green-500"
          }`}
        >
          <div className="flexy px-1">
            <SignalIcon size="size-5.5 pb-0.5" />
            <p className="pt-0.5">{status}</p>
          </div>
        </div>
        <div className="bg-white rounded-full p-1 absolute top-3 right-3">
          <HeartIcon size="size-5" />
        </div>
      </div>
      <div className="w-full p-3 pb-0 max-md:pb-4 flex flex-col whitespace-nowrap overflow-hidden text-ellipsis">
        <div className="flexy justify-between!">
          <h3 className="font-bold text-2xl">{data.title}</h3>
          <DotsIcon className="w-6 h-6" />
        </div>
          <div className="flex flex-col md:gap-2">
          <div className="text-sm flexy justify-start! gap-1">
              {data.views} views
              <div className="h-1.5 w-1.5 rounded-full bg-gray-700 m-0.5"></div>
              {calculateDaysDifference()} days ago
            </div>
            <div className="flexy justify-start! gap-2">
              <img
                src={Profile}
                alt=""
                className="rounded-full w-8 object-cover"
              />
              <h6 className="md:text-lg">{data.user}</h6>
            </div>
            
          </div>
      
          <div className="flexy md:mt-4">
            <button className="button px-6! py-1! text-sm lg:text-lg! rounded-full!">
              Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickCard;
