import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";

const Header = ({ header_data }:any) => {
  const [abovetop, setabovetop] = useState("8rem");
  const [aboveBackground, setaboveBackground] = useState("white");
  const [menuOpen, setMenuOpen] = useState(false);

  // const [data, setData] = useState(null);
    const [headerData, setHeaderData] = useState<any>(null);
  useEffect(() => {

    const handleScroll = () => {
      const backgroundColor =
        window.scrollY < 1 ? (window.innerWidth < 1024 ? "white" : "white") : "#cbdcf8";
      setaboveBackground(backgroundColor);

      const top = window.scrollY < 1 ? (window.innerWidth < 1024 ? "8rem" : "8rem") : "0px";
      setabovetop(top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

   const baseUrl = import.meta.env.VITE_BASE_URL;
  const schoolName = import.meta.env.VITE_SCHOOL;

  useEffect(() => {


    // // Fetch header config
    axios
      .get(`${baseUrl}/${schoolName}/items/config?fields=*,logo.data.full_url`)
      .then((response) => {
        setHeaderData(response.data);
        // console.log(response.data,"header data")
      })
      .catch((error) => {
        console.error("Error fetching header data:", error);
      });
  }, []);
  return (
    <>
      <div className="flex justify-center h-32 pt-3 text-center bg-[#CBDCF8] bg-repeat-x">
        <img
          className="h-20 w-20 md:mr-1"
          src={
          headerData?.data[0]?  headerData?.data[0]?.logo?.data?.full_url.replace("http://", "https://") : "/logo.png"
          
          }
          alt="School Logo"
        />
        <div className="text-[#272d57] items-center">
          <span className="font-serif text-xl tracking-normal ml-1 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize">
            {headerData?.data[0]?.title }
          </span>
          <p className="flex ml-10 md:ml-2 md:justify-center font-medium md:font-semibold capitalize">
            {headerData?.data[0]?.address || "Dwarka Nagar Bhopal"}
          </p>
        </div>
      </div>

      <nav
        className="z-10 shadow-sm sticky flex flex-wrap items-center justify-center bg-white md:py-3 lg:py-3"
        style={{ top: abovetop, backgroundColor: aboveBackground }}
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          className="items-center block px-3 py-2 text-black border border-teal-400 rounded cursor-pointer lg:hidden hover:border-white"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`flex-grow w-full lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
          id="menu"
        >
          <div className="text-sm lg:flex-grow sm:pl-0 lg:pl-52">
            <NavLink
              to={"/"}
              className="block mt-2 mr-4 text-center text-black hover:no-underline lg:inline-block lg:mt-0"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div className="block text-center lg:inline-block relative group">
              <button
                className="inline-flex mt-2 mr-4 text-black lg:pl-24 lg:mt-0"
                aria-haspopup="true"
              >
                <span className="mr-1">About Us</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-20 hidden pt-0 pb-0 text-gray-700 dropdown-menu lg:group-hover:block lg:group-focus:block lg:ml-[40px]">
                <li className="border-b border-gray-700">
                  <NavLink
                    to="/AboutUs"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="border-b border-gray-700">
                  <Link
                    to="/DirectorMessage"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Director Message
                  </Link>
                </li>
                <li className="border-b border-gray-700">
                  <Link
                    to="/ManagementDesk"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Management Message
                  </Link>
                </li>
                <li className="border-b border-gray-700">
                  <Link
                    to="/PrincipalMessage"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Principal Message
                  </Link>
                </li>
              </ul>
            </div>

            {/* Academics Dropdown */}
            <div className="block text-center lg:inline-block relative group">
              <button
                className="inline-flex mt-2 mr-4 text-black lg:pl-24 lg:mt-0"
                aria-haspopup="true"
              >
                <span className="mr-1">Academics</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute z-20 hidden pt-0 pb-0 text-gray-700 dropdown-menu lg:group-hover:block lg:group-focus:block lg:ml-[40px]">
                <li className="border-b border-gray-700">
                  <Link
                    to="/AdmissionProcedure"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Admission Procedure
                  </Link>
                </li>
                <li className="border-b border-gray-700">
                  <Link
                    to="/Facilities"
                    className="block px-4 py-2 whitespace-nowrap bg-[#272d57] text-yellow-50 hover:bg-white hover:text-black hover:no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Facilities
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/Gallery"
              className="block mt-2 mr-4 text-center text-black lg:pl-24 lg:inline-block lg:mt-0 hover:no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/Contactus"
              className="block mt-2 mr-4 text-center text-black lg:pl-24 lg:inline-block lg:mt-0 hover:no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cms.schoolscoop.co.in/admin/#/login?project=vidyaniketankf"
              className="block px-2 py-2 mt-2 text-sm leading-none text-center text-white bg-red-500 border rounded lg:ml-28 lg:inline-block hover:border-transparent lg:mt-0"
            >
              Login
            </a>
          </div>
          </div>
        </nav>
      

    </>
  );
};

export default Header;
