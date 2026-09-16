import { motion } from "framer-motion";
import Graph from "../components/Graph";
import WhyChoose from "../components/WhyChooseSection";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import ServicesSlider from "../components/ServicesSection";
import { Link } from "react-router-dom";
import Challenges from "../components/Challenges";
import ExpertGuidance from "../components/ExpertGuidance";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  return (
    <>
    <Helmet>
    <title>
      Endless Solution | Web Development, SEO & Digital Marketing Agency
    </title>

    <meta
      name="description"
      content="Grow your business with Endless Solution. We provide professional SEO, website development, Google Ads, social media marketing, branding, CRM software, and digital marketing services to help businesses increase leads and sales."
    />

    <meta
      name="keywords"
      content="digital marketing agency, SEO services, website development, web design, Google Ads, social media marketing, CRM software, graphic design, video editing, Endless Solution"
    />

    <link
      rel="canonical"
      href="https://endlesssol.com/"
    />
  </Helmet>
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_#1e3a8a_0%,_#2563eb_5%,_#22c55e_100%)] px-4 sm:px-6 pt-40 sm:pt-44 lg:pt-36 pb-16 lg:pb-24 text-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-5">
        Grow Your Business <br />
        with{" "}
        <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
          Data-Driven
        </span>{" "}
        Digital Marketing
      </h1>

      <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-xl">
        We help businesses generate qualified leads, increase sales,
        and build a powerful online presence through SEO, Paid
        Advertising, Website Development, and Digital Marketing
        strategies that deliver measurable results.
      </p>

      {/* BUTTON */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/contact">
          <button
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold
            hover:scale-105 hover:bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]
            hover:text-white transition duration-300"
          >
            Book Free Consultation
          </button>
        </Link>
      </div>

      {/* STATS */}
      <div className="mt-12 grid grid-cols-3 gap-6 text-center max-w-lg">

        <div>
          <p className="text-3xl lg:text-4xl font-bold text-white">
            11+
          </p>

          <p className="mt-2 text-sm text-gray-200">
            Years Experience
          </p>
        </div>

        <div>
          <p className="text-3xl lg:text-4xl font-bold text-white">
            500+
          </p>

          <p className="mt-2 text-sm text-gray-200">
            Projects Completed
          </p>
        </div>

        <div>
          <p className="text-3xl lg:text-4xl font-bold text-white">
            95%
          </p>

          <p className="mt-2 text-sm text-gray-200">
            Client Retention
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative">

      {/* DASHBOARD CARD */}
      <div className="bg-white text-black rounded-2xl p-6 shadow-2xl">

        <div className="grid grid-cols-3 gap-4 mb-6">

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <p className="text-xl lg:text-2xl font-bold text-[#1B3C53]">
              12.5K
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Visitors
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <p className="text-xl lg:text-2xl font-bold text-green-600">
              +340%
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Growth
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <p className="text-xl lg:text-2xl font-bold text-blue-600">
              ₹8.5x
            </p>

            <p className="text-sm text-gray-600 mt-1">
              ROAS
            </p>
          </div>

        </div>

        <Graph />
      </div>

      {/* FLOATING CARD */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="absolute top-[-20px] right-0 bg-white text-black px-4 py-2 rounded-xl shadow-lg font-semibold"
      >
        +156% Traffic
      </motion.div>

      {/* FLOATING CARD */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="absolute bottom-[-20px] left-0 bg-white text-black px-4 py-2 rounded-xl shadow-lg font-semibold"
      >
        48 Leads Today
      </motion.div>

    </div>

  </div>
</section>

      <WhyChoose />
      
      <StatsSection />
      <Challenges />
      <ServicesSlider />
      <ProcessSection />
      <CTASection />
      <ExpertGuidance />
      <Testimonials />
      <ContactSection />
    </>
  );
}
