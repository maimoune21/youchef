import React from "react";
import Navbar from "../components/parts/NavBar";
import Footer from "../components/parts/Footer";

const Layout = ({children}) => {
  // const location = useLocation();
  // const hiddenOverflowPaths = [
  //   "/youchef-ui/Dashboard/ReportedMeals",
  //   "/youchef-ui/Dashboard/UserAccounts",
  //   "/youchef-ui/Dashboard/UserMessages",
  //   "/youchef-ui/Meals",
  // ];

  // const noFooter = !hiddenOverflowPaths.includes(location.pathname);

  // useEffect(() => {
  //   if (hiddenOverflowPaths.includes(location.pathname)) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }

  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="pt-25 mb-10! max-md:pb-10 min-h-[50vh] grid place-items-center">
        {children}
      </main>
      {/* {noFooter && <Footer />} */}
    </>
  );
};

export default Layout;
