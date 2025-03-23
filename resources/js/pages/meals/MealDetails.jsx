import React, { useState } from "react";
import Profile from "@/../../public/images/Profile.png";
import Meal from "@/../../public/images/BlankMeal.png";
import TextInputGroup from "@/components/ui/TextInputGroup";
import {
    DislikeIcon,
    DotsIcon,
    HeartIcon,
    LikeIcon,
} from "@/../../public/icons/Icons";
import { ReportMeal } from "../../components/models/ReportMeal";
import { usePage, router } from "@inertiajs/react";

const MealDetails = ({ meal, user, categoryName, kitchenName, comments }) => {
    // Meal Commets :
    const MealComments = comments;

    // Access the authenticated user data :
    const { auth } = usePage().props;
    const activUser = auth.user;

    // Meal Data :
    const ingredients = JSON.parse(meal.ingredients);
    const instructions = JSON.parse(meal.instructions);

    // Formation Duration :
    const formatDuration = (duration) => {
        const [hours, minutes] = duration.split(":");
        return `${hours}h:${minutes}min`;
    };

    // Convert Timstamp to days :
    const getDaysAgo = (dateString) => {
        const updatedDate = new Date(dateString);
        const currentDate = new Date();
        const differenceInMs = currentDate - updatedDate;
        const differenceInDays = Math.floor(
            differenceInMs / (1000 * 60 * 60 * 24)
        );
        return differenceInDays === 0
            ? "Posted Today"
            : `Posted ${differenceInDays} days ago`;
    };
    const daysAgo = getDaysAgo(meal.updated_at);

    // Like and Dislike Logic:
    const [likes, setLikes] = useState(meal.likes);
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
        router.post(
            `/meals/${meal.idMeal}/like`,
            {},
            {
                onError: () => {
                    setLikes((prevLikes) => prevLikes - 1);
                },
            }
        );
    };

    const handleDislike = () => {
        setLikes((prevLikes) => {
            if (prevLikes > 0) {
                return prevLikes - 1;
            }
            return prevLikes;
        });
        router.post(
            `/meals/${meal.idMeal}/dislike`,
            {},
            {
                onError: () => {
                    setLikes((prevLikes) => prevLikes + 1);
                },
            }
        );
    };

    return (
        <div className="tn:max-w-[28rem] lg:max-w-[52rem] md:max-w-[40rem] sm:max-w-[35rem] max-w-[22rem] m-auto mb-20">
            <div>
                <div>
                    <img
                        src={
                            meal.meal_img
                                ? `/uploads/meals/${meal.meal_img}`
                                : `${Meal}`
                        }
                        className="w-full max-h-[60vh] rounded-3xl"
                        alt="test"
                    />
                </div>
                <div className="max-w-3xl m-auto">
                    <h1 className="text-2xl font-bold pt-1.5 pb-2">
                        {meal.title}
                    </h1>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flexy gap-4">
                                <img
                                    src={
                                        user.profile_img
                                            ? `/uploads/users/${user.profile_img}`
                                            : `${Profile}`
                                    }
                                    alt="test"
                                    className="rounded-full w-12"
                                />
                                <h3 className="font-bold text-sm sm:text-lg">
                                    {user
                                        ? `${user.firstName} ${user.lastName}`
                                        : "No User"}
                                </h3>
                            </div>
                        </div>
                        <div className="flexy gap-2">
                            <span className="rounded-full border-1 border-black flexy gap-2 px-2 py-1">
                                <span
                                    className="flexy cursor-pointer select-none"
                                    onClick={handleLike}
                                >
                                    <LikeIcon size="size-5.5" />
                                    <b className="text-sm">{likes}</b>
                                </span>
                                <span className="h-6.5 w-px bg-black rounded-full"></span>
                                <span
                                    className="cursor-pointer select-none"
                                    onClick={handleDislike}
                                >
                                    <DislikeIcon size="size-5.5" />
                                </span>
                            </span>
                            <span className="border-1 border-black rounded-full p-1.5 cursor-pointer">
                                <HeartIcon size="size-5.5" />
                            </span>
                            <ReportMeal meal={meal.title} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 bg-30 p-4.5 py-3.5 my-4 rounded-lg custom-shadow">
                        <div className="flex flex-col gap-1">
                            <div>
                                <p className="text-sm">
                                    {meal.views} views • {daysAgo}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="py-1 px-4! rounded-full bg-[var(--bg-10)]! text-first font-bold">
                                    {categoryName}
                                </span>
                                <span className="py-1 px-4! rounded-full soft-bg bg-[var(--bg-10)]! text-first font-bold">
                                    {kitchenName}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-wide text-[var(--bg-10)]">
                                Description :
                            </h3>
                            <p className="text-[15px] text-justify pt-1">
                                {meal.description}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-wide text-[var(--bg-10)]">
                                Cooking Duration :
                            </h3>
                            <p className="text-md">
                                {formatDuration(meal.duration)}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-wide text-[var(--bg-10)]">
                                Ingredients :
                            </h3>
                            <div className="flex flex-wrap gap-2 pt-2 px-2">
                                {ingredients.map((ingredient, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200! rounded-md w-auto! py-1! px-4! text-[15px]!"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-wide pb-2 text-[var(--bg-10)]">
                                Instructions :
                            </h3>
                            <div className="bg-[var(--soft-bg)] rounded-lg py-4 px-1">
                                <ul className="flex flex-col gap-2 relative px-3">
                                    <span className="bg-10 absolute h-full w-0.5 left-4 top-2"></span>
                                    {instructions.map((instruction, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center relative before:absolute before:left-0 before:h-2.5 before:w-2.5 before:bg-[var(--bg-10)] before:rounded-full"
                                        >
                                            <span className="ml-2 pl-4 text-[15px]">
                                                {instruction}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 px-10 flex flex-col gap-3">
                        <h1 className="text-2xl flex gap-2">
                            <b>{MealComments.length}</b>
                            <strong cl>Comments</strong>
                        </h1>
                        <div className="flex gap-2 relative">
                            <span className="flexy">
                                <img
                                    src={
                                        activUser.profile_img
                                            ? `/uploads/users/${activUser.profile_img}`
                                            : `${Profile}`
                                    }
                                    alt="test"
                                    className="rounded-full w-10"
                                />
                            </span>
                            <TextInputGroup
                                name="comment"
                                id="comment"
                                placeholder="Add a comment..."
                                className="border-0! border-b-2! rounded-none! focus:ring-0! pr-25!"
                            />
                            <button className="absolute right-0 bg-10 text-first font-bold py-1.5 px-3 text-sm rounded-lg cursor-pointer">
                                Comment
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 pt-6 px-3">
                            {MealComments.map((comment) => (
                                <div className="flex items-center gap-4 min-w-2xl m-auto">
                                    <span className="flexy">
                                        <img
                                            src={
                                                comment.profile_img
                                                    ? `/uploads/users/${comment.profile_img}`
                                                    : `${Profile}`
                                            }
                                            alt="test"
                                            className="rounded-full w-10"
                                        />
                                    </span>
                                    <span className="relative w-full max-w-[39rem]">
                                        <p className="w-full border-b-2 border-[var(--third)] absolute bottom-0"></p>
                                        <span className="flex justify-between items-center">
                                            <span>
                                                <h3 className="text-[15px] font-bold">
                                                    {comment.firstName}{" "}
                                                    {comment.lastName}
                                                </h3>
                                                <p className="text-[14px] mb-1">
                                                    {comment.content}
                                                </p>
                                            </span>
                                            <span className="c-p text-[var(--bg-10)]">
                                                <DotsIcon />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MealDetails;
