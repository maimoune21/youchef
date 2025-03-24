import React, { useEffect, useState } from 'react';

import Profile from "@/../../public/images/Profile.png";
import MealCard from '@/components/ui/MealCard';
import Tajine from "@/../../public/images/Tajine.jpg";

const PublicProfile = ({user}) => {
    console.log(user)
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const meal = [
            { user: 'obama aziz', date: '2025-02-02', title: 'hello from pizza', image: Tajine, duration: 6, views: 200 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 4, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 7, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 3, views: 450 },
            { user: 'modric 7amid', date: '2025-02-22', title: 'hello from m9ila', image: Tajine, duration: 2, views: 450 },
        ]
        setMeals(meal)
    }, [])

    return (
        <div className="mx-auto bg-30 custom-shadow rounded-lg sm:p-6 w-[95%]">

            {/* Profile Header */}
            <div className='flex items-center justify-center gap-5 max-md:p-5 max-md:pt-6 max-md:flex-col max-md:text-center'>

                {/* Avatar */}
                <img src={user.profile_img? `/uploads/users/${user.profile_img}`: Profile} alt="Profile" className='rounded-full size-40 max-md:m-auto' />

                <div className="space-x-4">

                    {/* Name and Post Count */}
                    <div className=''>
                        <h2 className="text-3xl font-bold">{user.firstName} {user.lastName}</h2>
                        <p className="text-gray-500"> Posts</p>
                    </div>

                    {/* Bio */}
                    <p className="mt-4 text-gray-600 text-start">
                        <span className="font-semibold">bio: </span>{user.bio}
                    </p>

                </div>

            </div>

            {/* Meals And Favorites Navigation */}
            <div className="mt-6 pt-2 pb-1.5 flex justify-center border-b-2 border-gray-300">
                <div className='relative text-green font-semibold'>
                    Meals
                    <span
                        className={`absolute -bottom-2 h-1 bg-10 rounded-t-full left-1/2 -translate-x-1/2  w-[160%]`}
                    ></span>
                </div>
            </div>

            <div className='m-5 md:mt-10'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9'>
                    {/* {meals.map(post =>
                        <MealCard key={post.id} meal={post} />
                    )} */}
                </div>

            </div>

        </div>
    );
}

export default PublicProfile;
