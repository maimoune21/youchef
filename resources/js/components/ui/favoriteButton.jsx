import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { HeartIcon } from '@/../../public/icons/Icons';

const FavoriteButton = ({ meal, thisUser, favoriteMeals }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const mealExists = favoriteMeals.find(fav => fav.idMeal === meal.idMeal);
        setIsFavorited(!!mealExists);
    }, [favoriteMeals, meal.idMeal]);

    const handleFavoriteClick = () => {
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
        <button
            className="bg-30 rounded-full p-1 absolute top-3 right-3 transition-all duration-200 hover:fill-[var(--wave-1)]"
            onClick={handleFavoriteClick}
        >
            <HeartIcon className={`transition-all duration-200 ${isFavorited ? "fill-green-500" : "fill-none stroke-black stroke-2"}`} />
        </button>
    );
};

export default FavoriteButton;