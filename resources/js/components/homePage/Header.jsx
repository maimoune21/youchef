import { useState, useEffect, useRef } from "react";
import { usePage } from "@inertiajs/react";
import Logo from "../ui/Logo";
import CustomCursor from "../ui/custom-cursor";
import { AboutUsIcon, ContactUsIcon } from "@/../../public/icons/Icons";
import Burger from "@/../../public/images/header/HeaderBurger.png";
import Salade from "@/../../public/images/header/salade.png";
import Pizza from "@/../../public/images/header/pizza.png";
import Spagetti from "@/../../public/images/header/spagetti.png";
import Vegetables from "@/../../public/images/header/vegetables.png";
import { Link } from "@inertiajs/react";
import { Link as ScrollLink } from "react-scroll";
import BrowseRecipesButton from "../ui/BrowseRecipesButton";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import "@/../css/ShadowBackground-animation.css";

export default function Header() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    const [api, setApi] = useState(null);

    const slides = [
        { id: 1, image: Salade, alt: "Fresh Salad" },
        { id: 2, image: Pizza, alt: "Pizza" },
        { id: 3, image: Vegetables, alt: "Vegetables" },
        { id: 4, image: Burger, alt: "Delicious Burger" },
        { id: 5, image: Spagetti, alt: "Spagetti" },
    ];

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
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setPos({ x: 0, y: 0 });
        setIsHovering(false);
        setIsPaused(false);
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
        <div className="border-3 border-white! bg-gradient-to-tr from-[var(--soft-blue)] via-[var(--soft-blue)] via-60% to-white relative grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-center items-center w-[90%] md:w-[90%] lg:w-[90%] rounded-3xl custom-shadow -mt-5 mb-20 min-h-fit md:min-h-[85vh] max-md:max-h-[232px]">
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
                        <p className="hidden md:block text-xs">Contact Us</p>
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
                    Your way to discover variety of meals from different places
                    cultures and occasion to share your own throughout a strong
                    food lovers community
                </p>
                <Link href="/meals">
                    <BrowseRecipesButton label="Browse Recipes" />
                </Link>
            </div>

            <div
                className="relative flex items-center justify-center h-full text-white select-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="pulse-radius absolute rounded-full w-[60%] md:h-[60%] aspect-square bg-10 blur-2xl opacity-40 brightness-90"
                    style={{
                        transform: `translate(${-smoothPos.x * 25}px, ${
                            -smoothPos.y * 25
                        }px)`,
                    }}
                />

                <Carousel
                    className="w-full max-w-[80%] h-[400px]"
                    ref={carouselRef}
                    setApi={setApi}
                    opts={{
                        loop: true,
                        dragFree: false,
                        containScroll: "trimSnaps",
                        watchDrag: false,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {slides.map((slide) => (
                            <CarouselItem
                                key={slide.id}
                                className="flex items-center justify-center"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-[80%] max-w-[400px] aspect-square brightness-[90%] object-contain"
                                    style={{
                                        transform: `translate(${
                                            -smoothPos.x * 30
                                        }px, ${-smoothPos.y * 30}px)`,
                                    }}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
