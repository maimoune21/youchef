import React, { useEffect, useState } from "react";
import { DashboardClose, DashboardOpen, FilterIcon } from "@/../../public/icons/Icons";
import YouchefIcon from "@/../../public/images/YouChef-Icon.svg";
import { motion } from "framer-motion";
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

const Meals = ({ dataMeals, Kitchen, dataCategories, categorySelected, kitchenSelected, thisUser, favoriteMeals }) => {
  const [meals, setMeals] = useState([]);
  const Categories = [
    { name: 'All' ,picture: "all.png" },
    ...dataCategories
  ];
  
  const [categorieSelectedName, setCategorieSelectedName] = useState(categorySelected ? categorySelected : "All" );
  const [categorieSelected, setCategorieSelected] = useState(categorieSelectedName ? Categories.find(cat=>cat.name == categorieSelectedName).idCategory : "");
  const [kitchenSelectedName, setKitchenSelectedName] = useState(kitchenSelected ? kitchenSelected : "" );
  const [countries, setCountries] = useState(kitchenSelectedName ? Kitchen.find(kit=>kit.name == kitchenSelectedName).idKitchen : "");
  const [difficulty, setDifficulty] = useState();

  useEffect(() => {
    setMeals(
      dataMeals.filter(meal => {
        const [hours, minutes, seconds] = meal.duration.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes + seconds / 60;
        
        const isCategoryMatch = categorieSelected ? meal.idCategory == categorieSelected : true;
        const isCountryMatch = countries ? meal.idKitchen == countries : true;
        const isDifficultyMatch = difficulty == "hard"? totalMinutes > 20 : difficulty == "normal" ? totalMinutes >= 10 && totalMinutes <= 20 : difficulty == "easy" ? totalMinutes < 10 : true;
        return isCategoryMatch && isCountryMatch && isDifficultyMatch;
      })
    );
  }, [categorieSelected, countries, difficulty, dataMeals]);
  
  const [activeTeam, setActiveTeam] = useState({});
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
                className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-gray-200 pointer-events-none select-none flexy ${state === "collapsed" ? "rounded-full mt-2" : "h-10"
                  }`}
              >
                <div
                  className={`flex aspect-square size-8 items-center justify-center bg-white! rounded-full! border-1 border-[var(--bg-10)] ${state === "collapsed" ? "ml-2" : "hidden"
                    }`}
                >
                  <img src={YouchefIcon} className="w-full p-1" alt="logo" />
                </div>
                <div className="grid text-left text-sm leading-tight">
                  <span
                    className={`flexy gap-2 truncate font-semibold text-base ${state === "collapsed" ? "hidden" : ""
                      }`}
                  >
                    <FilterIcon style='size-5' />
                    <p>Filter</p>
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
              className={`text-center font-bold border-b-1 border-[var(--bg-10)] px-14 pb-0.5 mb-1 ${state === "collapsed" ? "hidden" : ""
                }`}
            >
              Difficulty
            </h1>
          </span>
          <select
            name=""
            id=""
            value={difficulty}
            className={`border-1 rounded-md py-2 pl-2 mx-4 text-sm ${state === "collapsed" ? "hidden" : ""
              }`}
            onChange={e => {setDifficulty(e.target.value);}}
          >
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
        </SidebarMenu>
        <SidebarMenu className="mt-2">
          <span className="flexy">
            <h1
              className={`text-center font-bold border-b-1 border-[var(--bg-10)] px-15 pb-0.5 mb-1 ${state === "collapsed" ? "hidden" : ""
                }`}
            >
              Kitchen
            </h1>
          </span>
          <select
            name=""
            id=""
            value={countries}
            className={`border-1 rounded-md py-2 pl-2 mx-4 text-sm ${state === "collapsed" ? "hidden" : ""
              }`}
            onChange={e => setCountries(e.target.value)}
          >
            <option value="">All Kitchens</option>
            <Countries countries={Kitchen}/>
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
                className={`w-full relative pb-2! pr-1 gap-0! hover:no-underline cursor-pointer ${state === "collapsed" ? "hidden" : ""
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
                    <SidebarMenuItem key={index}>
                      <div
                        onClick={_ => setCategorieSelected(categorie.idCategory)}
                      >
                        <SidebarMenuButton
                          tooltip="Reported Meals"
                          className={`sideBarCategoriesBtn ${categorieSelected == categorie.idCategory
                            ? "bg-10 hover:text-white"
                            : categorieSelected == "" &&
                              categorie.idCategory == "All"
                              ? "bg-10 hover:text-white"
                              : ""
                            } group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pr-2! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:py-8! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:pl-3! hover:brightness-95`}
                        >
                          <div className="flexy w-full">
                            <span className="font-bold text-[17px]">
                              {categorie.name}
                            </span>
                          </div>
                          <span className="w-15 h-11">
                            <img
                              src={`images/categories/${categorie.picture}`}
                              className="w-full h-full rounded-full object-cover"
                              alt={categorie.name}
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
    <SidebarProvider className="-mt-7">
      <Sidebar
        collapsible="icon"
        className="relative h-[91vh]! group-has-[[data-collapsible=icon][data-state=collapsed]]/sidebar-wrapper:w-16"
      >
        <SidebarHeader className={`z-50! pt-0`}>
          <Compagy />
        </SidebarHeader>
        <SidebarContent className="z-50! scrollbar mb-5!">
          <NavMain />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="h-[91vh]">
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <CustomSidebarTrigger />
            <h1 className="text-xl p-2 font-bold">
              {categorieSelected === "All" || !categorieSelected
                ? "All Categories"
                : Categories.find(category => category.idCategory === categorieSelected)?.name || categorieSelected}
            </h1>
          </div>
        </header>
        <div className="flex-1 flex-col gap-4 p-4 max-sm:p-0 px-0 pt-0">
          <div className="h-auto overflow-hidden">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-tn:grid-cols-1! max-tn:pb-5! max-sm:pb-10! max-md:pb-20! gap-x-5.5 gap-y-5 px-6 h-auto pb-10 max-h-[85vh] overflow-y-auto scrollbar">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} thisUser={thisUser} favoriteMeals={favoriteMeals} />
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
      aria-name={state === "expanded" ? "Collapse Sidebar" : "Expand Sidebar"}
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
