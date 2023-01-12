import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [pageState, setPageState] = useState("Sign in");

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 ">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="realtor"
            className="h-5 cursor-pointer "
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500 "
              } `}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500 "
              } `}
            >
              <Link to="/offers">Offers</Link>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500 "
              } `}
            >
              <Link to="/profile"> {pageState} </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
