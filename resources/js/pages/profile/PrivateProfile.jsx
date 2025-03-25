import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useState } from "react";
import { UpdateProfile } from "@/components/models/UpdateProfile";
import { Button } from "@/components/ui/button";
import MealCard from "@/components/ui/MealCard";
import { router, useForm } from "@inertiajs/react";
import { LogOut } from "lucide-react";

const PrivateProfile = ({ user, posts, favoriteMeals }) => {
    const [isFavoritesHovered, setIsFavoritesHovered] = useState(false);
    const [isMealssHovered, setIsMealssHovered] = useState(false);
    const [status, setStatus] = useState("meals");
    const [messageDeleted, setmessageDeleted] = useState("");

    // Logout :
    const { post } = useForm();
    const HLogOut = (e) => {
        e.preventDefault();
        post("/logout");
    };

    const [flashMsg, setFlashMsg] = useState("showed");

    const handleDelete = (idMeal) => {
        router.delete(`/meals/${idMeal}`, {
            onSuccess: () => {
                setmessageDeleted("Meal deleted successfully!");
                setFlashMsg("showed");
            },
        });
        setTimeout(() => {
            setFlashMsg("hidden");
        }, 3000);
    };

    return (
        <div className="mx-auto bg-30 custom-shadow rounded-lg sm:p-6 w-[95%]">
            {/* Post Deleted Message */}
            {messageDeleted && (
                <div
                    className={`fixed top-20 z-40 -right-50 ${
                        flashMsg == "showed" ? "right-6" : "-right-50"
                    } bg-green-600 transition-all duration-500 px-3 py-2 rounded-md shadow-lg text-sm text-white`}
                >
                    {messageDeleted}
                </div>
            )}
            {/* Profile Header */}
            <div className="flex max-md:flex-col gap-5 max-md:p-5 max-md:pt-6">
                <div className="flex max-md:flex-col max-md:text-center grow gap-5">
                    {/* Avatar */}
                    {user.profile_img ? (
                        <img
                            src={`/uploads/users/${user.profile_img}`}
                            alt="Profile"
                            className="rounded-full size-40 max-md:m-auto"
                        />
                    ) : (
                        <span className="bg-soft text-black max-md:m-auto font-bold text-3xl p-13 h-full aspect-square rounded-full flexy">
                            {user.lastName.charAt(0)}
                        </span>
                    )}
                    <div className="space-x-4">
                        {/* Name and Post Count */}
                        <div className="">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {user.firstName} {user.lastName}
                            </h2>
                            {status == "meals" ? (
                                <p className="text-gray-500">
                                    {posts.length} Posts
                                </p>
                            ) : (
                                <p className="text-gray-500">
                                    {favoriteMeals.length} Favorites
                                </p>
                            )}
                        </div>
                        {/* Bio */}
                        {user.bio && (
                            <p className="mt-4 text-gray-600 text-start">
                                <span className="font-semibold">bio: </span>
                                {user.bio}
                            </p>
                        )}
                    </div>
                </div>
                <div className="md:w-fit flex md:flex-col justify-center gap-3">
                    <UpdateProfile user={user} />
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button className="bg-red-500 font-bold cursor-pointer hover:bg-red-600 transition duration-200 flex justify-evenly w-full">
                                <span>Log Out</span>
                                <LogOut />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you sure you want to logout ?
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-600 hover:bg-red-700 cursor-pointer">
                                    <form onSubmit={HLogOut}>
                                        <button
                                            type="submit"
                                            className="cursor-pointer"
                                        >
                                            Continue
                                        </button>
                                    </form>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <div className="mt-6 pt-2 pb-1.5 flex justify-around border-b-2 border-gray-300">
                <div className="relative w-[65%] md:w-[55%] flex justify-between">
                    <button href={"/profile/meals"}>
                        <button
                            className={`cursor-pointer  ${
                                status == "meals"
                                    ? "text-green"
                                    : "text-gray-600"
                            } transition duration-300 hover:text-green font-semibold`}
                            onMouseEnter={() =>
                                status == "favorites"
                                    ? setIsMealssHovered(true)
                                    : ""
                            }
                            onMouseLeave={() => setIsMealssHovered(false)}
                            onClick={() => setStatus("meals")}
                        >
                            Meals
                        </button>
                    </button>

                    <button href={"/profile/favorites"}>
                        <button
                            className={`cursor-pointer ${
                                status == "favorites"
                                    ? "text-green"
                                    : "text-gray-600"
                            } transition duration-300 hover:text-green font-semibold`}
                            onMouseEnter={() =>
                                status == "meals"
                                    ? setIsFavoritesHovered(true)
                                    : ""
                            }
                            onMouseLeave={() => setIsFavoritesHovered(false)}
                            onClick={() => setStatus("favorites")}
                        >
                            Favorites
                        </button>
                    </button>

                    <span
                        className={`absolute -bottom-[0.4rem] h-1 bg-10 rounded-t-full transition-all transition[left_400ms_cubic-bezier(0.175, 0.885, 0.32, 1.275)] duration-300 ${
                            status == "meals"
                                ? "origin-left -left-4 w-20"
                                : "origin-right left-[calc(100%-90px)] w-28"
                        } ${
                            (isMealssHovered && status == "favorites") ||
                            (isFavoritesHovered && status == "meals")
                                ? "scale-x-125"
                                : ""
                        }
                              `}
                    ></span>
                </div>
            </div>

            <div className="m-5 md:mt-10">
                {status == "meals" ? (
                    posts.length == 0 ? (
                        <h1 className="text-3xl text-center mt-5">
                            No Posts Yet
                        </h1>
                    ) : (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9">
                            {posts.map((post) => (
                                <div>
                                    <MealCard
                                        key={post.idMeal}
                                        meal={post}
                                        mypost={true}
                                        handleDelete={handleDelete}
                                    />
                                </div>
                            ))}
                        </div>
                    )
                ) : favoriteMeals.length == 0 ? (
                    <h1 className="text-3xl text-center mt-5">
                        No Favorites Yet
                    </h1>
                ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9">
                        {favoriteMeals.map((favorite) => (
                            <MealCard
                                key={favorite.id}
                                meal={favorite}
                                thisUser={user}
                                favoriteMeals={favoriteMeals}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrivateProfile;
