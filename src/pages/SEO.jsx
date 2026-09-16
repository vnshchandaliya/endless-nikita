import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiSearch,
  FiBarChart2,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";

import seoImg from "../assets/seo/seo.png";
import seoImg2 from "../assets/seo/seo1.png";

// Optional images (add your own)
import img1 from "../assets/seo/keyword.jpg";
import img2 from "../assets/seo/onpage.jpg";
import img3 from "../assets/seo/offpage.jpg";
import img4 from "../assets/seo/technical.jpg";
import img5 from "../assets/seo/analytics.jpg";
import img6 from "../assets/seo/local.jpg";
import { Link } from "react-router-dom";

const features = [
  { icon: <FiSearch />, title: "Keyword Research", image: img1 },
  { icon: <FiTrendingUp />, title: "On-Page SEO", image: img2 },
  { icon: <FiBarChart2 />, title: "Off-Page SEO", image: img3 },
  { icon: <FiSearch />, title: "Technical SEO", image: img4 },
  { icon: <FiTrendingUp />, title: "SEO Analytics", image: img5 },
  { icon: <FiBarChart2 />, title: "Local SEO", image: img6 },
];

export default function SEOPage() {
  return (
    <>
       <Helmet>
      <title>
     SEO Services | Search Engine Optimization Company | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Improve your Google rankings and grow organic traffic with Endless Solution's professional SEO services. We deliver on-page, off-page, technical SEO, and local SEO solutions."
  />

    <link
    rel="canonical"
    href="https://endlesssol.com/seo"
  />
       
    </Helmet>

      <div className=" text-white">
        {/* 🔥 HERO */}
        <section className="relative py-28 px-6 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

          {/* Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 blur-[120px]"></div>

          <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold"
            >
              SEO Services{" "}
              <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                That Grow Your Business
              </span>
            </motion.h1>

            <p className="mt-6 text-gray-300">
              Increase organic traffic, generate qualified leads, and improve
              search rankings with data-driven SEO strategies tailored to your
              business goals.
            </p>
            <Link to={"/contact"}>
              <button className="mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition">
                Get Free SEO audit
              </button>
            </Link>
          </div>
        </section>

        {/* 🟣 ABOUT */}
        <section className="py-24 px-6 bg-white text-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={seoImg}
              alt=""
              className="drop-shadow-xl/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Enterprise SEO Services That Drive Qualified Growth
              </h2>

              <p className="text-black font-bold mb-6">
                Drive More Traffic, Leads, and Revenue with Data-Driven SEO{" "}
              </p>
              <p>
                Search engines are where buying decisions begin. Whether you're
                a startup, local business, eCommerce brand, SaaS company, or
                enterprise organization, your customers are actively searching
                for solutions. The question is: are they finding you or your
                competitors? At Endless Sol, we deliver performance-driven SEO
                strategies that increase organic visibility, attract qualified
                traffic, and turn search demand into measurable revenue. Our
                approach combines technical excellence, content authority, user
                experience optimization, and data-driven growth strategies to
                create sustainable rankings that last.
              </p>

              {/* <div className="space-y-3">
                            {[
                                "Increase Organic Traffic",
                                "Improve Google Rankings",
                                "Generate Quality Leads",
                                "Long-Term Growth Strategy",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 items-center">
                                    <FiCheckCircle className="text-green-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div> */}
              <Link
                to="/contact"
                className="inline-block mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition duration-300"
              >
                Get Free SEO Audit
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="py-24 px-6 bg-white text-black">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                SEO That Impacts Business Growth, Not Just Rankings
              </h2>

              <p className="text-black font-bold mb-6">
                Many agencies focus on keyword positions. We focus on business
                outcomes.
              </p>
              <p>Our SEO campaigns are designed to:</p>
              <div className="space-y-3 mt-2">
                {[
                  "Increase qualified organic traffic",
                  "Improve lead generation",
                  "Lower customer acquisition costs",
                  "Strengthen brand authority",
                  "Increase eCommerce sales",
                  "Improve conversion rates",
                  "Deliver long-term ROI",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <FiCheckCircle className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                By aligning SEO with your business objectives, we create growth
                strategies that generate measurable results rather than vanity
                metrics.
              </p>
            </motion.div>

            {/* Image Right */}
            <motion.img
              src={seoImg2}
              alt="SEO Services"
              className="drop-shadow-xl/50 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            />
          </div>
        </section>

        <section className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Businesses Choose Endless Sol
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                  Data-Driven SEO Strategy
                </h3>

                <p className="text-white leading-relaxed">
                  Every recommendation is backed by analytics, search intent
                  research, and competitive intelligence.
                </p>
              </div>

              <div className="bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4  bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                  Dedicated SEO Experts
                </h3>

                <p className="text-white leading-relaxed">
                  Work with experienced strategists, technical specialists,
                  content marketers, and analysts.
                </p>
              </div>

              <div className="bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                  Transparent Reporting
                </h3>

                <p className="text-white leading-relaxed">
                  Track keyword growth, traffic increases, lead generation, and
                  ROI through detailed monthly reports.
                </p>
              </div>

              <div className="bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                  White-Hat SEO Practices
                </h3>

                <p className="text-white leading-relaxed">
                  We follow Google's best practices to build sustainable
                  rankings and protect your long-term growth.
                </p>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-center mb-4 text-black">
                Industry-Specific Expertise
              </h3>

              <p className="text-center text-gray-600 mb-8">
                We have experience across:
              </p>

              <div className="flex flex-wrap justify-center gap-4 ">
                {[
                  "Healthcare",
                  "Real Estate",
                  "Legal",
                  "Finance",
                  "Education",
                  "SaaS",
                  "eCommerce",
                  "Manufacturing",
                  "Professional Services",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="
          px-6
          py-3
          rounded-full
          bg-[#42B6BE]/10
          text-[#000]
          font-semibold
          hover:bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
          hover:text-white
          transition-all
          duration-300
        "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative overflow-hidden bg-[#0f172a]">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl"></div>
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#42B6BE]/20 text-[#fff] font-semibold mb-6">
              Ready To Grow?
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Ready to Dominate Search Results?
            </h2>

            <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-6">
              The businesses that consistently rank on page one are the
              businesses that consistently win market share.
            </p>

            <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-12">
              Partner with Endless Sol to build a powerful SEO strategy that
              increases visibility, drives qualified traffic, and accelerates
              business growth.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get a Free SEO Audit & Growth Consultation Today
              </h3>

              <p className="text-gray-300 mb-8">
                Discover your ranking opportunities, competitor gaps, and growth
                potential with a customized SEO strategy from Endless Sol.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to={"/contact"}
                  className="
          mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition
          "
                >
                  connect with us
                </Link>

                {/* <a
          href="/contact"
          className="
            border
            border-white/20
            hover:bg-white/10
            px-8
            py-4
            rounded-xl
            font-semibold
            transition-all
            duration-300
          "
        >
          Schedule Consultation
        </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 FEATURES */}
        <section className="py-24 px-6 relative overflow-hidden bg-[#0f172a]">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl"></div>

          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* 🔥 IMAGE (hover me aayegi smooth) */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500 ease-in-out scale-110 group-hover:scale-100"
                />

                {/* 🔥 DARK OVERLAY */}
                <div className="absolute inset-0 bg-[#0b1220]/95 group-hover:bg-black/60 transition duration-500"></div>

                {/* 🔥 CONTENT */}
                <div className="relative z-10 p-8 text-center">
                  {/* ICON */}
                  <div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center 
                    rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
                    text-white text-2xl shadow-lg
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="text-gray-400 text-sm group-hover:text-white transition">
                    Powerful CRM feature to boost your business growth.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
