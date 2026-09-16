import { motion } from "framer-motion";
import { FiCheckCircle, FiMapPin, FiStar, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import gmbImg from "../assets/gmb/gmb.png";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Optional images (add your own)
import img1 from "../assets/gmb/profile.jpg";
import img2 from "../assets/gmb/reviews.jpg";
import img3 from "../assets/gmb/optimization.jpg";
import img4 from "../assets/gmb/local.jpg";
import img5 from "../assets/gmb/insights.jpg";
import img6 from "../assets/gmb/visibility.jpg";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: <FiMapPin />, title: "Business Profile Setup", image: img1 },
  { icon: <FiStar />, title: "Review Management", image: img2 },
  { icon: <FiUsers />, title: "Profile Optimization", image: img3 },
  { icon: <FiMapPin />, title: "Local SEO Boost", image: img4 },
  { icon: <FiStar />, title: "Insights Tracking", image: img5 },
  { icon: <FiUsers />, title: "Google Visibility", image: img6 },
];
const faqs = [
  {
    question: "How long does Google Business verification take?",
    answer:
      "Verification timelines vary depending on Google's available verification methods. Most businesses complete the process within a few days to two weeks.",
  },
  {
    question: "Can you optimize an existing Google Business Profile?",
    answer:
      "Yes. We perform a comprehensive audit of your existing profile and optimize every section to improve visibility, accuracy, customer engagement, and overall local search performance.",
  },
  {
    question: "Will my business rank first on Google?",
    answer:
      "No ethical agency can guarantee the #1 ranking on Google. However, professional optimization, local SEO best practices, and consistent profile management can significantly improve your visibility in local search results and Google Maps.",
  },
];

export default function GMBPage() {
  const [activeFAQ, setActiveFAQ] = useState(0);
  return (
    <>
     <Helmet>
      <title>
      Google Business Profile (GMB) Optimization Services | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Enhance your local visibility with Google Business Profile (GMB) optimization services from Endless Solution. Get more calls, website visits, and local customers through effective local SEO." />

    <link
    rel="canonical"
    href="https://endlesssol.com/gmb"
  />
       
    </Helmet>
 
    <div className="bg-[#0f172a] text-white">

      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">

        {/* Background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>


        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/30 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/30 blur-[120px]"></div>

        <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Google My Business{" "}
             <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              Setup & Optimization
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300">
            Get discovered locally and attract more customers with a fully optimized GMB profile.
          </p>

        </div>
      </section>


      {/* 🟣 ABOUT */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src={gmbImg}
            alt=""
            className="rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
             Boost Your Local Visibility & Get Found by More Customers on Google

            </h2>

            <p className="text-gray-600 mb-6">
              Whether you're a new business or your Google Business Profile isn't delivering results, our expert Google My Business (GMB) Setup & Optimization service helps you appear in local searches, Google Maps, and attract more calls, website visits, and customers.

            </p>

            <div className="space-y-3">
              {[
                "Complete Profile Setup",
                "Google Maps Optimization",
                "Higher Local Search Rankings",
                "More Calls, Leads & Website Traffic",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
<Link
                to="/contact"
                className="inline-block mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition duration-300"
              >
                Book Your Free Consultation 
              </Link>
          </motion.div>

        </div>
      </section>
      {/* WHY GMB MATTERS */}
<section className="py-24 px-6 bg-white text-black relative overflow-hidden">

  <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-200/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-5">
        WHY IT MATTERS
      </span> */}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Why Your Google Business
        <span className="block text-blue-600">
          Profile Matters
        </span>
      </h2>

      <p className="text-gray-600 leading-8 mb-6">
      A fully optimized Google Business Profile is one of the most powerful tools for local marketing. It helps potential customers discover your business, learn about your services, read customer reviews, and contact you directly.

      </p>

      <p className="text-gray-600 leading-8 mb-8">
      An incomplete or poorly optimized profile can reduce your visibility in local search results and make it easier for competitors to attract your customers.
With our professional GMB optimization service, your business profile becomes a powerful marketing asset that supports long-term business growth.

      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        {[
          "Increase Local Visibility",
          "Appear on Google Maps",
          "Build Customer Trust",
          "Generate More Leads",
        ].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border hover:border-blue-500 transition"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white">
              <FiCheckCircle />
            </div>

            <span className="font-medium">{item}</span>

          </div>

        ))}

      </div>

    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-5"
    >

      {[
        {
          number: "90%",
          title: "Local Searches",
          text: "Customers discover businesses through Google Search & Maps."
        },
        {
          number: "5X",
          title: "More Visibility",
          text: "Optimized profiles receive significantly higher engagement."
        },
        {
          number: "24/7",
          title: "Business Presence",
          text: "Your profile works even when your office is closed."
        },
        {
          number: "★★★★★",
          title: "Trust Builder",
          text: "Reviews and photos help customers choose your business."
        },
      ].map((card, i) => (

        <div
          key={i}
          className="rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 hover:-translate-y-2 transition duration-300 shadow-xl"
        >

          <h3 className="text-4xl font-bold text-blue-600 mb-3">
            {card.number}
          </h3>

          <h4 className="font-semibold text-xl mb-3">
            {card.title}
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            {card.text}
          </p>

        </div>

      ))}

    </motion.div>

  </div>

</section>
{/* WHY GMB MATTERS */}
<section className="py-24 px-6 bg-white text-black relative overflow-hidden">

  <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-200/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/40 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-5">
        WHY IT MATTERS
      </span> */}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Why Your Google Business
        <span className="block text-blue-600">
          Profile Matters
        </span>
      </h2>

      <p className="text-gray-600 leading-8 mb-6">
       Our team combines local SEO expertise with a data-driven optimization approach to help businesses improve their online presence. Every profile is customized based on your industry, competition, and business goals.

      </p>

      <p className="text-gray-600 leading-8 mb-8">
      We focus on creating accurate, optimized, and engaging business profiles that help potential customers find and trust your business.
Our commitment to transparency, quality, and long-term success makes us a trusted partner for businesses looking to strengthen their local digital presence.

      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        {[
          "Increase Local Visibility",
          "Appear on Google Maps",
          "Build Customer Trust",
          "Generate More Leads",
        ].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border hover:border-blue-500 transition"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white">
              <FiCheckCircle />
            </div>

            <span className="font-medium">{item}</span>

          </div>

        ))}

      </div>

    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-5"
    >

      {[
        {
          number: "90%",
          title: "Local Searches",
          text: "Customers discover businesses through Google Search & Maps."
        },
        {
          number: "5X",
          title: "More Visibility",
          text: "Optimized profiles receive significantly higher engagement."
        },
        {
          number: "24/7",
          title: "Business Presence",
          text: "Your profile works even when your office is closed."
        },
        {
          number: "★★★★★",
          title: "Trust Builder",
          text: "Reviews and photos help customers choose your business."
        },
      ].map((card, i) => (

        <div
          key={i}
          className="rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 hover:-translate-y-2 transition duration-300 shadow-xl"
        >

          <h3 className="text-4xl font-bold text-blue-600 mb-3">
            {card.number}
          </h3>

          <h4 className="font-semibold text-xl mb-3">
            {card.title}
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            {card.text}
          </p>

        </div>

      ))}

    </motion.div>

  </div>

</section>
{/* LOCAL SEO SECTION */}

<section className="py-24 px-6 bg-white relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/40 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >

      {/* <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-5">
        LOCAL SEO
      </span> */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Local SEO
        <span className="block text-blue-600">
          Optimization
        </span>
      </h2>

      <p className="text-gray-600 leading-8 mb-8">
       Our local SEO strategies help your business appear in relevant local search results and Google Maps by improving key ranking factors.

      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        {[
          "Local Keyword Research",
          "Geo-Targeted Optimization",
          "NAP Consistency",
          "Service Area Optimization",
          "Local Search Signals",
          "Citation Recommendations",
          "Google Maps Visibility",
          "Higher Local Rankings",
        ].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white">
              <FiCheckCircle />
            </div>

            <span className="font-medium text-gray-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </motion.div>

    {/* RIGHT CARD */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >

      <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 text-white shadow-2xl border border-white/10">

        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-4xl mb-8">
          <FiMapPin />
        </div>

        <h3 className="text-3xl font-bold mb-6">
          Ready to Grow Your
          <span className="block text-green-400">
            Local Presence?
          </span>
        </h3>

        <p className="text-gray-300 leading-8 mb-8">
         Request your free consultation today and start building a stronger local presence that drives more leads, more calls, and more business.

        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 font-semibold hover:scale-105 transition duration-300 shadow-xl"
        >
          Get Started Now
          <span className="text-xl">→</span>
        </Link>

      </div>

    </motion.div>

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
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center 
              rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
              text-white text-2xl shadow-lg
              transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
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

    {/* FAQ */}

<section className="py-24 px-6 bg-[#0f172a] relative overflow-hidden">

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 blur-[150px] rounded-full"></div>

  <div className="max-w-5xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      {/* <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-green-400 text-sm font-semibold mb-5">
        FAQ
      </span> */}

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Frequently Asked
        <span className="block  text-blue-600">
          Questions
        </span>
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        Everything you need to know about our Google Business Profile setup,
        optimization, and local SEO services.
      </p>

    </motion.div>

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >

          <button
            onClick={() =>
              setActiveFAQ(activeFAQ === index ? null : index)
            }
            className="w-full flex items-center justify-between text-left px-8 py-6"
          >

            <h3 className="text-lg md:text-xl font-semibold text-white">
              {faq.question}
            </h3>

            <FiChevronDown
              className={`text-2xl text-green-400 transition-transform duration-300 ${
                activeFAQ === index ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              activeFAQ === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            <div className="px-8 pb-8 text-gray-300 leading-8">
              {faq.answer}
            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

    </div>
    </>
  );
}