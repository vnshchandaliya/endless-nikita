 import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const features = [
  "Fully Customizable",
  "Easy to Use",
  "Secure & Scalable",
  "Cloud-Based",
  "Mobile-Friendly",
  "Integration Ready",
  "Backed by Expert Support",
];

export default function WhyChooseCRM() {
  return (
  <section className="bg-white py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
      

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
          More Than CRM Software

          <span className="block text-blue-600">
            We Build Business Systems
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          At <strong>Endless Solution</strong>, we don't simply implement
          CRM software—we help businesses create efficient systems that
          improve customer relationships, streamline operations,
          and support long-term growth.
        </p>

        <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Our CRM solutions are designed to grow with your business,
          helping your team stay organized, productive, and focused
          on delivering exceptional customer experiences.
        </p>
      </motion.div>

      {/* Right */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >

        {/* Glow */}

        <div className="absolute -top-12 -left-12 h-36 w-36 sm:h-52 sm:w-52 rounded-full bg-blue-400/20 blur-3xl"></div>

        <div className="absolute -bottom-12 -right-12 h-36 w-36 sm:h-52 sm:w-52 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

          <div className="rounded-[22px] bg-white p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
              Why Businesses Trust Us
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500">
                    <FiCheckCircle className="text-white" />
                  </div>

                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </div>

    {/* CTA */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-20"
    >

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 text-center text-white shadow-2xl">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Transform the Way You Manage
          <span className="block">
            Your Business
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
          A CRM is more than a database—it's the foundation of
          stronger customer relationships, better sales performance,
          and smarter business decisions.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex w-full max-w-xs sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105"
        >
          Schedule a Free Demo Today

          <FiArrowRight />
        </Link>

      </div>

    </motion.div>

  </div>
</section>
  );
}