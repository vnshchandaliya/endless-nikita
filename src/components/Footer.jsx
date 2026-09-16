import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/LOgo/LOGO.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1220] text-white pt-16 pb-6 px-6 overflow-hidden">

      {/* DOT BG */}
      <div className="absolute inset-0 
      bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] 
      bg-[length:25px_25px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* 🔵 BRAND */}
        <div>
          <img src={Logo} alt="logo" className="w-28 mb-4" />

          <p className="text-gray-400 text-sm">
            We help businesses grow with data-driven digital marketing strategies.
          </p>

          <div className="flex  gap-4 mt-6">
  {[
    // {
    //   icon: FaFacebookF,
    //   link: "https://facebook.com",
    // },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/solutionendless/",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/anurag-chhabra-675a4333b/",
    },
    // {
    //   icon: FaTwitter,
    //   link: "https://twitter.com",
    // },
  ].map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-10
          h-10
          flex
          items-center
          justify-center
          rounded-full
          bg-white/10
          hover:bg-blue-500
          hover:scale-110
          transition-all
          duration-300
          cursor-pointer
          
        "
      >
        <Icon />
      </a>
    );
  })}
</div>
        </div>

        {/* 🟣 QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
               <li>
              <Link  to="/blogs" className="hover:text-white transition">
                 Blogs
              </Link>
            </li>

          </ul>
        </div>

        {/* 🟢 SERVICES */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              <Link to="/website-designing" className="hover:text-white">
                Website Development
              </Link>
            </li>

            <li>
              <Link to="/seo" className="hover:text-white">
                SEO
              </Link>
            </li>

            <li>
              <Link to="/smo" className="hover:text-white">
                Social Media Optimization
              </Link>
            </li>

            <li>
              <Link to="/crm-software" className="hover:text-white">
                CRM Software
              </Link>
            </li>
            <li>
              <Link to="/video" className="hover:text-white">
                Video Editing
              </Link>
            </li>

          </ul>
        </div>

        {/* 🟡 MAP */}
        <div>
          <h3 className="font-semibold mb-4">Our Location</h3>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Moti%20Nagar%20Delhi&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="relative z-10 mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <a href="" target="_blank" className="hover:text-white">
          Endless Solution
        </a>{" "}
        All rights reserved.
      </div>
    </footer>
  );
}