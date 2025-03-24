import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Logo from "../ui/Logo";
import CustomCursor from "../ui/custom-cursor";
import { AboutUsIcon, ContactUsIcon } from "@/../../public/icons/Icons";
import Burger from "@/../../public/images/HeaderBurger.png";
import { Link } from "@inertiajs/react";
import { Link as ScrollLink } from "react-scroll";
import BrowseRecipesButton from "../ui/BrowseRecipesButton";
// Import shadow background animation
import "@/../css/ShadowBackground-animation.css";

export default function Header() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    // Access the authenticated user data
    const { auth } = usePage().props;
    const userName = auth.user ? `${auth.user.lastName}` : null;
    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } =
            currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / (width / 2);
        const y = (clientY - top - height / 2) / (height / 2);
        setPos({ x, y });
        setMousePos({ x: clientX, y: clientY });
    };
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setPos({ x: 0, y: 0 });
        setIsHovering(false);
    };
    useEffect(() => {
        let animationFrameId;
        const smoothMove = () => {
            setSmoothPos((prev) => ({
                x: prev.x + (pos.x - prev.x) * 0.02,
                y: prev.y + (pos.y - prev.y) * 0.02,
            }));
            animationFrameId = requestAnimationFrame(smoothMove);
        };
        smoothMove();
        return () => cancelAnimationFrame(animationFrameId);
    }, [pos]);
    // Hide the default cursor when hovering
    useEffect(() => {
        if (isHovering) {
            document.body.classList.add("cursor-none");
        } else {
            document.body.classList.remove("cursor-none");
        }
        return () => {
            document.body.classList.remove("cursor-none");
        };
    }, [isHovering]);

    return (
        <div className="bg-gradient-to-tr from-[var(--soft-blue)] via-[var(--soft-blue)] via-60% to-white relative grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-center items-center w-[90%] md:w-[90%] lg:w-[90%] rounded-3xl custom-shadow -mt-5 mb-20 min-h-fit md:min-h-[85vh] max-md:max-h-[232px]">
            {userName ? (
                <h1 className="absolute top-4 left-6 md:top-4 md:left-8 font-bold text-3xl md:text-3xl">
                    Hello <span className="text-green">{userName}</span>
                </h1>
            ) : (
                ""
            )}

            <div className="absolute top-3 right-3 md:top-3 md:right-3 grid grid-cols-2 cursor-pointer! z-1">
                <ScrollLink
                    to="ContectUs"
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    <div className="flexy md:flex-col">
                        <div className="flexy">
                            <span className="border-2 border-black rounded-full w-fit aspect-square m-1 p-1 flexy">
                                <ContactUsIcon size="size-4.5" />
                            </span>
                        </div>
                        <p className="hidden md:block text-xs">
                            Contact Us
                        </p>
                    </div>
                </ScrollLink>
                <Link href="/aboutUs">
                    <div className="flexy md:flex-col">
                        <div className="flexy">
                            <AboutUsIcon size="size-9.5" />
                        </div>
                        <p className="hidden md:block text-xs">About Us</p>
                    </div>
                </Link>
            </div>

            <CustomCursor
                isVisible={isHovering}
                position={mousePos}
                customContent={null}
            />
            <div className="z-10 flex flex-col gap-2 md:gap-10 justify-center max-md:items-center h-full w-full px-5 mt-20 py-10 md:pl-10 max-md:text-center">
                <h1 className="max-md:text-4xl text-5xl flex font-bold text-black md:gap-2 gap-2 flex-col lg:flex-row sm:flex-row md:flex-col max-md:items-center">
                    <span className="flex gap-2">
                        <p>Welcome</p>
                        <p>To</p>
                    </span>
                    <Logo color="black" size={45} className="block!" />
                </h1>
                <p className="text-second text-xl md:text-lg sm:pr-16">
                    Your way to discover variety of meals from different
                    places cultures and occasion to share your own
                    throughout a strong food lovers community
                </p>
                <Link href="/meals">
                    <BrowseRecipesButton label="Browse Recipes" />
                </Link>
            </div>

            {/* Content */}
            <div
                className="relative flexy text-center h-full text-white"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="pulse-radius absolute rounded-full w-[60%] md:h-[60%] aspect-square bg-10 blur-2xl opacity-40 brightness-90"
                    style={{
                        transform: `translate(${-smoothPos.x * 25}px, ${-smoothPos.y * 25
                            }px)`,
                    }}
                />
                <img
                    src={Burger}
                    alt="Burger"
                    className="absolute left-1/2 transform -translate-x-1/2 max-sm:w-[65%] max-md:w-[60%] max-lg:w-[75%] max-xl:w-[60%] max-2xl:w-[55%] aspect-square z-0 brightness-[90%]"
                    style={{
                        transform: `translate(${-smoothPos.x * 30}px, ${-smoothPos.y * 30
                            }px)`,
                    }}
                />
            </div>
        </div>
    );
}
