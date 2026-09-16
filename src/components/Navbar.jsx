import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { FiMenu, FiX, FiChevronDown, FiPlus, FiMinus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/LOgo/LOGO.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [hideTop, setHideTop] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);

  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const [mobileSubMenu, setMobileSubMenu] = useState("");

  const location = useLocation();
  const isBlogPage =
  location.pathname === "/blogs" ||
  location.pathname.startsWith("/blog/");

  // =========================
  // CLOSE ALL MENUS
  // =========================

  const closeAllMenus = () => {
    setMenuOpen(false);

    setServiceOpen(false);

    setMobileServiceOpen(false);

    setMobileSubMenu("");

    clearTimeout(window.navbarTimeout);
  };

  // =========================
  // SCROLL EFFECT
  // =========================
  useEffect(() => {
    const handleClickOutside = () => {
      setServiceOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHideTop(true);
      } else {
        setHideTop(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // ROUTE CHANGE CLOSE
  // =========================

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  // =========================
  // BODY SCROLL LOCK
  // =========================

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // =========================
  // NAVBAR TEXT COLOR
  // =========================

  const navTextColor =
  scrolled || isBlogPage ? "text-gray-900" : "text-white";

  // =========================
  // SERVICES DATA
  // =========================

  // =========================
  // SERVICES DATA
  // =========================

  const servicesData = {
    web: [
      {
        name: "E-commerce Website",
        link: "/ecommerce",
      },
      {
        name: "Website Designing",
        link: "/website-designing",
      },
      {
        name: "CRM Software",
        link: "/crm-software",
      },
    ],

    marketing: [
       
      {
        name: "Social Media Optimization",
        link: "/smo",
      },
      {
        name: "Advertisements",
        link: "/Advertisements",
      },
    ],
    seo: [
      {
        name: "Search Engine Optimization",
        link: "/seo",
      },
    ],
    Business: [
      {
        name: "GMB Creation",
        link: "/gmb",
      },
    ],

    graphic: [
      {
        name: "Graphic Designing",
        link: "/graphic",
      },
      {
        name: "Video Editing",
        link: "/video",
      },
    ],
  };

  // =========================
  // NAV LINK STYLE
  // =========================

  const navLinkStyle = `
    relative group overflow-hidden
    transition-all duration-300
    hover:-translate-y-[2px]
  `;

  const navTextStyle = `
    relative z-10
    transition-all duration-300
    group-hover:text-orange-500
  `;

  return (
    <>
      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}
      <div
        className={`bg-[#0B63F6] text-white text-sm px-8 py-2 justify-between items-center transition-all duration-500 hidden lg:flex relative z-[10000] ${
          hideTop ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            +91-8377070881
          </span>

          <span className="flex items-center gap-2">
            <MdEmail />
            info@endlesssol.com
          </span>
        </div>

        <div className="flex items-center gap-4 relative z-[99999]">
          <a
            href="https://www.linkedin.com/in/anurag-chhabra-675a4333b/"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto cursor-pointer"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.instagram.com/solutionendless/"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto cursor-pointer"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}

      <nav
  className={`fixed left-0 w-full z-[9999]
  ${!hideTop && isBlogPage ? "top-2" : "top-0"}
  transition-all duration-500
  ${
    scrolled || isBlogPage
      ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
      : "bg-transparent py-5"
  }`}
>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* ========================= */}
          {/* LOGO */}
          {/* ========================= */}

          <Link to="/" onClick={closeAllMenus}>
            <img
              src={Logo}
              alt="logo"
              className="w-28 sm:w-32 lg:w-30 mt-5 h-auto hover:scale-105 transition duration-300"
            />
          </Link>

          {/* ========================= */}
          {/* DESKTOP MENU */}
          {/* ========================= */}

          <div
            className={`hidden lg:flex items-center gap-8 xl:gap-12 font-semibold text-[17px]
transition-colors duration-300 ${navTextColor}`}
          >
            {/* HOME */}

            <Link to="/" onClick={closeAllMenus} className={navLinkStyle}>
              <span className={navTextStyle}>Home</span>

              <span
                className="absolute left-0 -bottom-1 h-[3px]
                w-0 bg-orange-500 rounded-full
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </Link>

            {/* ABOUT */}

            <Link to="/about" onClick={closeAllMenus} className={navLinkStyle}>
              <span className={navTextStyle}>About Us</span>

              <span
                className="absolute left-0 -bottom-1 h-[3px]
                w-0 bg-orange-500 rounded-full
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </Link>


            {/* ========================= */}
            {/* SERVICES */}
            {/* ========================= */}

            <div className="relative">
              {/* BUTTON */}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServiceOpen(!serviceOpen);
                }}
                className="relative group flex items-center gap-2
    transition-all duration-300 hover:-translate-y-[2px]"
              >
                <span
                  className={`transition-all duration-300 ${
                    serviceOpen
                      ? "text-orange-500"
                      : "group-hover:text-orange-500"
                  }`}
                >
                  Services
                </span>

                <FiChevronDown
                  className={`transition-all duration-300 ${
                    serviceOpen
                      ? "rotate-180 text-orange-500"
                      : "group-hover:text-orange-500"
                  }`}
                />
              </button>

              {/* MAIN DROPDOWN */}

              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-full left-0 mt-2
    w-[280px] bg-[#f3f3f3]
    rounded-md shadow-2xl overflow-hidden
    transition-all duration-300 z-[999]
    ${
      serviceOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
              >
                {/* WEB SERVICES */}

                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setMobileSubMenu(mobileSubMenu === "web" ? "" : "web")
                    }
                    className="w-full flex items-center justify-between
        px-5 py-4 text-[17px] font-semibold
        text-gray-800 hover:bg-white
        hover:text-orange-500 transition-all duration-300"
                  >
                    Web Services
                    <IoIosArrowForward
                      className={`transition-all duration-300 ${
                        mobileSubMenu === "web"
                          ? "rotate-90 text-orange-500"
                          : ""
                      }`}
                    />
                  </button>

                  {/* SUB MENU */}

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === "web" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {servicesData.web.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeAllMenus}
                          className="block px-8 py-4
                text-[15px] text-gray-700
                hover:bg-gray-100
                hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SOCIAL MEDIA MARKETING */}

                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setMobileSubMenu(
                        mobileSubMenu === "marketing" ? "" : "marketing",
                      )
                    }
                    className="w-full flex items-center justify-between
        px-5 py-4 text-[17px] font-semibold
        text-gray-800 hover:bg-white
        hover:text-orange-500 transition-all duration-300"
                  >
                    Social Media Marketing
                    <IoIosArrowForward
                      className={`transition-all duration-300 ${
                        mobileSubMenu === "marketing"
                          ? "rotate-90 text-orange-500"
                          : ""
                      }`}
                    />
                  </button>

                  {/* SUB MENU */}

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === "marketing"
                        ? "max-h-[500px]"
                        : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {servicesData.marketing.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeAllMenus}
                          className="block px-8 py-4
                text-[15px] text-gray-700
                hover:bg-gray-100
                hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/*  SEO */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setMobileSubMenu(mobileSubMenu === "seo" ? "" : "seo")
                    }
                    className="w-full flex items-center justify-between
    px-5 py-4 text-[17px] font-semibold
    text-gray-800 hover:bg-white
    hover:text-orange-500 transition-all duration-300"
                  >
                    SEO
                    <IoIosArrowForward
                      className={`transition-all duration-300 ${
                        mobileSubMenu === "seo"
                          ? "rotate-90 text-orange-500"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === "seo" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {servicesData.seo.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeAllMenus}
                          className="block px-8 py-4 text-[15px] text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GOOGLE BUSINESS PROFILE */}

                <div className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setMobileSubMenu(
                        mobileSubMenu === "Business" ? "" : "Business",
                      )
                    }
                    className="w-full flex items-center justify-between
    px-5 py-4 text-[17px] font-semibold
    text-gray-800 hover:bg-white
    hover:text-orange-500 transition-all duration-300"
                  >
                    Google Business Profile
                    <IoIosArrowForward
                      className={`transition-all duration-300 ${
                        mobileSubMenu === "Business"
                          ? "rotate-90 text-orange-500"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === "Business" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {servicesData.Business.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeAllMenus}
                          className="block px-8 py-4 text-[15px] text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GRAPHIC DESIGNING */}

                <div>
                  <button
                    onClick={() =>
                      setMobileSubMenu(
                        mobileSubMenu === "graphic" ? "" : "graphic",
                      )
                    }
                    className="w-full flex items-center justify-between
        px-5 py-4 text-[17px] font-semibold
        text-gray-800 hover:bg-white
        hover:text-orange-500 transition-all duration-300"
                  >
                    Graphic Designing
                    <IoIosArrowForward
                      className={`transition-all duration-300 ${
                        mobileSubMenu === "graphic"
                          ? "rotate-90 text-orange-500"
                          : ""
                      }`}
                    />
                  </button>

                  {/* SUB MENU */}

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === "graphic" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white">
                      {servicesData.graphic.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={closeAllMenus}
                          className="block px-8 py-4
                text-[15px] text-gray-700
                hover:bg-gray-100
                hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOGS */}

            {/* <Link
              to="/blogs"
              onClick={closeAllMenus}
              className={navLinkStyle}
            >
              <span className={navTextStyle}>
                Blogs
              </span>

              <span
                className="absolute left-0 -bottom-1 h-[3px]
                w-0 bg-orange-500 rounded-full
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </Link> */}

            {/* CONTACT */}

            <Link
              to="/contact"
              onClick={closeAllMenus}
              className={navLinkStyle}
            >
              <span className={navTextStyle}>Contact</span>

              <span
                className="absolute left-0 -bottom-1 h-[3px]
                w-0 bg-orange-500 rounded-full
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </Link>

             <Link to="/blogs" onClick={closeAllMenus} className={navLinkStyle}>
              <span className={navTextStyle}> Blog</span>

              <span
                className="absolute left-0 -bottom-1 h-[3px]
                w-0 bg-orange-500 rounded-full
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </Link>
          </div>

          {/* ========================= */}
          {/* APPLY BUTTON */}
          {/* ========================= */}

          {/* ========================= */}
          {/* MOBILE BUTTON */}
          {/* ========================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden text-3xl transition-all duration-300 ${navTextColor}`}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* ========================= */}
      {/* OVERLAY */}
      {/* ========================= */}

      <div
        onClick={closeAllMenus}
        className={`fixed inset-0 bg-black/40
        backdrop-blur-[4px]
        z-[9998]
        transition-all duration-500
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}

      <div
        className={`fixed top-0 right-0 h-full
w-[90%] sm:w-[420px]
bg-white z-[9999]
        shadow-2xl transition-all duration-500
        ease-in-out overflow-y-auto
        ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* HEADER */}

        <div className="flex justify-between items-center p-5 border-b">
          <img src={Logo} alt="logo" className="w-28" />

          <button onClick={closeAllMenus} className="text-3xl">
            <FiX />
          </button>
        </div>

        {/* MOBILE MENU */}

        <div className="p-6 flex flex-col gap-8">
          <Link
            to="/"
            onClick={closeAllMenus}
            className="text-[22px] font-semibold"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeAllMenus}
            className="text-[22px] font-semibold"
          >
            About
          </Link>

          {/* SERVICES */}

          <div>
            <button
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="flex justify-between items-center
  w-full text-[22px] font-semibold group"
            >
              Services
              <IoIosArrowForward
                className={`text-[22px] transition-all duration-300 ${
                  mobileServiceOpen ? "rotate-90 text-orange-500" : "rotate-0"
                }`}
              />
            </button>

            {/* DROPDOWN */}

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                mobileServiceOpen ? "max-h-[1000px] mt-6" : "max-h-0"
              }`}
            >
              <div className="space-y-6 pl-4">
                {Object.keys(servicesData).map((key) => (
                  <div key={key} className="border-b border-gray-100 pb-5">
                    {/* BUTTON */}

                    <button
                      onClick={() =>
                        setMobileSubMenu(mobileSubMenu === key ? "" : key)
                      }
                      className="flex justify-between items-center
          w-full text-left text-[20px]
          font-semibold group"
                    >
                      <span
                        className={`transition-all duration-300 ${
                          mobileSubMenu === key
                            ? "text-orange-500"
                            : "text-black"
                        }`}
                      >
                        {key === "web" && "Web Services"}

                        {key === "marketing" && "Social Media Marketing"}

                         {key === "seo" && "Search Engine Optimization"}

                        {key === "Business" && "Google Business Profile"}

                        {key === "graphic" && "Graphic Designing"}
                      </span>

                      {/* ROTATE ICON */}

                      <IoIosArrowForward
                        className={`text-[22px]
            transition-all duration-300
            ${
              mobileSubMenu === key
                ? "rotate-90 text-orange-500"
                : "rotate-0 text-black"
            }`}
                      />
                    </button>

                    {/* DROPDOWN */}

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        mobileSubMenu === key
                          ? "max-h-96 mt-5 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pl-4">
                        {servicesData[key].map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            onClick={closeAllMenus}
                            className="block text-black text-md
                  hover:text-orange-500
                  transition-all duration-300
                  hover:translate-x-2"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/blogs"
            onClick={closeAllMenus}
            className="text-[22px] font-semibold"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onClick={closeAllMenus}
            className="text-[22px] font-semibold"
          >
            Contact
          </Link>

          {/* BUTTON */}
          {/* ========================= */}
          {/* MOBILE CONTACT INFO */}
          {/* ========================= */}

          <div className="border-t pt-6 space-y-5">
            {/* PHONE */}

            <a
              href="tel:+918377070881"
              className="flex items-start gap-4 group"
            >
              <div
                className="w-12 h-12 rounded-2xl 
      flex items-center justify-center
      text-orange-500 text-lg
      group-hover:scale-110 transition"
              >
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>

                <h4 className="font-semibold text-lg text-gray-800">
                  +91-8377070881
                </h4>
              </div>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:info@endlesssol.com"
              className="flex items-start gap-4 group"
            >
              <div
                className="w-12 h-12 rounded-2xl 
      flex items-center justify-center
      text-orange-500 text-lg
      group-hover:scale-110 transition"
              >
                <MdEmail />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email Address</p>

                <h4 className="font-semibold text-lg text-gray-800 break-all">
                  info@endlesssol.com
                </h4>
              </div>
            </a>

            {/* ADDRESS */}

            <div className="flex items-start gap-3">
              <div
                className="w-12 h-12 rounded-2xl 
      flex items-center justify-center
      text-green-600 text-lg mx-3"
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Office Address</p>

                <h4 className="font-semibold text-gray-800 leading-relaxed">
                  B- 609 U.G floor Sudharshan park moti nagar 110015
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
