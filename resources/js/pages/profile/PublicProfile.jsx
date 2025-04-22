import React from 'react';
import MealCard from '@/components/ui/MealCard';
import { usePage } from '@inertiajs/react';

const PublicProfile = ({ user, meals }) => {
    const { user:authUser } = usePage().props.auth
    return (
        <div className="mx-auto bg-30 custom-shadow rounded-lg sm:p-6 w-[95%]">
            {/* Profile Header */}
            <div className='flex items-center justify-center gap-5 max-md:p-5 max-md:pt-6 max-md:flex-col max-md:text-center'>
                {/* Avatar */}
                {user.profile_img
                    ? <img src={`/storage/users/${user.profile_img}`} alt="Profile" className='rounded-full size-34 max-md:m-auto' />
                    : <span className="bg-soft text-black max-md:m-auto font-bold text-3xl p-13 h-full aspect-square rounded-full flexy">{user.firstName.charAt(0)}</span>
                }
                <div className="space-x-4">
                    {/* Name and Post Count */}
                    <div className=''>
                        <h2 className="text-3xl font-bold">{user.firstName} {user.lastName}</h2>
                        <p className="text-gray-500">{meals.length} Posts</p>
                    </div>
                    {/* Bio */}
                    {
                        user.bio && <p className="mt-4 text-gray-600 text-start">
                            <span className="font-semibold">bio: </span>{user.bio}
                        </p>
                    }
                </div>
            </div>
            {/* Meals And Favorites Navigation */}
            <div className="mt-6 pt-2 pb-1.5 flex justify-center border-b-2 border-gray-300">
                <div className='relative text-green font-semibold cursor-default'>
                    Meals
                    <span
                        className={`absolute -bottom-2 h-1 bg-10 rounded-t-full left-1/2 -translate-x-1/2  w-[160%]`}
                    ></span>
                </div>
            </div>
            <div className='m-5 md:mt-10'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9'>
                    {meals.map(post =>
                        <MealCard
                            key={post.id}
                            meal={post}
                            thisUser={authUser}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PublicProfile;