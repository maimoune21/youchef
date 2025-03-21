import React, { useEffect, useState } from "react";
import { DashboardClose, DashboardOpen } from "@/../../public/icons/Icons";
import All from "@/../../public/images/categories/All.jpg";
import Salad from "@/../../public/images/categories/Salad.png";
import Cake from "@/../../public/images/categories/Cake.png";
import Soup from "@/../../public/images/categories/Soup.png";
import Drinks from "@/../../public/images/categories/Drinks.png";
import Pasta from "@/../../public/images/categories/Pasta.png";
import Snaks from "@/../../public/images/categories/Snaks.jpg";
import Desserts from "@/../../public/images/categories/Desserts.jpeg";
import YouchefIcon from "@/../../public/images/YouChef-Icon.svg";
import Logo from "../../components/ui/Logo";
import Tajine from "@/../../public/images/Tajine.jpg";
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Countries from "@/components/ui/Countries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MealCard from "@/components/ui/MealCard";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const Categories = [
    { label: "All", img: All },
    { label: "Salad", img: Salad },
    { label: "Cake", img: Cake },
    { label: "Soup", img: Soup },
    { label: "Drinks", img: Drinks },
    { label: "Pasta", img: Pasta },
    { label: "Snaks", img: Snaks },
    { label: "Desserts", img: Desserts },
  ];

  const [activeTeam, setActiveTeam] = useState({});
  const [categorieSelected, setCategorieSelected] = useState("");
  // Compagy Component
  const Compagy = () => {
    const { isMobile } = useSidebar();
    const { state } = useSidebar();

    if (!activeTeam) {
      return null;
    }

    return (
      <SidebarMenu className={state === "collapsed" ? "flexy" : "w-full"}>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-gray-200 pointer-events-none select-none flexy ${
                  state === "collapsed" ? "rounded-full mt-2" : ""
                }`}
              >
                <div
                  className={`flex aspect-square size-8 items-center justify-center bg-white! rounded-full! border-1 border-[var(--bg-10)] ${
                    state === "collapsed" ? "ml-2" : "hidden"
                  }`}
                >
                  <img src={YouchefIcon} className="w-full p-1" alt="logo" />
                </div>
                <div className="grid text-left text-sm leading-tight">
                  <span
                    className={`truncate font-semibold text-base ${
                      state === "collapsed" ? "hidden" : ""
                    }`}
                  >
                    <Logo size="20" />
                  </span>
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  };

  const NavMain = () => {
    const { state } = useSidebar();
    return (
      <SidebarGroup className="h-full p-0!">
        <SidebarMenu className="mt-0">
          <span className="flexy">
            <h1
              className={`text-center font-bold border-b-1 border-[var(--bg-10)] px-14 pb-0.5 mb-1 ${
                state === "collapsed" ? "hidden" : ""
              }`}
            >
              Difficulty
            </h1>
          </span>
          <select
            name=""
            id=""
            className={`border-1 rounded-md py-2 pl-2 mx-4 text-sm ${
              state === "collapsed" ? "hidden" : ""
            }`}
          >
            <option value="" disabled selected>
              Select a Difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
        </SidebarMenu>
        <SidebarMenu className="mt-2">
          <span className="flexy">
            <h1
              className={`text-center font-bold border-b-1 border-[var(--bg-10)] px-15 pb-0.5 mb-1 ${
                state === "collapsed" ? "hidden" : ""
              }`}
            >
              Kitchen
            </h1>
          </span>
          <select
            name=""
            id=""
            className={`border-1 rounded-md py-2 pl-2 mx-4 text-sm ${
              state === "collapsed" ? "hidden" : ""
            }`}
          >
            <option value="" disabled selected>
              Select a Kitchen
            </option>
            <Countries />
          </select>
        </SidebarMenu>
        <SidebarMenu className="flex gap-4 h-full mt-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                className={`w-full relative pb-2! pr-1 gap-0! hover:no-underline cursor-pointer ${
                  state === "collapsed" ? "hidden" : ""
                }`}
              >
                <h1 className={`text-center w-full font-bold`}>Categories</h1>
                <span className="bg-10 h-[1.5px] w-full absolute bottom-0"></span>
              </AccordionTrigger>
              <AccordionContent
                className={`pt-4 ${state === "collapsed" ? "hidden" : ""}`}
              >
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    exit: { duration: 1 },
                  }}
                  className="flex flex-col gap-3"
                >
                  {Categories.map((categorie, index) => (
                    <SidebarMenuItem key={index} className="">
                      <div
                        onClick={() => {
                          setCategorieSelected(categorie.label);
                        }}
                      >
                        <SidebarMenuButton
                          tooltip="Reported Meals"
                          className={`sideBarCategoriesBtn ${
                            categorieSelected == categorie.label
                              ? "bg-10 hover:text-white"
                              : categorieSelected == "" &&
                                categorie.label == "All"
                              ? "bg-10 hover:text-white"
                              : ""
                          } group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pr-2! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:py-8! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pl-3! hover:brightness-95`}
                        >
                          <div className="flexy w-full">
                            <span className="font-bold text-[17px]">
                              {categorie.label}
                            </span>
                          </div>
                          <span className="w-15 h-11">
                            <img
                              src={categorie.img}
                              className="w-full h-full rounded-full object-cover"
                              alt={categorie.label}
                            />
                          </span>
                        </SidebarMenuButton>
                      </div>
                    </SidebarMenuItem>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SidebarMenu>
      </SidebarGroup>
    );
  };

  // Main component render
  return (
    <SidebarProvider className="-mt-5">
      <Sidebar
        collapsible="icon"
        className="relative h-[91vh]! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:w-16"
      >
        <SidebarHeader className={`z-50! pt-0`}>
          <Compagy />
        </SidebarHeader>
        <SidebarContent className="z-50! scrollbar">
          <NavMain />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="h-[91vh]">
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <CustomSidebarTrigger />
            <h1 className="text-xl p-2 font-bold">
              {!categorieSelected || categorieSelected == "All"
                ? "All Categories"
                : categorieSelected}
            </h1>
          </div>
        </header>
        <div className="flex-1 flex-col gap-4 p-4 max-sm:p-0 px-0 pt-0">
          <div className="h-auto overflow-hidden">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-tn:grid-cols-1! max-tn:pb-5! max-sm:pb-10! max-md:pb-20! gap-x-3 gap-y-4 px-2 h-auto pb-10 max-h-[85vh] overflow-y-auto scrollbar">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

// Custom Sidebar Trigger component
const CustomSidebarTrigger = () => {
  const { state, toggleSidebar } = useSidebar();

  return (
    <button
      className="-ml-1 cursor-pointer focus:outline-none"
      onClick={toggleSidebar}
      aria-label={state === "expanded" ? "Collapse Sidebar" : "Expand Sidebar"}
    >
      {state === "expanded" ? (
        <DashboardClose style="size-6!" />
      ) : (
        <DashboardOpen style="size-6" />
      )}
    </button>
  );
};

export default Meals;
