import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiUsers,
  FiBriefcase,
  FiBell,
  FiLayers,
  FiTrendingUp,
  FiHome,
  FiShoppingCart,
  FiBookOpen,
  FiHeart,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function WhyCRM() {
  const challenges = [
    "Missed follow-ups",
    "Disorganized customer data",
    "Slow sales processes",
    "Poor team collaboration",
    "Limited visibility into business performance",
  ];

  return (
    <>
      {/* ================= WHY CRM ================= */}

      <section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >

            

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Why Modern Businesses Need

                <span className="block text-blue-600">
                  CRM Software
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Customer expectations continue to evolve, and businesses
                need better ways to manage interactions, track
                opportunities, and deliver personalized experiences.
              </p>

              <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Without the right CRM system, businesses often struggle
                with managing leads, customer relationships, and sales
                processes efficiently.
              </p>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

                <div className="rounded-[15px] bg-white p-5 sm:p-6">

                  <p className="text-gray-700 text-sm sm:text-base leading-7">
                    A modern CRM helps you stay organized,
                    improve productivity,
                    and make every customer interaction
                    more meaningful.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >

              <div className="rounded-3xl border border-gray-200 bg-white shadow-xl p-6 sm:p-8">

                <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
                  Common Business Challenges
                </h3>

                <div className="mt-8 space-y-4">

                  {challenges.map((item, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        y: -3,
                        scale: 1.01,
                      }}
                      className="flex items-start gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
                    >

                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500">

                        <FiCheckCircle className="text-lg text-white" />

                      </div>

                      <p className="text-sm sm:text-base leading-7 text-gray-700">
                        {item}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
            {/* ================= ONE CRM SECTION ================= */}

   <section className="bg-white overflow-hidden py-14 sm:py-16 lg:py-24">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl text-center"
    >
      

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
        One CRM.
        <span className="block text-blue-600">
          Endless Possibilities.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
        More than just software, our CRM helps you organize your
        business, strengthen customer relationships, automate
        repetitive tasks, and make smarter business decisions.
      </p>
    </motion.div>

    {/* Cards */}

    <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">

      {[
        {
          icon: <FiUsers />,
          title: "Manage Every Lead with Confidence",
          text: "Capture leads from your website, social media, email campaigns, and advertising platforms—all in one place.",
        },
        {
          icon: <FiBriefcase />,
          title: "Build Stronger Customer Relationships",
          text: "Keep a complete history of every interaction so your team always has the information they need.",
        },
        {
          icon: <FiBell />,
          title: "Automate Everyday Tasks",
          text: "Reduce manual work with reminders, follow-ups, workflows, and notifications.",
        },
        {
          icon: <FiTrendingUp />,
          title: "Track Sales Performance",
          text: "Monitor opportunities, manage your sales pipeline, and make informed decisions using real-time dashboards.",
        },
        {
          icon: <FiLayers />,
          title: "Work Together More Efficiently",
          text: "Give your sales, marketing, and support teams access to the same customer information.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group flex h-full flex-col rounded-2xl lg:rounded-3xl border border-gray-200 bg-[#f8fafc] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
        >

          {/* Icon */}

          <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-xl sm:text-2xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            {item.icon}
          </div>

          {/* Title */}

          <h3 className="min-h-[64px] text-lg sm:text-xl font-bold leading-7 text-gray-900">
            {item.title}
          </h3>

          {/* Description */}

          <p className="mt-4 flex-grow text-sm sm:text-base leading-7 text-gray-600">
            {item.text}
          </p>

          {/* Bottom Line */}

          <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500 group-hover:w-full"></div>

        </motion.div>

      ))}

    </div>

    {/* Bottom Card */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 sm:mt-16"
    >
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

        <div className="rounded-[22px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 text-center">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Everything You Need in One CRM
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Manage leads, strengthen customer relationships,
            automate workflows, gain valuable insights,
            and grow your business with one powerful CRM platform.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-green-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Request a Free Demo
          </Link>

        </div>

      </div>
    </motion.div>

  </div>
</section>
            {/* ================= INDUSTRIES SECTION ================= */}

     <section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl text-center"
    >
      

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
        Whether You're Managing

        <span className="block text-blue-600">
          100 Customers or 100,000...
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
        Our CRM adapts to businesses of every size. Whether you're a
        startup or a large enterprise, you'll have the tools you need
        to organize customer relationships, automate processes, and
        grow with confidence.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">

      {[
        { icon: <FiTrendingUp />, title: "Startups" },
        { icon: <FiBriefcase />, title: "Small Businesses" },
        { icon: <FiUsers />, title: "Enterprises" },
        { icon: <FiBriefcase />, title: "Agencies" },
        { icon: <FiHeart />, title: "Healthcare" },
        { icon: <FiHome />, title: "Real Estate" },
        { icon: <FiBookOpen />, title: "Education" },
        { icon: <FiDollarSign />, title: "Finance" },
        { icon: <FiShoppingCart />, title: "E-Commerce" },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group flex h-full flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
        >

          <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-xl sm:text-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            {item.icon}
          </div>

          <h3 className="min-h-[52px] flex items-center justify-center text-center text-sm sm:text-lg font-semibold text-gray-900">
            {item.title}
          </h3>

        </motion.div>

      ))}

    </div>

    {/* CTA */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-14 sm:mt-20"
    >

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

        <div className="rounded-[22px] bg-gradient-to-r from-blue-600 to-green-500 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 text-center text-white">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your

            <span className="block">
              Customer Management?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
            A CRM is more than a database—it's the foundation of
            stronger customer relationships, improved sales
            performance, and smarter business decisions.
            Let Endless Solution help you build a CRM platform
            that grows with your business.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex w-full max-w-xs sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Free Demo Today

            <FiArrowRight />

          </Link>

        </div>

      </div>

    </motion.div>

  </div>
</section>

    </>
  );
}