import React from "react";
import Navbar from "../components/parts/NavBar";
import Footer from "../components/parts/Footer";
import { usePage } from "@inertiajs/react";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({children}) => {
  const {component} = usePage();
  const showNavbar = component !== "admin/Dashboard" && component !== "meals/Meals";
  const showFooter = component !== "admin/Dashboard" && component !== "meals/Meals";

  return (
    <>
      {showNavbar && <Navbar />}
      <main className={`pt-25 mb-13 max-md:pb-10 min-h-[50vh] grid place-items-center ${(component == "admin/Dashboard" || component == "meals/Meals") && "md:mb-0! max-h-[100vh] overflow-hidden"}`}>
        {children}
        <Toaster position="top-right" />
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
