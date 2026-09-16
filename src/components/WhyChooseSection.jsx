import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiTarget, FiBarChart2 } from "react-icons/fi";
import WhyChooseimg from "../assets/image/whychoose.png"
import { Link } from "react-router-dom";


export default function WhyChoose() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔵 LEFT SIDE */}
        <div className="relative flex justify-center">

          {/* Gradient Box */}
          <div className="w-full max-w-md h-[320px] rounded-3xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] flex items-center justify-center drop-shadow-xl">
            <img src={WhyChooseimg} alt="" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-[-20px] bg-white px-6 py-4 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-orange-500">11+</h3>
            <p className="text-sm text-gray-600">Years Experience</p>
          </motion.div>
        </div>

        {/* 🟣 RIGHT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Grow Your Business with a Trusted Digital Marketing Company
          </h2>

          <p className="mt-4 text-gray-600">
           Running a business is hard enough without wondering why your website feels invisible. You pour time and money into marketing, yet traffic crawls, leads stall, and sales feel hit-or-miss. Sound familiar?
          </p>
           <p className="mt-4 text-gray-600">
            That’s where Endless Sol comes in. Our small, focused team combines proven strategies, data-driven insights, and customized digital marketing solutions to turn website visitors into qualified leads and loyal customers. No guesswork, just clear steps backed by data you can see.

           </p>

          {/* FEATURES */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">

            {/* ITEM */}
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiTrendingUp className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Data-Driven</h4>
                <p className="text-sm text-gray-500">
                  Decisions backed by analytics & insights
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FiUsers className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold">Expert Team</h4>
                <p className="text-sm text-gray-500">
                  Dedicated specialists for your growth
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FiTarget className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">ROI Focused</h4>
                <p className="text-sm text-gray-500">
                  We focus on leads & conversions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <FiBarChart2 className="text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold">Transparent Reports</h4>
                <p className="text-sm text-gray-500">
                  Weekly updates & clear performance
                </p>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <Link to={"/about"}><button className="mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition">
            Book your free consultation
          </button></Link>
        </div>
      </div>
    </section>
  );
}