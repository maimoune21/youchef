import { SignalIcon, HeartIcon, TimeIcon, DotsIcon } from "/public/icons/Icons";
import React, { useEffect, useState } from "react";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { Link, router } from "@inertiajs/react";

const QuickCard = ({ meal, thisUser, favoriteMeals }) => {
    const [status, setStatus] = useState("");
    const [isFavorited, setIsFavorited] = useState(false);

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

    useEffect(() => {
        const mealExists = favoriteMeals && favoriteMeals.find(fav => fav.idMeal === meal.idMeal);
        setIsFavorited(!!mealExists); // Convert to boolean
    }, [favoriteMeals, meal.idMeal]);

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

    const handleFavoriteClick = () => {
        console.log(thisUser.idUser)
        router.post("/favorite", { idMeal: meal.idMeal, idUser: thisUser.idUser }, {
            onSuccess: () => {
                setIsFavorited(prev => !prev);
            },
            onError: (errors) => {
                console.error("Error toggling favorite:", errors);
            }
        });
    };

    return (
        <div className="custom-shadow bg-60 rounded-3xl grid grid-col-[65%_auto] transition duration-900 md:pb-4 m-2 overflow-hidden select-none">
            <div className="relative w-full">
                <Link href={`/mealDetails/${meal.idMeal}`}>
                    <img
                        src={BlankMeal}
                        alt={meal.title}
                        className="w-full h-full rounded-t-3xl object-cover group-hover:scale-105 transition duration-300"
                    />
                </Link>
                <div className="absolute bottom-1 text-xs left-3 bg-30 flexy rounded-full p-1 gap-1">
                    <TimeIcon />
                    {formatDuration(meal.duration)}
                </div>
                <div
                    className={`absolute bottom-1 text-xs right-3 bg-30 flexy rounded-full py-1 px-1 pt-0.5 ${status === "hard"
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
                <button
                    className="bg-30 rounded-full p-1 absolute top-3 right-3 *:transition-all *:duration-200 hover:*:fill-[var(--wave-1)]"
                    onClick={handleFavoriteClick}
                >
                    <HeartIcon className={`transition-all duration-200 ${isFavorited ? "fill-green-500" : "fill-none stroke-black stroke-2"}`} />
                </button>
            </div>
            <div className="w-full p-3 pb-0 max-md:pb-4 flex flex-col whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flexy justify-between!">
                    <h3 className="font-bold text-2xl truncate">
                        <Link
                            href={`/mealDetails/${meal.idMeal}`}
                            className="hover:underline"
                        >
                            {meal.title}
                        </Link>
                    </h3>
                    <div className="cursor-pointer">
                        <DotsIcon size="size-6" />
                    </div>
                </div>
                <div className="flex flex-col md:gap-2">
                    <div className="text-sm flexy justify-start! gap-1">
                        {meal.views} views
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-700 m-0.5"></div>
                        {calculateDaysDifference()}
                    </div>
                    <div className="flexy justify-start! gap-2 hover:scale-98">
                        <Link
                            href={`/publicProfile/${meal.idUser}`}
                            className="rounded-lg py-2 flex items-center gap-2 group/user"
                        >
                            {meal.userImage
                                ? <img
                                    src={`/uploads/users/${meal.userImage}`}
                                    alt=""
                                    className="rounded-full w-8 object-cover"
                                />
                                : <span className="bg-soft text-black text-base font-bold w-8 h-full aspect-square rounded-full flexy">{meal.userLName.charAt(0)}</span>
                            }
                            <h6 className="md:text-lg group-hover/user:text-gray-400 group-hover/user:underline underline-offset-3">
                                {meal.userFName} {meal.userLName}
                            </h6>
                        </Link>
                    </div>
                </div>
                <div className="flexy md:mt-2">
                    <Link href={`/mealDetails/${meal.idMeal}`}>
                        <button className="button px-6! py-1! text-sm lg:text-lg! rounded-full! hover:scale-98">
                            Read
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuickCard;
