import React, { useEffect, useState } from 'react';

import { UpdateProfile } from '@/components/models/UpdateProfile';
import { Button } from "@/components/ui/button";

import ProfileImg from "@/../../public/images/Profile.png";
import MealCard from '@/components/ui/MealCard';
import Tajine from "@/../../public/images/Tajine.jpg";
import { PencilIcon, TrashIcon } from '@/../../public/icons/Icons';
import { UpdateMeal } from '@/components/models/UpdateMeal';

import { Link } from '@inertiajs/react';

const PrivateProfile = ({ status }) => {
    const [isFavoritesHovered, setIsFavoritesHovered] = useState(false);
    const [isMealssHovered, setIsMealssHovered] = useState(false);
    const [posts, setPosts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const post = [
            { user: 'obama aziz', date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6, views: 200 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 7, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 3, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
        ]
        setPosts(post)

        const favorite = [
            { user: 'obama aziz', date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6, views: 200 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4, views: 450 },
        ]
        setFavorites(favorite)

    }, [])

    const user = {
        id: 1,
        img: ProfileImg,
        fname: "Imrane",
        lname: "Mejouate",
        posts: posts.length,
        bio: "Ipsum is simply dummy text of the printing and typesetting industry. ",
    }

    return (
        <div className="mx-auto bg-30 custom-shadow rounded-lg sm:p-6 w-[95%]">

            {/* Profile Header */}
            <div className='flex max-md:flex-col gap-5 max-md:p-5 max-md:pt-6'>

                <div className='flex max-md:flex-col max-md:text-center grow gap-5'>
                    {/* Avatar */}
                    <img src={ProfileImg} alt="Profile" className='rounded-full size-40 max-md:m-auto' />
                    <div className="space-x-4">
                        {/* Name and Post Count */}
                        <div className=''>
                            <h2 className="text-2xl md:text-3xl font-bold">{user.fname} {user.lname}</h2>
                            {
                                status == "meals"
                                    ? <p className="text-gray-500">{user.posts} Posts</p>
                                    : <p className="text-gray-500">{favorites.length} Favorites</p>
                            }
                        </div>
                        {/* Bio */}
                        <p className="mt-4 text-gray-600 text-start">
                            <span className="font-semibold">bio: </span>{user.bio}
                        </p>
                    </div>
                </div>

                {/* Update And LogOut Buttons */}
                <div className="md:w-fit flex md:flex-col justify-center gap-3">
                    <UpdateProfile />
                    <Button className="bg-red-500 font-bold cursor-pointer hover:bg-red-600 transition duration-200 flex justify-evenly">
                        <span>Log Out</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>

            </div>

            {/* Meals And Favorites Navigation */}
            <div className="mt-6 pt-2 pb-1.5 flex justify-around border-b-2 border-gray-300">
                <div className='relative w-[65%] md:w-[55%] flex justify-between'>

                    <Link href={"/profile/meals"}>
                        <button
                            className={`cursor-pointer  ${status == "meals" ? "text-green" : "text-gray-600"} transition duration-300 hover:text-green font-semibold`}
                            onMouseEnter={() => status == "favorites" ? setIsMealssHovered(true) : ""}
                            onMouseLeave={() => setIsMealssHovered(false)}
                        >
                            Meals
                        </button>
                    </Link>

                    <Link href={"/profile/favorites"}>
                        <button
                            className={`cursor-pointer ${status == "favorites" ? "text-green" : "text-gray-600"} transition duration-300 hover:text-green font-semibold`}
                            onMouseEnter={() => status == "meals" ? setIsFavoritesHovered(true) : ""}
                            onMouseLeave={() => setIsFavoritesHovered(false)}
                        >
                            Favorites
                        </button>
                    </Link>

                    <span
                        className={`absolute -bottom-[0.4rem] h-1 bg-10 rounded-t-full transition-all transition[left_400ms_cubic-bezier(0.175, 0.885, 0.32, 1.275)] duration-300 ${status == "meals" ? "origin-left -left-4 w-20" : "origin-right left-[calc(100%-90px)] w-28"} ${isMealssHovered && status == "favorites" || isFavoritesHovered && status == "meals" ? 'scale-x-125' : ''}
                              `}
                    ></span>

                </div>

            </div>

            <div className='m-5 md:mt-10'>
                {status == "meals"
                    ? <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9'>
                        {posts.map(post =>
                            <div>
                                <MealCard key={post.id} meal={post} />
                                <div className='bg-60 shadow-[2px_2px_3px_0px_hsla(0,0%,0%,0.2),-2px_2px_3px_0px_hsla(0,0%,0%,0.2)] px-2.5 py-1.5 rounded-b-xl flex gap-2 w-fit m-auto'>
                                    <UpdateMeal buttonStyles="rounded-lg! flexy" />
                                    <Button className="md:text-xl font-bold md:p-5 bg-red-500 hover:bg-red-600 transition duration-200">
                                        Delete
                                        <TrashIcon size='size-5 md:size-7' />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    : <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9'>
                        {favorites.map(favorite =>
                            <MealCard key={favorite.id} meal={favorite} />
                        )}
                    </div>
                }
            </div>

        </div>
    );
}

export default PrivateProfile;