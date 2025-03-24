import { SignalIcon, HeartIcon, TimeIcon, DotsIcon } from "/public/icons/Icons";
import React, { useEffect, useState } from "react";
import Profile from "/public/images/Profile.png";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { Link } from "@inertiajs/react";

const QuickCard = ({ meal }) => {
    const [status, setStatus] = useState("");

    useEffect(() => {
        const [hours, minutes, seconds] = meal.duration.split(":").map(Number);
        const totalMinutes = hours * 60 + minutes + seconds / 60;

        if (totalMinutes > 20) {
            setStatus("hard");
        } else if (totalMinutes >= 10 && totalMinutes <= 20) {
            setStatus("medium");
        } else {
            setStatus("easy");
        }
    }, [meal.duration]);

    const calculateDaysDifference = () => {
        const today = new Date(meal.created_at);
        const target = new Date();
        const differenceInMs = target - today;
        const differenceInDays = Math.floor(
            differenceInMs / (1000 * 60 * 60 * 24)
        );
        return differenceInDays;
    };

    const formatDuration = (duration) => {
        const [hours, minutes] = duration.split(":").map(Number);
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        if (hours > 0) {
            return `${hours}h${
                paddedMinutes !== "00" ? `:${paddedMinutes}` : ""
            }`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return `0m`;
        }
    };

    return (
        <Link href={`/mealDetails/${meal.idMeal}`}>
            <div className="custom-shadow bg-60 rounded-3xl grid grid-col-[65%_auto] transition duration-900 md:pb-4 m-2 group overflow-hidden">
                <div className="relative w-full">
                    <img
                        src={BlankMeal}
                        alt={meal.title}
                        className="w-full h-full rounded-t-3xl object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute bottom-1 text-xs left-3 bg-30 flexy rounded-full p-1 gap-1">
                        <TimeIcon />
                        {formatDuration(meal.duration)}
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
                        <h3 className="font-bold text-2xl">{meal.title}</h3>
                        <DotsIcon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col md:gap-2">
                        <div className="text-sm flexy justify-start! gap-1">
                            {meal.views} views
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-700 m-0.5"></div>
                            {calculateDaysDifference()} days ago
                        </div>
                        <div className="flexy justify-start! gap-2">
                            <img
                                src={Profile}
                                alt=""
                                className="rounded-full w-8 object-cover"
                            />
                            <h6 className="md:text-lg">{meal.user}</h6>
                        </div>
                    </div>

                    <div className="flexy md:mt-4">
                        <Link href={`/mealDetails/${meal.idMeal}`}>
                            <button className="button px-6! py-1! text-sm lg:text-lg! rounded-full!">
                                Read
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default QuickCard;
