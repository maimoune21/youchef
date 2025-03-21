import React from "react";
import Navbar from "../components/parts/NavBar";
import Footer from "../components/parts/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className="pt-25 mb-10! max-md:pb-10 min-h-[50vh] grid place-items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
