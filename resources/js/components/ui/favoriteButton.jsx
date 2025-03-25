import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { HeartIcon } from "@/../../public/icons/Icons";

const FavoriteButton = ({
    meal,
    thisUser,
    favoriteMeals,
    buttonClass,
    iconClass,
}) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const mealExists =
            favoriteMeals &&
            favoriteMeals.find((fav) => fav.idMeal === meal.idMeal);
        setIsFavorited(!!mealExists);
    }, [favoriteMeals, meal.idMeal]);

    const handleFavoriteClick = () => {
        const wasFavorited = isFavorited;
        setIsFavorited(!wasFavorited);
        setIsLoading(true);

        router.post(
            "/favorite",
            { idMeal: meal.idMeal, idUser: thisUser.idUser },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setIsLoading(false);
                },
                onError: (errors) => {
                    console.error("Error toggling favorite:", errors);
                    setIsFavorited(wasFavorited);
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <button
            className={`p-1 pr-1.5 transition-all duration-200 ${buttonClass} ${
                isLoading ? "opacity-70" : ""
            }`}
            onClick={handleFavoriteClick}
            disabled={isLoading}
        >
            <HeartIcon
                className={`cursor-pointer transition-colors duration-200 ${
                    isFavorited
                        ? "fill-green-600 text-green-600"
                        : "fill-white stroke-green-600 stroke-2"
                } ${iconClass || ""}`}
            />
        </button>
    );
};

export default FavoriteButton;
