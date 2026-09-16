import { FiUsers, FiDatabase, FiBarChart2 } from "react-icons/fi";
import crmImg from "../assets/crm.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiCheckCircle,
  FiArrowRight,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiCloud,
} from "react-icons/fi";

import img1 from "../assets/crm/Lead.jpg";
import img2 from "../assets/crm/Data.jpg";
import img3 from "../assets/crm/Analytics.jpg";
import img4 from "../assets/crm/Automation.jpg";
import img5 from "../assets/crm/Customer.jpg";
import img6 from "../assets/crm/Secure.jpg";
import { Link } from "react-router-dom";
import WhyCRM from "../components/WhyCRM";
import WhyChooseCRM from "../components/WhyChooseCRM";

const features = [
  { icon: <FiUsers />, title: "Lead Management", image: img1 },
  { icon: <FiDatabase />, title: "Data Management", image: img2 },
  { icon: <FiBarChart2 />, title: "Analytics Dashboard", image: img3 },
  { icon: <FiSettings />, title: "Automation System", image: img4 },
  { icon: <FiUsers />, title: "Customer Tracking", image: img5 },
  { icon: <FiDatabase />, title: "Secure Database", image: img6 },
];

export default function CRMPage() {
  return (
    <>
    <Helmet>
      <title>
    Custom CRM Software Development Services | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Streamline your business with custom CRM software from Endless Solution. Manage leads, customers, sales, and workflows efficiently with scalable CRM solutions."
  />

    <link
    rel="canonical"
    href="https://endlesssol.com/crm-software"
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

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white font-bold leading-tight mt-10"
          >
            Smart CRM for{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              Modern Businesses
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg">
            Automate leads, boost conversions, and scale faster with our
            intelligent CRM system.
          </p>
        </div>
      </section>

      {/* 🟣 ABOUT */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={crmImg}
            alt=""
            className="w-full drop-shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Streamline Customer Relationships with Smart CRM Software
            </h2>

            {/* <p className="text-gray-600 mb-6">
              Manage customers, track leads, and automate your entire sales pipeline easily.
            </p> */}

            <div className="space-y-3">
              <p>
                Managing customer information, tracking sales, and following up
                with leads shouldn't be complicated. At Endless Solution, we
                provide powerful CRM Software Solutions that help businesses
                organize customer data, improve team collaboration, and build
                stronger customer relationships. Whether you're a small
                business, growing company, or established enterprise, our CRM
                software is designed to simplify your daily operations, improve
                productivity, and support long-term business growth.
              </p>
              <b>
                Take control of your customer relationships with a CRM solution
                built for your business.
              </b>
              {/* {[
                "Lead Management System",
                "Automation & Follow-ups",
                "Sales Dashboard",
                "Reports & Analytics",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))} */}
            </div>
            <Link
              to="/contact"
              className="
          mt-8
          inline-flex
          w-full
          sm:w-auto
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-green-500
          px-8
          py-4
          text-white
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
        "
            >
              Request a Free Demo
            </Link>
          </motion.div>
        </div>
      </section>
      <WhyCRM />
      <WhyChooseCRM />

      {/* 🔷 FEATURES */}
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

      {/* 🔥 CTA */}
      {/* <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold">
            Want Your Own CRM System?
          </h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative mt-8 px-10 py-4 rounded-xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] overflow-hidden"
          >
            <span className="relative z-10">Get Free Demo</span>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-white/20 blur-xl"></div>
          </motion.button>
        </div>

      </section> */}
    </div>
    </>
  );
}
