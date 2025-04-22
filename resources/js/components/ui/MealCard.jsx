import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useEffect, useState } from "react";
import { SignalIcon, TimeIcon } from "@/../../public/icons/Icons";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { Link } from "@inertiajs/react";
import FavoriteButton from "./favoriteButton";
import { TrashIcon } from "@/../../public/icons/Icons";
import { UpdateMeal } from "@/components/models/UpdateMeal";
import { Button } from "@/components/ui/button";
import { CircleChevronRight } from "lucide-react";

const MealCard = ({ meal, thisUser, favoriteMeals, mypost = false, handleDelete , dataCategories, dataKitchens}) => {
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
            return `${differenceInDays} day${
                differenceInDays !== 1 ? "s" : ""
            } ago`;
        }
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
        <div className="custom-shadow bg-60 rounded-xl grid grid-rows-[1fr_auto] h-full transition duration-900 group overflow-hidden select-none">
            <div className="relative w-full">
                <Link href={`/mealDetails/${meal.idMeal}`}>
                <img
                  src={meal.meal_img ? `/storage/meals/${meal.meal_img}` : BlankMeal}
                  alt={meal.title}
                  className="w-full h-full rounded-t-xl aspect-[4/2.65] object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.target.src = BlankMeal;
                  }}
                />
                </Link>
                <div className="absolute bottom-2 text-sm left-3 bg-30 max-sm:text-xs flexy rounded-full p-1 pr-2 font-bold gap-1">
                    <TimeIcon className="w-6 h-6" />
                    {formatDuration(meal.duration)}
                </div>
                <div
                    className={`absolute bottom-2 text-sm right-3 bg-30 max-sm:text-xs flexy rounded-full py-1 px-1 font-bold pt-0.5 ${
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
            </div>
            <div className="w-full p-3 pt-1 flex flex-col gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex flex-col">
                    <div className="flexy justify-between!">
                        <h3 className="font-bold text-xl max-sm:text-xl truncate hover:underline">
                            <Link href={`/mealDetails/${meal.idMeal}`}>
                                {meal.title}
                            </Link>
                        </h3>
                        <div className="flexy bg-gray-100 p-1 rounded-full mr-0.5">
                            {!mypost && (
                                <FavoriteButton
                                    meal={meal}
                                    thisUser={thisUser}
                                    buttonClass="p-0!"
                                    iconClass="size-6!"
                                />
                            )}
                        </div>
                    </div>
                    <div className="text-sm max-sm:text-xs flexy justify-start! gap-1">
                        {meal.views} views
                        <div className="h-1.5 w-1.5 text-sm max-sm:text-xs rounded-full bg-gray-700 m-0.5"></div>
                        {calculateDaysDifference()}
                    </div>
                </div>
                {!mypost && (
                    <div className="grid grid-cols-[2fr_1fr]">
                        <Link
                            href={`/publicProfile/${meal.idUser}`}
                            className="py-0 hover:scale-98 group/user"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flexy justify-start! gap-2">
                                    {meal.userImage ? (
                                        <img
                                            src={`/uploads/users/${meal.userImage}`}
                                            alt=""
                                            className="rounded-full w-8 object-cover"
                                        />
                                    ) : (
                                        <span className="bg-soft text-black text-base font-bold w-8 h-full aspect-square rounded-full flexy">
                                            {meal.userFName.charAt(0)}
                                        </span>
                                    )}
                                    <h6 className="max-sm:text-xs max-lg:text-sm group-hover/user:text-green-600 group-hover/user:underline underline-offset-2">
                                        {meal.userLName} {meal.userFName}
                                    </h6>
                                </div>
                            </div>
                        </Link>
                        <div className="flex items-center justify-end">
                            <span className="rounded-full pr- hover:scale-96">
                                <Link href={`/mealDetails/${meal.idMeal}`}>
                                    <CircleChevronRight className="size-8 text-green cursor-pointer" />
                                </Link>
                            </span>
                        </div>
                    </div>
                )}
                {mypost ? (
                    <div className="mx-auto w-full px-1 flex flex-wrap justify-center gap-2 m-auto">
                        <UpdateMeal
                            buttonStyles="rounded-lg! flexy"
                            meal={meal}
                            dataCategories={dataCategories} 
                            dataKitchens={dataKitchens}
                        />
                        <Drawer>
                            <DrawerTrigger>
                                <Button
                                    className="text-lg font-bold md:p-5 bg-red-500 hover:bg-red-600 transition duration-200 cursor-pointer"
                                >
                                    Delete
                                    <TrashIcon size="size-5 md:size-6" />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>
                                        Are you absolutely sure?
                                    </DrawerTitle>
                                    <DrawerDescription className='text-black'>
                                        {`This action cannot be undone. This will permanently delete your Meal ${meal.title}`}
                                    </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter className='flex-row'>
                                    <DrawerClose className='w-fit!!'>
                                        <Button variant="outline" className='cursor-pointer'>
                                            Cancel
                                        </Button>
                                    </DrawerClose>
                                    <Button onClick={() => handleDelete(meal.idMeal)} className='bg-red-700 w-fit! cursor-pointer'>Delete</Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MealCard;
