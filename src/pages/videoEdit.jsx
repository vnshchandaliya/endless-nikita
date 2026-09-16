import { motion } from "framer-motion";
import { FiCheckCircle, FiVideo, FiFilm, FiPlay } from "react-icons/fi";

import videoImg from "../assets/videoEdit/video.png";
import {
  FiSmartphone,
  FiYoutube,
  FiPlayCircle,
  FiBriefcase,
  FiShoppingBag,
  FiCamera,
} from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
// Optional images (add your own)
import img1 from "../assets/videoEdit/reel.jpeg";
import img2 from "../assets/videoEdit/youtube.jpg";
import img3 from "../assets/videoEdit/ads.jpg";
import img4 from "../assets/videoEdit/color.jpg";
import img5 from "../assets/videoEdit/shorts.jpg";
import img6 from "../assets/videoEdit/promo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {   AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus,   } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
 

const features = [
  { icon: <FiVideo />, title: "Reels Editing", image: img1 },
  { icon: <FiFilm />, title: "YouTube Videos", image: img2 },
  { icon: <FiPlay />, title: "Ads Video Editing", image: img3 },
  { icon: <FiVideo />, title: "Color Grading", image: img4 },
  { icon: <FiFilm />, title: "Short Form Content", image: img5 },
  { icon: <FiPlay />, title: "Promo Videos", image: img6 },
];
const faqs = [
  {
    question: "What types of videos do you edit?",
    answer:
      "We edit promotional videos, YouTube videos, social media content, corporate videos, product demonstrations, event videos, educational content, interviews, and much more.",
  },
  {
    question:
      "Can you edit videos for Instagram Reels, TikTok, and YouTube Shorts?",
    answer:
      "Yes. We create short-form videos optimized for Instagram Reels, TikTok, YouTube Shorts, Facebook Reels, LinkedIn, and other major social media platforms.",
  },
  {
    question: "Can you add subtitles, animations, and branding?",
    answer:
      "Absolutely. We can include subtitles, motion graphics, logo animations, brand colors, lower thirds, custom text animations, and other branded visual elements.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "We provide videos in high-quality formats optimized for websites, social media platforms, presentations, digital advertising campaigns, and other online platforms.",
  },
  {
    question: "How long does the editing process take?",
    answer:
      "The timeline depends on the complexity of your project, video length, and revision requirements. Before we begin, we'll provide a clear production schedule and estimated delivery date.",
  },
];
export default function VideoEditingPage() {
  const [open, setOpen] = useState(0);
  return (
    <>
    <Helmet>
<title>
      Video Editing & Video Marketing Services | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Engage your audience with professional video editing and marketing services from Endless Solution. We create promotional videos, reels, corporate videos, and social media content that drives results." />

    <link
    rel="canonical"
    href="https://endlesssol.com/video-editing-service"
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
            className="text-5xl md:text-7xl font-bold mt-7"
          >
            Professional Video Editing Services{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              That Bring Your Story to Life
            </span>
          </motion.h1>

          <p className="mt-6 text-white">
            High-quality video editing that grabs attention and boosts
            engagement.
          </p>
        </div>
      </section>

      {/* 🟣 ABOUT */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={videoImg}
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
              Transform Raw Footage into Engaging Videos That Capture Attention
            </h2>

            <p className="text-black mb-6">
              Every great video starts with a story—but it's the editing that
              makes it memorable. At <strong>Endless Solution</strong>, we
              provide professional Video Editing Services that turn your raw
              footage into polished, engaging, and high-quality videos designed
              to captivate your audience.
            </p>
            <p className="text-black mb-6">
              Whether you're creating content for social media, YouTube,
              marketing campaigns, corporate presentations, or product
              promotions, our editors combine creativity, precision, and
              strategy to deliver videos that leave a lasting impression
            </p>
            <b>Create videos that inspire, engage, and convert.</b>

            <div className="space-y-3">
              {/* {[
                "High-Quality Editing",
                "Fast Turnaround Time",
                "Creative Transitions & Effects",
                "Platform Optimized Videos",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))} */}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= Video Editing Challenges ================= */}

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
                Great Content
                <span className="block text-blue-600">
                  Deserves Great Editing
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Recording a video is only the beginning. Without professional
                editing, even the best footage can fail to capture attention or
                communicate your message effectively.
              </p>

              <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="text-base sm:text-lg font-medium leading-7 text-gray-700">
                  Professional editing transforms ordinary footage into content
                  people enjoy watching, sharing, and remembering.
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
              {/* Background Glow */}

              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>

              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-400/20 blur-3xl"></div>

              <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">
                <div className="rounded-[22px] bg-white p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Common Challenges
                  </h3>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Unpolished and inconsistent footage",
                      "Slow or time-consuming editing",
                      "Weak storytelling and pacing",
                      "Poor transitions and visual flow",
                      "Low audience engagement",
                      "Inconsistent branding",
                      "Audio and video quality issues",
                      "Videos that don't perform well across different platforms",
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
                          <FiFilm className="text-white text-lg" />
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
        </div>
      </section>

      {/* ================= Video Editing Services ================= */}

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
              More Than Editing—
              <span className="block text-blue-600">
                We Create Visual Experiences
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
              Our video editing process focuses on creating content that is
              visually engaging, professionally polished, and perfectly aligned
              with your brand identity.
            </p>
          </motion.div>

          {/* Services Grid */}

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: <FiSmartphone />,
                title: "Social Media Video Editing",
                text: "Create engaging videos for Instagram, Facebook, TikTok, LinkedIn, and other social platforms that increase engagement and encourage interaction.",
              },

              {
                icon: <FiYoutube />,
                title: "YouTube Video Editing",
                text: "From vlogs and tutorials to educational and promotional videos, we create edits that keep viewers engaged from beginning to end.",
              },

              {
                icon: <FiPlayCircle />,
                title: "Promotional Videos",
                text: "Showcase your products, services, and brand with compelling promotional videos designed to increase awareness and drive action.",
              },

              {
                icon: <FiBriefcase />,
                title: "Corporate Video Editing",
                text: "Professional editing for company profiles, presentations, training videos, internal communications, and business marketing.",
              },

              {
                icon: <FiShoppingBag />,
                title: "Product Videos",
                text: "Highlight product features with clean, modern edits that improve customer confidence and create a stronger buying experience.",
              },

              {
                icon: <FiCamera />,
                title: "Event Video Editing",
                text: "Transform conferences, seminars, weddings, launches, and special events into memorable highlight videos your audience will love.",
              },

              {
                icon: <FiFilm />,
                title: "Reels & Short Videos",
                text: "Create fast-paced, attention-grabbing short-form videos optimized for Instagram Reels, TikTok, YouTube Shorts, and Facebook.",
              },
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

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-2xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}

                <h3 className="text-xl font-bold leading-8 text-gray-900">
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

          {/* Bottom Card */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          ></motion.div>
        </div>
      </section>

      {/* ================= Why Choose Our Video Editing ================= */}

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
                Designed to Help
                <span className="block text-blue-600">
                  Your Brand Stand Out
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Every video we create is designed with one goal—to help your
                business communicate more effectively.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Every detail is carefully refined to deliver a polished final
                product.
              </p>
            </motion.div>

            {/* Right Feature Cards */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow */}

              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>

              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-400/20 blur-3xl"></div>

              <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">
                <div className="rounded-[22px] bg-white p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Editing Services Include
                  </h3>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Professional cuts & sequencing",
                      "Smooth transitions",
                      "Motion graphics",
                      "Text animations",
                      "Color correction & grading",
                      "Background music enhancement",
                      "Subtitle & caption integration",
                      "Brand logo placement",
                      "Platform-specific optimization",
                      "High-quality export formats",
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
          ></motion.div>
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
                Why Businesses Choose
                <span className="block text-blue-600">Endless Solution</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                We believe successful videos combine creativity with strategy.
              </p>

              <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                When you work with Endless Solution, you receive:
              </p>

              <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="text-base sm:text-lg font-medium leading-7 text-gray-700">
                  We don't just edit videos—we help brands create content that
                  connects with their audience.
                </p>
              </div>
            </motion.div>

            {/* Right Feature Cards */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Glow */}

              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>

              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-400/20 blur-3xl"></div>

              <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">
                <div className="rounded-[22px] bg-white p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    When You Work With Us
                  </h3>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Creative editing tailored to your brand",
                      "Experienced video editing professionals",
                      "Fast turnaround times",
                      "High-quality visual storytelling",
                      "Consistent branding across every project",
                      "Optimized videos for multiple platforms",
                      "Transparent communication",
                      "Reliable ongoing support",
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
          ></motion.div>
        </div>
      </section>

      {/* ================= Our Creative Process ================= */}

      <section className="bg-slate-50 py-14 sm:py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
              Our Creative
              <span className="block text-blue-600">Process</span>
            </h2>
          </motion.div>

          {/* Timeline */}

          <div className="relative mt-20">
            {/* Center Line */}

            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600 to-green-500"></div>

            {[
              {
                number: "01",
                title: "Understand Your Vision",
                desc: "We begin by learning about your goals, audience, and the purpose of your video to build a strategy that delivers results.",
              },
              {
                number: "02",
                title: "Organize & Edit",
                desc: "Our editors review your footage and build a compelling story with smooth pacing, clean cuts, and engaging visuals.",
              },
              {
                number: "03",
                title: "Enhance Every Detail",
                desc: "We improve every frame using transitions, color correction, graphics, branding, sound enhancement, and visual effects.",
              },
              {
                number: "04",
                title: "Review & Refine",
                desc: "Your feedback is part of our process. We make revisions until the final video matches your expectations.",
              },
              {
                number: "05",
                title: "Deliver Ready-to-Publish Videos",
                desc: "Receive optimized videos ready for social media, websites, YouTube, advertising campaigns, and presentations.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-12 flex ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Card */}

                <div className="relative w-full lg:w-[46%]">
                  {/* Timeline Circle */}

                  <div
                    className="hidden lg:flex absolute bottom-45 items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold shadow-xl
              ${
                index % 2 === 0
                  ? 'right-[-86px]'
                  : 'left-[-86px]'
              }"
                  >
                    {step.number}
                  </div>

                  {/* Mobile Number */}

                  <div className="lg:hidden mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white text-lg font-bold shadow-lg">
                    {step.number}
                  </div>

                  <div className="group rounded-3xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-7 text-base">
                      {step.desc}
                    </p>

                    <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          ></motion.div>
        </div>
      </section>

 
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Frequently Asked
            <span className="block text-blue-600">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Everything you need to know about our professional video
            editing services.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mt-16 max-w-5xl mx-auto space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-6 px-6 py-5 sm:px-8 sm:py-6 text-left"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-7">
                  {faq.question}
                </h3>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white">
                  {open === index ? (
                    <FiMinus size={18} />
                  ) : (
                    <FiPlus size={18} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5 sm:px-8">
                      <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 text-center text-white shadow-2xl">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Next
              <span className="block">
                Video Project Today
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              Let's transform your footage into content that informs,
              inspires, and drives meaningful results for your business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Request a Free Quote
                <FiArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
              >
                Book a Free Consultation
              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
      {/* 🔥 FEATURES
      <section className="py-24 px-6 relative overflow-hidden bg-[#0f172a]">
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
           
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out scale-110 group-hover:scale-100"
              />

         
              <div className="absolute inset-0 bg-[#0b1220]/95 group-hover:bg-black/60 transition duration-500"></div>

     
              <div className="relative z-10 p-8 text-center">
          
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center 
                rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
                text-white text-2xl shadow-lg
                transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  {item.icon}
                </div>

     
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition">
                  {item.title}
                </h3>

 
                <p className="text-gray-400 text-sm group-hover:text-white transition">
                  Powerful CRM feature to boost your business growth.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
    </>
  );
}
