import React, { useEffect, useState } from "react";
import Profile from "/public/images/Profile.png";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { SignalIcon, HeartIcon, TimeIcon, DotsIcon } from "/public/icons/Icons";
import { Link } from "@inertiajs/react";

const PopularCard = ({ meal }) => {
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
            <div className="w-full bg-soft relative custom-shadow rounded-xl overflow-hidden my-2 max-h-[80vh] md:max-h-[80vh]">
                <img src={BlankMeal} alt={meal.image} className=" w-full" />
                <div className="bg-white rounded-full p-1 absolute top-3 right-3">
                    <HeartIcon className="w-6 h-6" />
                </div>
                <div className="backdrop-brightness-50 absolute rounded-b-xl bottom-0 w-full">
                    <div className="absolute -top-10 text-sm left-3 bg-30 flexy rounded-full p-1 pr-2 gap-1">
                        <TimeIcon className="w-6 h-6" />
                        {formatDuration(meal.duration)}
                    </div>
                    <div
                        className={`absolute -top-10 text-sm right-3 bg-30 flexy rounded-full py-1 px-1 pr-1.5 pt-0.5 ${
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

                    <div className="w-full h-full p-1 px-2 md:gap-5 md:p-4 text-white pb-0 max-md:pb-4 flex flex-col justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                        <div className="flex flex-col md:gap-2">
                            <div className="flexy justify-between!">
                                <h3 className="font-bold text-xl md:text-4xl truncate">
                                    {meal.title}
                                </h3>
                                <div>
                                    <DotsIcon size="size-8" />
                                </div>
                            </div>
                            <div className="text-sm flexy justify-start! gap-1 md:text-base">
                                {meal.views} views
                                <div className="h-1.5 w-1.5 rounded-full bg-white m-0.5"></div>
                                {calculateDaysDifference()} days ago
                            </div>
                        </div>
                        <div className="flexy justify-start! gap-2">
                            <img
                                src={
                                    meal.userImage
                                        ? `/uploads/users/${meal.userImage}`
                                        : Profile
                                }
                                alt="profile"
                                className="rounded-full w-8 object-cover md:w-12"
                            />
                            <h6 className="md:text-2xl">
                                {meal
                                    ? `${meal.userFName} ${meal.userLName}`
                                    : "Unknown User"}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PopularCard;
