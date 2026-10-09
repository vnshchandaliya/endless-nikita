import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import webImg from "../assets/image/services-page-img/website.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const steps = ["Planning", "Design", "Development", "Launch"];

export default function WebsiteDesign() {
  const [activeFAQ, setActiveFAQ] = useState(0);
  const faqs = [
    {
      question: "How long does it take to design a website?",
      answer:
        "Project timelines vary depending on the website's size and complexity. Most business websites are completed within a few weeks.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Every website we design is fully responsive and optimized for desktops, tablets, and smartphones.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can modernize your existing website with improved design, functionality, and performance.",
    },
    {
      question: "Will my website be SEO-friendly?",
      answer:
        "Yes. We follow SEO best practices, including clean coding, optimized page structure, fast loading speed, and responsive design.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes. We can build your website on a user-friendly content management system, allowing you to easily update content whenever needed.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We offer ongoing website maintenance, updates, security monitoring, and technical support.",
    },
  ];

  return (
    <>
    <Helmet>
  <title>
    Website Design Company in Delhi | Endless Solution
  </title>

  <meta
    name="description"
    content="Get professional website design in Delhi from Endless Solution. Build responsive, SEO-friendly and high-converting websites that help grow your business online. "
  />

  <meta
    name="keywords"
    content="Get professional website development services from Endless Solution. We create responsive, fast, SEO-friendly, and user-focused websites tailored to your business goals."
  />

 

  <link
    rel="canonical"
    href="https://endlesssol.com/website-designing"
  />

   

  
</Helmet>
    <div className=" text-white">
      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

        {/* Glow */}
        {/* <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 blur-[120px]"></div> */}

        <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Website Designing Company{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              in Delhi for High-Converting Websites
            </span>
          </motion.h1>

          {/* <p className="mt-6 text-gray-300">
            High-performing, conversion-focused websites designed to grow your business.
          </p> */}
        </div>
      </section>

      {/* 🟣 ABOUT */}
     <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* Image */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex justify-center order-1"
    >
      <img
        src={webImg}
        alt="Website Design"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
      />
    </motion.div>

    {/* Content */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="order-2"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Custom Website Design 

        <span className="block text-blue-500">
         Solutions in Delhi 
        </span>
      </h2>

      <p className="mt-6 text-[15px] sm:text-lg text-gray-600 leading-7 sm:leading-8">
       Your website is more than just an online presence—it’s the face of your brand and a powerful tool for business growth. At Endless Solution, we create modern, responsive, and 
         
      </p>

      <p className="mt-5 text-[15px] sm:text-lg text-gray-600 leading-7 sm:leading-8">
        user-friendly websites that help businesses build credibility, attract visitors, and generate quality leads.

      </p>
      <p className="mt-5 text-[15px] sm:text-lg text-gray-600 leading-7 sm:leading-8">
        Whether you’re a startup, small business, or established enterprise, our website design solutions in Delhi are tailored to your brand identity, business goals, and customer expectations.

      </p>

      {/* Highlight Box */}

      <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-5">
        <p className="font-medium text-gray-700 leading-7">
          Ready to build a website that delivers real results?
          <span className="font-semibold text-blue-600">
            {" "}Let's create something exceptional together.
          </span>
        </p>
      </div>

      {/* Button */}

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
      {/* WEBSITE CHALLENGES */}

     <section className="bg-[#f8fafc] py-14 sm:py-16 lg:py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Is Your Website Holding Your
        <span className="block mt-2 text-blue-500">
          Business Back?
        </span>
      </h2>

      <p className="mt-6 text-gray-600 text-[15px] sm:text-lg leading-7 sm:leading-8">
        An outdated or poorly designed website can negatively impact your
        business, making it difficult to attract and convert potential
        customers. If your website isn't delivering results, it may be
        time for a professional redesign.
      </p>
    </motion.div>

    {/* Challenge Box */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-10 sm:mt-14"
    >
      <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 lg:p-10 shadow-lg">

        <h3 className="mb-8 text-center text-xl sm:text-2xl font-semibold text-gray-900">
          Common Website Challenges
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">

          {[
            "Outdated and unprofessional design",
            "Slow loading speed",
            "Poor mobile responsiveness",
            "Confusing navigation",
            "Low user engagement",
            "Weak conversion rates",
            "Difficult content management",
            "Poor search engine visibility",
          ].map((item, index) => (
            <div
              key={index}
              className="
                h-full
                rounded-xl
                border
                border-gray-100
                bg-gray-50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400
                hover:shadow-lg
              "
            >
              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500">
                  <FiCheckCircle className="text-sm text-white" />
                </div>

                <p className="text-sm sm:text-base leading-6 text-gray-700">
                  {item}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </motion.div>

    {/* Bottom Content */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 sm:mt-10"
    >
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">

        <div className="rounded-[15px] bg-white px-5 sm:px-8 lg:px-10 py-8 sm:py-10 text-center">

          <p className="max-w-3xl mx-auto text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-600">
            At{" "}
            <span className="font-semibold text-blue-500">
              Endless Solution
            </span>
            , we solve these challenges with creative,
            high-performing, and conversion-focused website design
            solutions that help businesses attract more visitors,
            build trust, and generate more leads.
          </p>

        </div>

      </div>
    </motion.div>

  </div>
</section>

      {/* WEBSITE DESIGN SERVICES */}

      <section className="bg-white py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Professional    Website Designing
              <span className="block text-blue-500">
             Services in Delhi
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              We design websites that combine creativity, functionality, and
              performance to help your business grow.
            </p>
          </motion.div>

          {/* Services */}

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Website Design",
                text: "Unique, visually appealing websites designed specifically for your business and brand identity.",
              },
              {
                title: "Responsive Web Design",
                text: "Mobile-friendly websites that provide a seamless experience across desktops, tablets, and smartphones.",
              },
              {
                title: "Business Website Design",
                text: "Professional websites that establish credibility and help businesses connect with their target audience.",
              },
              {
                title: "Landing Page Design",
                text: "High-converting landing pages designed to generate inquiries, leads, and sales.",
              },
              {
                title: "Corporate Website Design",
                text: "Clean and professional websites tailored for organizations looking to strengthen their online presence.",
              },
              {
                title: "Website Redesign",
                text: "Refresh your existing website with modern layouts, improved usability, and better performance.",
              },
              {
                title: "UI/UX Design",
                text: "User-centered interfaces designed to improve engagement and create an exceptional browsing experience.",
              },
              {
                title: "CMS Website Design",
                text: "Easy-to-manage websites built on popular content management systems for simple updates and scalability.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group bg-[#f8fafc] rounded-2xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}

                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition duration-300">
                  <FiCheckCircle className="text-2xl" />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold text-gray-900 leading-7">
                  {service.title}
                </h3>

                {/* Text */}

                <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                  {service.text}
                </p>

                {/* Bottom Line */}

                <div className="mt-6 h-[3px] w-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-[#f8fafc] py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose
              <span className="block text-blue-500">Endless Solution?</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Businesses worldwide trust us because we focus on creating
              websites that not only look exceptional but also deliver
              outstanding performance, user experience, and measurable business
              results.
            </p>
          </motion.div>

          {/* Right Features */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              "Custom designs tailored to your brand",
              "Modern, clean & professional layouts",
              "Mobile-first responsive design",
              "Fast-loading & optimized websites",
              "SEO-friendly website structure",
              "User-focused design approach",
              "Secure & scalable solutions",
              "Transparent communication",
              "On-time project delivery",
              "Ongoing technical support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="text-white" />
                </div>

                <p className="text-gray-700 leading-6">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="bg-[#f8fafc] py-16 md:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked
              <span className="block text-blue-500">Questions</span>
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
              Find answers to the most common questions about our website design
              services.
            </p>
          </motion.div>

          {/* FAQ */}

          <div className="mt-14 max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-5">
                    {faq.question}
                  </h3>

                  <FiChevronDown
                    className={`text-2xl text-blue-500 transition-transform duration-300 ${
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
                  <div className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]">
              <div className="rounded-[22px] bg-white px-6 md:px-10 py-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Get Started Today
                </h3>

                <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
                  Let's create a professional website that reflects your brand,
                  engages your audience, and supports your business growth.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
                >
                  Request a Free Quote
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔥 CTA */}
      {/* <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold">
            Ready to Build Your Website?
          </h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-10 py-4 rounded-xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"
          >
            Get Free Consultation
          </motion.button>
        </div>

      </section> */}
    </div>
    </>
  );
}
