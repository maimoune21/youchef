import Logo from "../ui/Logo";
import "@/../css/Footer.css";
import Wave from "../ui/Wave";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
} from "@/../../public/icons/Icons";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <div className="hidden md:block mt-25">
            <Wave />
            <footer className="bg-10 pb-10 pt-16 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto h-64">
                    <div className="relative grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:text-center text-left links-container">
                        {/* Logo Section */}
                        <div className="logo-container relative flex flex-col justify-between place-items-center text-center gap-24">
                            <div className="mt-0 mr-11 logo">
                                <Logo size={32} />
                            </div>
                            <div className="logo-background-picture"></div>
                            <div className="space-y-4 align-self-end flexy flex-col gap-6 mr-15 socials">
                                <div className="relative m-0">
                                    <h3 className="font-semibold text-xl text-first">
                                        Follow Us
                                    </h3>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-36 h-0.5 bg-10"></div>
                                </div>
                                <ul className="space-y-2">
                                    <div className="flex space-x-4 justify-center sm:justify-start">
                                        <a
                                            aria-label="Instagram"
                                            className="SocialIcons"
                                        >
                                            <InstagramIcon />
                                        </a>
                                        <a
                                            aria-label="Facebook"
                                            className="SocialIcons"
                                        >
                                            <FacebookIcon />
                                        </a>
                                        <a
                                            aria-label="Twitter"
                                            className="SocialIcons"
                                        >
                                            <TwitterIcon />
                                        </a>
                                        <a
                                            aria-label="YouTube"
                                            className="SocialIcons"
                                        >
                                            <YouTubeIcon />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        {/* Navigation Sections */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 links-child">
                            <div className="space-y-4 flex flex-col gap-6">
                                <span className="relative flexy m-0">
                                    <h3 className="font-semibold text-xl text-first">
                                        About & Contact
                                    </h3>
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-44 h-0.5 bg-30"></div>
                                </span>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/aboutUs"
                                            className="footer-link"
                                        >
                                            About YouChef
                                        </Link>
                                    </li>
                                    <li>
                                        <ScrollLink
                                            to="PopularMeals"
                                            smooth={true}
                                            duration={500}
                                            offset={-50}
                                            className="footer-link"
                                        >
                                            Popular Meals
                                        </ScrollLink>
                                    </li>
                                    <li>
                                        <Link
                                            href="/FAQS"
                                            className="footer-link"
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4 flex flex-col gap-6">
                                <span className="relative m-0 flex flex-col">
                                    <h3 className="font-semibold text-xl text-first">
                                        Categories
                                    </h3>
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-30"></div>
                                </span>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="#" className="footer-link">
                                            Different Meals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">
                                            Cakes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">
                                            Soups
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="footer-link">
                                            Drinks
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4 flex flex-col gap-6">
                                <span className="relative flex flex-col m-0">
                                    <h3 className="font-semibold text-xl text-first">
                                        Legal & Policies
                                    </h3>
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-30"></div>
                                </span>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/privacy"
                                            className="footer-link"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/termsOfService"
                                            className="footer-link"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span className="absolute -bottom-4 -right-20 w-full h-[1.5px] bg-black"></span>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-4 pt-2.5 text-sm text-first grid grid-cols-2 z-[999]">
                        <span></span>
                        <strong className="text-base ml-20 max-lg:ml-0">
                            <b>&copy;</b> {new Date().getFullYear()} YouChef.
                            All rights reserved.
                        </strong>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
