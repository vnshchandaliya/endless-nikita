import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
 import { FiAlertCircle } from "react-icons/fi";
import googleImg from "../assets/ads/google.png";
import facebookImg from "../assets/ads/facebook.png";
import instagramImg from "../assets/ads/instagram.png";
import { Link } from "react-router-dom";
import {  FiArrowRight } from "react-icons/fi";
import {
  FiSearch,
  FiFacebook,
  FiBriefcase,
  FiPlayCircle,
  FiRefreshCw,
  FiTarget,
} from "react-icons/fi";
import { Helmet } from "react-helmet-async";

export default function AdsPage() {
  return (
    <>
    <Helmet>
      <title>
    Online Advertising Services | Google & Social Ads | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Drive targeted traffic and increase conversions with Endless Solution's online advertising services. We create high-performing Google Ads, Meta Ads, and digital campaigns for business growth."
  />

    <link
    rel="canonical"
    href="https://endlesssol.com/Advertisements"
  />
       
    </Helmet>
    
    <div className="bg-[#0f172a] text-white">

      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">

       <div className="absolute  inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>


        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/30 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 blur-[120px]"></div>

        <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Grow Fast with{" "}
             <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              Paid Ads
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300">
            Generate leads, increase sales, and scale your business with powerful ad campaigns.
          </p>
        </div>
      </section>


      {/* 🔥 GOOGLE ADS */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.img
            src={googleImg}
            alt=""
            className=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
             Grow Your Business with Data-Driven Google Ads & Paid Advertising Services
            </h2>

            <p className="text-gray-600 mb-6">
              Get instant traffic and high-quality leads through targeted Google Ads campaigns.
            </p>

            <div className="space-y-3">
              <p>Looking to generate more leads, increase sales, and grow your business faster? As a trusted Google Ads Agency, we create high-performing campaigns across Google, Facebook, Instagram, LinkedIn, and YouTube, ensuring your business reaches the right audience at the right time. <br/>
Whether you're looking to improve your Google Ads Campaign Management, launch a new PPC Advertising campaign, or scale your existing digital marketing efforts, our team delivers measurable results through strategic planning, continuous optimization, and transparent reporting. <br/>
From Google Ads to social media advertising, our experts build data-driven campaigns that increase visibility, attract qualified customers, and deliver measurable results.
</p>
<b>Start growing your business with advertising that works.
</b>
              {/* {[
                "Search Ads Campaign",
                "Display Ads",
                "High Conversion Strategy",
                "Keyword Targeting",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
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
        Get a Free Consultation

      </Link>
          </motion.div>

        </div>
      </section>

{/* ================= Advertising Challenges ================= */}

<section className="bg-white py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Content */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
         

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
          Is Your Advertising
          <span className="block text-blue-600">
            Budget Working for You?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Many businesses invest in paid advertising expecting immediate
          growth but often struggle with rising costs, poor-quality leads,
          and inconsistent performance.
        </p>

        <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          These challenges usually happen because campaigns lack the right
          strategy, audience targeting, or ongoing optimization.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">
          <p className="text-base sm:text-lg leading-7 font-medium text-gray-700">
            A well-managed advertising campaign focuses on delivering
            meaningful business outcomes—not just impressions and clicks.
          </p>
        </div>
      </motion.div>

      {/* Right Cards */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -top-10 -left-10 h-36 w-36 rounded-full bg-blue-400/20 blur-3xl"></div>

        <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

          <div className="rounded-[22px] bg-white p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Common Issues Include
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {[
                "High advertising costs with limited returns",
                "Low conversion rates",
                "Poor audience targeting",
                "Ads that fail to attract quality leads",
                "Inconsistent campaign performance",
                "Limited visibility in a competitive market",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500">
                    <FiAlertCircle className="text-white text-lg" />
                  </div>

                  <p className="text-sm sm:text-base font-medium leading-6 text-gray-700">
                    {item}
                  </p>
                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>
 {/* ================= Paid Ads Services ================= */}

<section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
   

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
        Paid Advertising
        <span className="block text-blue-600">
          That Delivers Results
        </span>
      </h2>

       
    </motion.div>

    {/* Services */}

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {[
        {
          icon: <FiSearch />,
          title: "Google Ads",
          text: "Reach customers actively searching for your products and services with professionally managed Search, Display, Shopping, and Performance Max campaigns."
        },

        {
          icon: <FiFacebook />,
          title: "Meta Ads",
          text: "Grow your business across Facebook and Instagram with engaging campaigns designed to increase awareness, leads, and sales."
        },

        {
          icon: <FiBriefcase />,
          title: "LinkedIn Ads",
          text: "Connect with professionals, decision-makers, and business owners through targeted B2B advertising campaigns."
        },

        {
          icon: <FiPlayCircle />,
          title: "YouTube Advertising",
          text: "Increase brand awareness and customer engagement with strategic video advertising campaigns."
        },

        {
          icon: <FiRefreshCw />,
          title: "Remarketing Campaigns",
          text: "Reconnect with previous visitors and encourage them to return when they're ready to purchase or enquire."
        },

        {
          icon: <FiTarget />,
          title: "Lead Generation Campaigns",
          text: "Generate high-quality enquiries while lowering your cost per lead through data-driven advertising strategies."
        }

      ].map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
        >

          {/* Icon */}

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            {service.icon}
          </div>

          {/* Title */}

          <h3 className="text-xl font-bold text-gray-900 leading-8">
            {service.title}
          </h3>

          {/* Description */}

          <p className="mt-4 flex-grow text-sm sm:text-base leading-7 text-gray-600">
            {service.text}
          </p>

          {/* Bottom Line */}

          <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500 group-hover:w-full"></div>

        </motion.div>

      ))}

    </div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >

       

    </motion.div>

  </div>
</section>

{/* ================= Why Choose Endless Solution ================= */}

<section className="bg-white py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
          Why Choose
          <span className="block text-blue-600">
            Endless Solution
          </span>
          <span className="block">
            for PPC Management?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
          Our team combines industry expertise, advanced analytics,
          and proven advertising strategies to build campaigns that
          generate qualified leads, maximize return on investment,
          and deliver measurable business growth.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">

          <p className="text-base sm:text-lg leading-7 font-medium text-gray-700">
            We don't just manage advertising campaigns—we build
            data-driven PPC strategies that help your business grow
            consistently.
          </p>

        </div>

      </motion.div>

      {/* Right Cards */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >

        {/* Glow */}

        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>

        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

          <div className="rounded-[22px] bg-white p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What You'll Get
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {[
                "Certified PPC & Google Ads Specialists",
                "Customized PPC Management Strategies",
                "Advanced Keyword & Audience Research",
                "Conversion-Focused Landing Pages",
                "Continuous Campaign Optimization",
                "Transparent Reporting & Analytics",
                "Budget-Friendly Advertising Solutions",
                "Multi-Platform Advertising Expertise",
                "ROI-Driven Campaign Management",
                "Dedicated Account Managers",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500">

                    <FiCheckCircle className="text-white text-lg" />

                  </div>

                  <span className="text-sm sm:text-base font-medium leading-6 text-gray-700">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-20"
    >

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 text-center text-white shadow-2xl">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Maximize Your
          <span className="block">
            Advertising ROI?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
          Whether you're launching your first PPC campaign or
          improving an existing one, our experts will help you
          generate more leads, more sales, and better returns from
          every advertising dollar.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex w-full max-w-xs sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105"
        >
          Get Your Free PPC Consultation

          <FiArrowRight />
        </Link>

      </div>

    </motion.div>

  </div>
</section>

      {/* 🔥 FACEBOOK ADS */}
      {/* <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

 
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Facebook Ads 
            </h2>

            <p className="text-gray-300 mb-6">
              Reach your ideal audience with powerful Facebook Ads targeting and retargeting strategies.
            </p>

            <div className="space-y-3">
              {[
                "Audience Targeting",
                "Lead Generation Ads",
                "Retargeting Campaigns",
                "Creative Ad Design",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

       
          <motion.img
            src={facebookImg}
            alt=""
            className=""
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

        </div>
      </section> */}


      {/* 🔥 INSTAGRAM ADS
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

     
          <motion.img
            src={instagramImg}
            alt=""
            className=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

      
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Instagram Ads 
            </h2>

            <p className="text-gray-600 mb-6">
              Boost engagement and brand awareness with visually appealing Instagram ad campaigns.
            </p>

            <div className="space-y-3">
              {[
                "Story Ads",
                "Reels Ads",
                "Creative Visual Content",
                "Influencer Strategy",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </section> */}
    </div>
    </>
  );
}