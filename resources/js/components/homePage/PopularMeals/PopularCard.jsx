import React, { useEffect, useState } from "react";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { SignalIcon, TimeIcon } from "/public/icons/Icons";
import { Link, usePage } from "@inertiajs/react";
import FavoriteButton from "../../ui/favoriteButton";

const PopularCard = ({ meal }) => {
    const { thisUser } = usePage().props
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

        if (differenceInDays >= 360) {
            const years = Math.floor(differenceInDays / 360);
            return `${years} year${years > 1 ? "s" : ""} ago`;
        } else if (differenceInDays >= 30) {
            const months = Math.floor(differenceInDays / 30);
            return `${months} month${months > 1 ? "s" : ""} ago`;
        } else {
            return `${differenceInDays} day${differenceInDays !== 1 ? "s" : ""
                } ago`;
        }
    };

    const formatDuration = (duration) => {
        const [hours, minutes] = duration.split(":").map(Number);
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        if (hours > 0) {
            return `${hours}h${paddedMinutes !== "00" ? `:${paddedMinutes}` : ""
                }`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return `0m`;
        }
    };

    return (
        <div className="w-full bg-soft relative custom-shadow rounded-xl overflow-hidden my-2 max-h-[60vh] md:max-h-[75vh]">
            <img
                src={meal.meal_img ? `/storage/meals/${meal.meal_img}` : BlankMeal}
                alt={meal.image}
                className=" w-full max-sm:h-64 aspect-[4/2]"
                onError={(e) => {
                    e.target.src = BlankMeal;
                }}
            />
            <div className="backdrop-brightness-50 absolute rounded-b-xl bottom-0 w-full">
                <div className="absolute -top-10 text-md max-sm:text-sm! max-sm:-top-8 left-3 bg-30 flexy rounded-full p-1 pr-2 gap-1">
                    <TimeIcon style="size-6! max-sm:size-5!" />
                    {formatDuration(meal.duration)}
                </div>
                <div
                    className={`absolute -top-11 text-md max-sm:text-sm! max-sm:-top-8 right-3 bg-30 flexy rounded-full py-1 px-1 pr-1.5 pt-0.5 ${status === "hard"
                            ? "text-red-500"
                            : status === "medium"
                                ? "text-orange-500"
                                : "text-green-500"
                        }`}
                >
                    <div className="flexy px-1">
                        <SignalIcon size="size-7.5 pb-1! max-sm:pb-0.5! max-sm:size-5.5!" />
                        <p className="text-lg max-sm:text-sm">{status}</p>
                    </div>
                </div>

                <div className="w-full h-full p-1 px-2 md:gap-5 md:p-4 text-white pb-0 max-md:pb-4 flex flex-col justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="flex flex-col md:gap-2">
                        <div className="flexy justify-between!">
                            <h3 className="font-bold text-xl md:text-4xl truncate">
                                <Link
                                    href={`/mealDetails/${meal.idMeal}`}
                                    className="hover:underline"
                                >
                                    {meal.title}
                                </Link>
                            </h3>
                            {thisUser && (
                                <div className="bg-white p-2 mr-3 flexy rounded-full">
                                    <FavoriteButton
                                        meal={meal}
                                        thisUser={thisUser}
                                        buttonClass="p-0! text-black! fill-black!"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-sm flexy justify-start! gap-1 md:text-base">
                            {meal.views} views
                            <div className="h-1.5 w-1.5 rounded-full bg-white m-0.5"></div>
                            {calculateDaysDifference()}
                        </div>
                    </div>
                    <div className="flexy justify-between! gap-2">
                        <Link
                            href={`/publicProfile/${meal.idUser}`}
                            className="rounded-lg flex items-center gap-2 hover:scale-97 group"
                        >
                            {meal.userImage ? (
                                <img
                                    src={`/storage/users/${meal.userImage}`}
                                    alt="profile"
                                    className="rounded-full w-8 aspect-square object-cover md:w-12"
                                />
                            ) : (
                                <span className="bg-soft text-black text-base md:text-xl font-bold w-8 md:w-12 h-full aspect-square rounded-full flexy">
                                    {meal.userFName.charAt(0)}
                                </span>
                            )}
                            <h6 className="md:text-2xl group-hover:text-[var(--bg-10)] group-hover:underline underline-offset-3">
                                {meal
                                    ? `${meal.userFName} ${meal.userLName}`
                                    : "Unknown User"}
                            </h6>
                        </Link>
                        <Link
                            className="button py-2.5! px-11! mr-3! max-sm:px-2! hover:scale-98"
                            href={`/mealDetails/${meal.idMeal}`}
                        >
                            <b className="text-base max-sm:text-sm">See More</b>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
