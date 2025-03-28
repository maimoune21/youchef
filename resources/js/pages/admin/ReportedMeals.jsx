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
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "@/../../public/icons/Icons";
import React from "react";
import TextInputGroup from "@/components/ui/TextInputGroup";
import BlankMeal from "@/../../public/images/BlankMeal.png";
import { TrashIcon } from "@/../../public/icons/Icons";
import { MealRepports } from "@/components/models/MealReports";
import { RepportIcon } from "@/../../public/icons/Icons";
import { CircleChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export const ReportedMeals = ({ meals }) => {
    const { delete: destroy } = useForm();
    const handleDeleteMeal = (idMeal) => {
        const mealTitle =
            meals.find((m) => m.idMeal === idMeal)?.title || "the meal";
        destroy(`/admin/meals/${idMeal}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success(`${mealTitle} deleted successfully`, {
                    duration: 2000,
                });
            },
            onError: () => {
                toast.error("Failed to delete meal", {
                    description: "Please try again later",
                });
            },
        });
    };

    return (
        <div className="mt-4 max-md:mb-20 overflow-hidden">
            <div className="TopManageDashboard max-sm:px-0!">
                <span>
                    <RepportIcon style="size-7! text-white fill-gray-400" />
                </span>
                <h1 className="text-lg text-gray-500">Reported meals</h1>
            </div>
            <div className="md:m-3 rounded-sm">
                <div className="flex relative">
                    <span className="bg-white! flexy absolute left-0">
                        <FilterIcon style="size-7.5 text-gray-400" />
                    </span>
                    <TextInputGroup
                        placeholder="Filter"
                        className="bg-white! border-0! rounded-none! py-1 pl-10! pr-20! border-b-1! border-gray-400! focus:ring-0! focus:border-b-1!"
                    />
                    <button className="button absolute right-2 top-1 rounded-full! py-1.5! px-7!">
                        Filter
                    </button>
                </div>
                <div className="flex flex-col overflow-auto h-auto max-h-[75vh] scrollbar pb-10 max-md:pb-0!">
                    {meals.map((meal) => (
                        <div key={meal.idMeal}>
                            <div className="border-b-1 border-gray-400 py-2.5 px-2">
                                <div className="grid lg:grid-cols-[2fr_0.5fr]">
                                    <div className="flexy sm:justify-start! flex-col sm:flex-row gap-4">
                                        <div className="w-64 flexy">
                                            <img
                                                src={meal.meal_img || BlankMeal}
                                                className="w-full rounded-2xl"
                                                alt={meal.title}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 py-4">
                                            <h1 className="font-bold text-xl">
                                                {meal.title}
                                            </h1>
                                            <h3 className="flex items-center gap-1 font-bold text-base">
                                                {meal.profile_img ? (
                                                    <img
                                                        src={`/uploads/users/${meal.profile_img}`}
                                                        alt="test"
                                                        className="w-6 h-6 rounded-full bg-red-600"
                                                    />
                                                ) : (
                                                    <span className="w-6 h-6 bg-soft text-black max-md:m-auto font-bold text-xs aspect-square rounded-full flexy">
                                                        {meal.lastName.charAt(
                                                            0
                                                        )}
                                                    </span>
                                                )}
                                                {meal.firstName} {meal.lastName}
                                            </h3>
                                            <span className="text-sm">
                                                {meal.views} views •{" "}
                                                {new Date(
                                                    meal.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                            <p className="text-sm">
                                                {meal.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flexy lg:flex-col gap-2">
                                        <MealRepports meal={meal.title} />
                                        <span className="flexy gap-2">
                                            <Drawer>
                                                <DrawerTrigger>
                                                    <button className="flexy gap-1 bg-red-600 cursor-pointer rounded-full p-1">
                                                        <TrashIcon size="size-7 text-white " />
                                                    </button>
                                                </DrawerTrigger>
                                                <DrawerContent>
                                                    <DrawerHeader>
                                                        <DrawerTitle>
                                                            Are you absolutely
                                                            sure?
                                                        </DrawerTitle>
                                                        <DrawerDescription>
                                                            This action cannot
                                                            be undone.
                                                        </DrawerDescription>
                                                    </DrawerHeader>
                                                    <DrawerFooter className="flex-row!">
                                                        <DrawerClose>
                                                            <Button
                                                                variant="outline"
                                                                className="cursor-pointer"
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </DrawerClose>
                                                        <Button
                                                            onClick={() =>
                                                                handleDeleteMeal(
                                                                    meal.idMeal
                                                                )
                                                            }
                                                            className="cursor-pointer px-4 py-0! rounded-md bg-red-600 hover:bg-red-700"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </DrawerFooter>
                                                </DrawerContent>
                                            </Drawer>
                                            <Link
                                                href={`/mealDetails/${meal.idMeal}`}
                                                className="flexy gap-1.5 bg-green-600 p-1 rounded-full cursor-pointer"
                                            >
                                                <CircleChevronRight className="size-7 text-white" />
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
