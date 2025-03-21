import { useEffect, useState } from "react";
import {
  HomeIcon,
  MealsIcon,
  PostIcon,
  ProfileIcon,
  ManageIcon,
  HeartIcon,
} from "@/../../public/icons/Icons";
import Logo from "../ui/Logo";
import { Link } from "@inertiajs/react";

const navLinks = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/meals", label: "Meals", icon: MealsIcon },
  { path: "/postMeal", label: "Post", icon: PostIcon },
  { path: "/favorites", label: "Favorites", icon: (props) => <HeartIcon size="size-7 fill-none" {...props} /> },
  { path: "/profile/meals", label: "Profile", icon: ProfileIcon },
  {
    path: "/Dashboard/ReportedMeals",
    label: "Manage",
    icon: ManageIcon,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbaranim w-full -top-20 px-4 flex justify-center fixed z-50 transition-all duration-200 ${isScrolled ? 'py-0' : 'py-2'}`}>
        <div className="w-full max-w-6xl bg-30 rounded-full flex shadow-md items-center justify-between px-8 py-2">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="bg-10 rounded-full px-5 py-1.5 flexy space-x-6 relative gap-6">
              {navLinks.map((navLink, index) => (
                <Link
                  href={navLink.path}
                  key={index}
                  className="flex flex-col items-center text-first text-xs group mr-0"
                >
                  <navLink.icon/>
                  <span className="bg-10 text-first text-[0.8rem] py-1 px-2 rounded absolute top-12 scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                    {navLink.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Icon (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-10 p-2 rounded-full text-first">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Search Icon (Mobile) */}
          <div className="md:hidden">
            <button className="bg-10 p-2 rounded-full text-first">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
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