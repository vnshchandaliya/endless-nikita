import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaPhoneAlt, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
import WebsiteDesign from "./pages/WebsiteDesign";
import EcommercePage from "./pages/EcommercePage";
import CRMPage from "./pages/CRMPage";
import GraphicDesignPage from "./pages/Graphic";
import VideoEditingPage from "./pages/videoEdit";
import ScrollToTop from "./components/ScrollToTop";
import SEOPage from "./pages/SEO";
import SMOPage from "./pages/SMO";
import AdsPage from "./pages/ads";
import GMBPage from "./pages/GMB";

import ContactPage from "./pages/contect";
import BlogOne from "./pages/Blog-page/BlogOne";
import Blogs from "./pages/Blogs";
import BlogTwo from "./pages/Blog-page/BlogTwo";
import BlogThree from "./pages/Blog-page/BlogThree";
import BlogFour from "./pages/Blog-page/BlogFour";
import BlogZeroClick from "./pages/Blog-page/BlogFive";
import BlogSix from "./pages/Blog-page/BlogSix";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/website-designing" element={<WebsiteDesign />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/crm-software" element={<CRMPage />} />
        <Route path="/graphic" element={<GraphicDesignPage />} />
        <Route path="/video" element={<VideoEditingPage />} />
        <Route path="/seo" element={<SEOPage />} />
        <Route path="/smo" element={<SMOPage />} />
        <Route path="Advertisements" element={<AdsPage />} />
        <Route path="/gmb" element={<GMBPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />

        {/*  Blogs Routes */}
        {/* ========================= */}
 <Route
  path="/blog/can-i-buy-a-domain-name-without-hosting"
  element={<BlogOne />}
/>

<Route
  path="/blog/seo-vs-google-ads-which-is-better-for-your-business"
  element={<BlogTwo />}
/>
<Route
  path="/blog/is-seo-dead-in-2026"
  element={<BlogThree />}
/>
<Route
  path="/blog/7-seo-strategies-businesses-should-prioritize-in-2026"
  element={<BlogFour />}
/>
<Route
  path="/blog/zero-click-searches"
  element={<BlogZeroClick />}
/>
<Route
  path="/blog/how-long-does-seo-take-to-show-results-in-2026"
  element={<BlogSix />}
/>
        {/* ========================= */}
      </Routes>
      <Footer />
      {/* ========================= */}
      {/* STICKY MOBILE BUTTONS */}
      {/* ========================= */}

      {/* ========================= */}
      {/* STICKY RIGHT SIDE BUTTONS */}
      {/* ========================= */}

      <div
        className="fixed right-4 bottom-6 z-[9999]
  flex flex-col gap-4 "
      >
        {/* WHATSAPP BUTTON */}

        <a
          href="https://wa.me/918377070881"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <button
            className="w-14 h-14 rounded-full
      bg-green-500 hover:bg-green-600
      text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)]
      flex items-center justify-center
      transition-all duration-300
      hover:scale-110 active:scale-95"
          >
            {/* WHATSAPP SVG */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="group-hover:rotate-12 transition"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .14 5.36.14 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.86 11.86 0 0 0 5.78 1.48h.01c6.56 0 11.92-5.36 11.92-11.92 0-3.18-1.24-6.17-3.47-8.43Zm-8.46 18.3h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.73.98 1-3.64-.23-.38a9.82 9.82 0 0 1-1.5-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.44-4.42 9.86-9.85 9.86Zm5.4-7.37c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35Z" />
            </svg>
          </button>
        </a>

        {/* CALL BUTTON */}

        <a href="tel:+918377070881">
          <button
            className="w-14 h-14 rounded-full
      bg-blue-600 hover:bg-blue-700
      text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)]
      flex items-center justify-center
      transition-all duration-300
      hover:scale-110 active:scale-95"
          >
            <FaPhoneAlt className="text-[22px]" />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
