import React, { useRef, useEffect, useState } from "react";
import { XCancelIcon, ArrowIcon } from "@/../../public/icons/Icons";
import Meal from "@/../../public/images/BlankMeal.png";
import { Link, router, usePage } from "@inertiajs/react";
import styled from "styled-components";

const SearchBar = ({ CustumClass, isExpanded, setIsExpanded }) => {
    const { searchedMeals } = usePage().props
    const [searchedInput, setSearchedInput] = useState("");
    const inputRef = useRef(null);
    const GrowRef = useRef(null);
    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded((prev) => !prev);
        if (!isExpanded) inputRef.current.focus();
        setSearchedInput("")
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (GrowRef.current && !GrowRef.current.contains(e.target)) {
                setIsExpanded(false);
                setSearchedInput("")
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            router.get(`/meals?search=${searchedInput}`);
            setIsExpanded(false);
            setSearchedInput("")
        }
    };

    return (
        <>
            <StyleInputGrow ref={GrowRef} className={`${isExpanded ? "expanded w-full" : ""}`}>
                <input
                    type="text"
                    className={`input green-bg-selection ${CustumClass}`}
                    placeholder="Type to search..."
                    ref={inputRef}
                    value={searchedInput}
                    onClick={(e) => e.stopPropagation()}
                    onChange={e => setSearchedInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <div className="icon left-0" onClick={toggleExpand}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" />
                    </svg>
                </div>
                <div className={`icon right-0 ${isExpanded ? "" : "hidden"}`} onClick={toggleExpand}>
                    <XCancelIcon />
                </div>
                {
                    searchedMeals && searchedInput &&
                    <div className="absolute top-[110%] text-black left-1/2 overflow-y-scroll scrollbar -translate-x-1/2 rounded-xl w-[90%] p-5 bg-30 custom-shadow max-h-[70vh]">
                        <div className="flex flex-col gap-2">
                            {
                                searchedMeals.slice(0, 10).filter(meal => meal.title.toLowerCase().includes(searchedInput.toLowerCase())).map(meal =>
                                    <Link href={`/mealDetails/${meal.idMeal}`} className="hover:bg-[var(--wave-2)] px-2 py-4 rounded-lg flex items-center gap-2" onClick={e => e.stopPropagation()}>
                                        <div className="w-30 flexy">
                                            <img
                                                src={
                                                    meal.meal_img
                                                        ? `/uploads/meals/${meal.meal_img}`
                                                        : `${Meal}`
                                                }
                                                alt={meal.title}
                                                className="w-full aspect-video rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl">{meal.title}</p>

                                        </div>
                                    </Link>
                                )
                            }
                            <Link href={`/meals?search=${searchedInput}`} className="flexy group hover:bg-[var(--wave-2)] px-2 py-4 rounded-lg" onClick={e => {e.stopPropagation();setIsExpanded(false);setSearchedInput("")}}>
                                <div className="w-fit flexy relative">
                                    See All
                                    <ArrowIcon className="size-4 ml-1 group-hover:ml-2 transition-all" />
                                    <span className="bg-black group-hover:opacity-100 opacity-0 h-0.5 w-full absolute bottom-0.5"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </StyleInputGrow>
        </>
    );
};

const StyleInputGrow = styled.div`
    position: relative;
    --size-button: 45px;
    color: white;
    display: flex;
    justify-content: flex-end;

    .input {
        padding-right: var(--size-button);
        height: var(--size-button);
        font-size: 15px;
        border: none;
        color: #fff;
        outline: none;
        width: var(--size-button);
        transition: all 0.3s ease;
        background-color: var(--bg-10);
        border-radius: 50px;
        cursor: pointer;
    }

    &.expanded .input {
        padding-left: 2.5rem;
        width: 100%;
        cursor: text;
    }

    .icon {
        position: absolute;
        width: var(--size-button);
        height: var(--size-button);
        top: 0;
        padding: 11px;
        cursor: pointer;
    }

    .icon svg {
        width: 100%;
        height: 100%;
    }
`;

export default SearchBar;