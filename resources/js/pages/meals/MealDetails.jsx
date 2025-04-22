import React, { useEffect, useState } from "react";
import Meal from "@/../../public/images/BlankMeal.png";
import TextInputGroup from "@/components/ui/TextInputGroup";
import {
    DislikeIcon,
    DotsIcon,
    HeartIcon,
    LikeIcon,
} from "@/../../public/icons/Icons";
import { ReportMeal } from "../../components/models/ReportMeal";
import { usePage, router, Link } from "@inertiajs/react";

const MealDetails = ({
    meal,
    user,
    categoryName,
    kitchenName,
    comments,
    thisUser,
    favoriteMeals,
    viewsCount,
    likesCount,
    dislikesCount,
    userHasLiked,
    userHasDisliked,
}) => {
    // Meal Comments :
    const MealComments = comments;

    // Access the authenticated user data :
    const { auth } = usePage().props;
    const activUser = auth?.user;

    // Meal Data :
    const ingredients = JSON.parse(meal.ingredients);
    const instructions = JSON.parse(meal.instructions);

    // Formation Duration :
    const formatDuration = (duration) => {
        const [hours, minutes] = duration.split(":");
        return `${hours}h:${minutes}min`;
    };

    // Convert Timestamp to days :
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
    const [likes, setLikes] = useState(likesCount);
    const [dislikes, setDislikes] = useState(dislikesCount);
    const [userAction, setUserAction] = useState({
        liked: userHasLiked || false,
        disliked: userHasDisliked || false,
    });

    const handleLike = () => {
        if (!activUser) {
            router.visit("/login");
            return;
        }
        if (userAction.liked) return handleUnlike();
        setUserAction({
            liked: true,
            disliked: false,
        });
        router.post("/meal/like", {
            idUser: activUser.id,
            idMeal: meal.idMeal,
            status: "liked",
        }, { preserveScroll: true });
    };

    const handleUnlike = () => {
        if (!activUser) {
            router.visit("/login");
            return;
        }
        setUserAction({
            liked: false,
            disliked: false,
        });
        router.post("/meal/like", {
            idUser: activUser.id,
            idMeal: meal.idMeal,
            status: "unliked",
        }, { preserveScroll: true });
    };

    const handleDislike = () => {
        if (!activUser) {
            router.visit("/login");
            return;
        }
        if (userAction.disliked) return handleUnlike();
        setUserAction({
            liked: false,
            disliked: true,
        });
        router.post("/meal/like", {
            idUser: activUser.id,
            idMeal: meal.idMeal,
            status: "disliked",
        }, { preserveScroll: true });
    }

    // Commenting :
    const [newComment, setNewComment] = useState("");
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!activUser) {
            router.visit("/login");
            return;
        }
        if (!newComment.trim()) return;
        router.post(
            `/meals/${meal.idMeal}/comment`,
            { comment: newComment },
            {
                onSuccess: () => {
                    setNewComment("");
                },
                preserveScroll: true,
            }
        );
    };

    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const mealExists = favoriteMeals.find(
            (fav) => fav.idMeal === meal.idMeal
        );
        setIsFavorited(!!mealExists);
    }, [favoriteMeals, meal.idMeal]);

    const handleFavoriteClick = () => {
        if (!activUser) {
            router.visit("/login");
            return;
        }
        router.post(
            "/favorite",
            { idMeal: meal.idMeal, idUser: thisUser.idUser },
            {
                onSuccess: () => {
                    setIsFavorited((prev) => !prev);
                },
                onError: (errors) => {
                    console.error("Error toggling favorite:", errors);
                },
                preserveScroll: true,
            }
        );
    };
    console.log(meal.meal_img)

    return (
        <div className="tn:max-w-[28rem] lg:max-w-[52rem] md:max-w-[40rem] sm:max-w-[35rem] max-w-[22rem] m-auto mb-20">
            <div>
                <div className="bg-30 custom-shadow rounded-t-3xl rounded-b-2xl mb-3 overflow-hidden">
                <img
                  src={
                      meal.meal_img
                          ? `/storage/meals/${meal.meal_img}`
                          : Meal
                        }
                        className="w-full max-h-[60vh] rounded-t-3xl border-b-2"
                        alt={meal.title}
                  onError={(e) => {
                      e.target.src = Meal;
                    }}

                    />
                    <h1 className="text-2xl font-bold pt-1.5 pb-2 px-4 text-black rounded-b-3xl">
                        {meal.title}
                    </h1>
                </div>
                <div className="max-w-3xl m-auto">
                    <div className="flex items-center justify-between">
                        <Link
                            href={`/publicProfile/${user.idUser}`}
                            className="hover:scale-98 rounded-lg pl-3 pr-4 py-2 group transition-all"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flexy gap-4">
                                    {user.profile_img ? (
                                        <img
                                            src={`/uploads/users/${user.profile_img}`}
                                            alt="test"
                                            className="rounded-full w-12"
                                        />
                                    ) : (
                                        <span className="bg-soft transition-all text-black text-base font-bold w-12 shadow h-full aspect-square rounded-full flexy">
                                            {user.firstName.charAt(0)}
                                        </span>
                                    )}
                                    <h3 className="font-bold text-sm sm:text-lg group-hover:underline underline-offset-2 group-hover:text-[var(--bg-10)]">
                                        {user
                                            ? `${user.firstName} ${user.lastName}`
                                            : "No User"}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <div className="flexy gap-2">
                            <span className="rounded-full border-1 border-black flexy overflow-hidden">
                                <span
                                    className="flexy gap-0.5 pl-2.5 pr-2 py-1.5 hover:bg-gray-300 cursor-pointer select-none"
                                    onClick={handleLike}
                                >
                                    <LikeIcon
                                        size={`size-5.5 ${userAction.liked ? "fill-black" : ""
                                            }`}
                                    />
                                    <b className="text-sm">{likes}</b>
                                </span>
                                <span className="h-6.5 w-px bg-black rounded-full"></span>
                                <span
                                    className="flexy gap-0.5 pr-2.5 pl-2 py-1.5 hover:bg-gray-300 cursor-pointer select-none"
                                    onClick={handleDislike}
                                >
                                    <DislikeIcon size={`size-5.5 ${userAction.disliked ? "fill-black" : ""}`} />
                                    <b className="text-sm">{dislikes}</b>
                                </span>
                            </span>
                            <button
                                className="border-1 border-black rounded-full p-1.5 cursor-pointer group"
                                onClick={handleFavoriteClick}
                            >
                                <HeartIcon
                                    size="size-5.5"
                                    className={`${isFavorited
                                        ? "fill-[var(--bg-10)] text-[var(--bg-10)]"
                                        : "fill-none text-black fill:[var(--bg-10)] stroke-2"
                                        }`}
                                />
                            </button>
                            <ReportMeal meal={meal.title} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-30 p-4.5 py-3.5 my-4 rounded-lg custom-shadow">
                        <div className="flex flex-col gap-1">
                            <div>
                                <p className="text-sm">
                                    {viewsCount} views • {daysAgo}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
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
                            <p className="text-[15px] text-justify pt-0">
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
                        {activUser && (
                            <div className="flex gap-2 relative">
                                <span className="flexy">
                                    {activUser?.profile_img ? (
                                        <img
                                            src={`/storage/users/${activUser.profile_img}`}
                                            alt="test"
                                            className="rounded-full w-10"
                                        />
                                    ) : (
                                        <span className="bg-soft text-black font-bold text-base w-10 aspect-square rounded-full flexy">
                                            {activUser.firstName.charAt(0)}
                                        </span>
                                    )}
                                </span>
                                <form
                                    onSubmit={handleCommentSubmit}
                                    className="w-full"
                                >
                                    <TextInputGroup
                                        name="comment"
                                        id="comment"
                                        placeholder="Add a comment..."
                                        className="border-0! border-b-2! rounded-none! focus:ring-0! pr-25!"
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 bg-10 text-first font-bold py-1.5 px-3 text-sm rounded-lg cursor-pointer"
                                    >
                                        Comment
                                    </button>
                                </form>
                            </div>
                        )}
                        <div className="flex flex-col gap-6 pt-6 px-3">
                            {MealComments.map((comment) => (
                                <div
                                    key={comment.idComment}
                                    className="flex items-center gap-4 min-w-2xl m-auto"
                                >
                                    <span className="flexy">
                                        {comment.profile_img ? (
                                            <img
                                                src={`/storage/users/${comment.profile_img}`}
                                                alt="test"
                                                className="rounded-full w-10"
                                            />
                                        ) : (
                                            <span className="bg-soft text-black font-bold text-base w-10 aspect-square rounded-full flexy">
                                                {comment.firstName.charAt(0)}
                                            </span>
                                        )}
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
