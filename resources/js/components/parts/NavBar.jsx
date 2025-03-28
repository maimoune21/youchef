import { useEffect, useState } from "react";
import Meal from "@/../../public/images/BlankMeal.png";
import { router, usePage } from "@inertiajs/react";
import {
    HomeIcon,
    MealsIcon,
    PostIcon,
    ProfileIcon,
    ManageIcon,
    HeartIcon,
    ArrowIcon,
} from "@/../../public/icons/Icons";
import Logo from "../ui/Logo";
import { Link } from "@inertiajs/react";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchedInput, setSearchedInput] = useState("");
    const { SearchedMeals } = usePage().props
    console.log(SearchedMeals)
    // Access the authenticated user data
    const { auth } = usePage().props;
    const isAuthenticated = !!auth.user;
    const isAdmin = isAuthenticated && auth.user.idRole === 1;
    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // navLinks Dynamically
    const navLinks = [
        { path: "/", label: "Home", icon: HomeIcon },
        { path: "/meals", label: "Meals", icon: MealsIcon },
        ...(isAuthenticated
            ? [
                { path: "/postMeal", label: "Post", icon: PostIcon },
                {
                    path: "/favorites",
                    label: "Favorites",
                    icon: (props) => (
                        <HeartIcon size="size-7 fill-none" {...props} />
                    ),
                },
            ]
            : []),
        {
            path: isAuthenticated ? "/privateProfile" : "/login",
            label: isAuthenticated ? "Profile" : "Login",
            icon: (props) =>
                isAuthenticated ? (
                    auth.user.profile_img ? (
                        <img
                            src={`/uploads/users/${auth.user.profile_img}`}
                            alt="profile"
                            className="w-6.5 rounded-full object-cover"
                            {...props}
                        />
                    ) : (
                        <span className="bg-soft mx-1 text-black font-bold text-base p-0.5 aspect-square rounded-full flexy">
                            {auth.user.lastName.charAt(0)}
                        </span>
                    )
                ) : (
                    <ProfileIcon {...props} />
                ),
        },
        ...(isAdmin
            ? [
                {
                    path: "/dashboard/reportedMeals",
                    label: "Manage",
                    icon: ManageIcon,
                },
            ]
            : []),
    ];

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            router.get(`/meals?search=${searchedInput}`);
        }
    };

    return (
        <>
            <header
                className={`navbaranim w-full -top-20 px-4 flex justify-center fixed z-50 transition-all duration-200 ${isScrolled ? "py-0" : "py-2"
                    }`}
            >
                <div className="relative w-full max-w-6xl bg-30 rounded-full flex shadow-md items-center justify-between px-8 py-2">
                    {/* Logo */}
                    <Link href="/" className={`flex items-center ${isExpanded ? "hidden!" : ""}`}>
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex ${isExpanded ? "hidden!" : ""}`}>
                        <div className="bg-10 rounded-full px-5 py-1.5 flexy space-x-6 relative gap-6">
                            {navLinks.map((navLink, index) => (
                                <Link
                                    href={navLink.path}
                                    key={index}
                                    className="flex flex-col items-center text-first text-xs group mr-0"
                                >
                                    <navLink.icon />
                                    <span className="bg-10 z-2 text-first text-[0.8rem] py-1 px-2 rounded absolute top-12 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                                        {navLink.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Search Icon */}
                    <SearchBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} setSearchedInput={setSearchedInput} handleKeyDown={handleKeyDown} />

                    {
                        SearchedMeals && searchedInput &&
                        <div className="absolute top-[110%] left-1/2 overflow-y-scroll scrollbar -translate-x-1/2 rounded-xl w-[90%] p-5 bg-30 custom-shadow max-h-[70vh]">
                            <div className="flex flex-col gap-2">
                                {
                                    SearchedMeals.slice(0, 10).filter(meal => meal.title.toLowerCase().includes(searchedInput.toLowerCase())).map(meal =>
                                        <Link href={`/mealDetails/${meal.idMeal}`} className="hover:bg-[var(--wave-2)] px-2 py-4 rounded-lg flex items-center gap-2" onClick={e=>e.stopPropagation()}>
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
                                            <p className="text-xl">{meal.title}</p>
                                        </Link>
                                    )
                                }
                                <Link href={`/meals?search=${searchedInput}`} className="flexy group hover:bg-[var(--wave-2)] px-2 py-4 rounded-lg" onClick={e=>e.stopPropagation()}>
                                    <div className="w-fit flexy relative">
                                        See All
                                        <ArrowIcon className="size-4 ml-1 group-hover:ml-2 transition-all" />
                                        <span className="bg-black group-hover:opacity-100 opacity-0 h-0.5 w-full absolute bottom-0.5"></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-30 border-t border-gray-200 z-50">
                <div className="flex justify-around items-center bg-10 text-first py-2">
                    {navLinks.map((navLink, index) => (
                        <Link
                            href={navLink.path}
                            key={index}
                            className="flex flex-col items-center text-xs px-3"
                        >
                            <navLink.icon />
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
