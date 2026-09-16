import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiCreditCard,
  FiTruck,
} from "react-icons/fi";

import {
  FiLayout,
  FiGrid,
  FiSmartphone,
   
   
  FiPackage,
  FiSearch,
  FiArrowRight,
} from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

import ecoImg from "../assets/e-com/e-com.png";
import img1 from "../assets/e-com/cart.jpg";
import img2 from "../assets/e-com/payment.jpg";
import img3 from "../assets/e-com/shipping.jpg";
import img4 from "../assets/e-com/product.jpg";
import img5 from "../assets/e-com/multi-payment.jpg";
import img6 from "../assets/e-com/inventory.jpg";
import { Link } from "react-router-dom";

const features = [
  { icon: <FiShoppingCart />, title: "Shopping Cart", image: img1 },
  { icon: <FiCreditCard />, title: "Secure Payments", image: img2 },
  { icon: <FiTruck />, title: "Shipping System", image: img3 },
  { icon: <FiShoppingCart />, title: "Product Management", image: img4 },
  { icon: <FiCreditCard />, title: "Multi Payment", image: img5 },
  { icon: <FiTruck />, title: "Inventory Tracking", image: img6 },
];

export default function EcommercePage() {
  return (
    <>
     <Helmet>
            <title>
              eCommerce Website Development Services | Endless Solution
            </title>
    
            <meta
              name="description"
              content="Launch a high-performing online store with Endless Solution. We build secure, responsive, and SEO-friendly eCommerce websites that increase sales and customer engagement."
            />
             <link
    rel="canonical"
    href="https://endlesssol.com/ecommerce"
  />
     </Helmet>
     <div className=" text-white">
      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

        <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            E-Commerce Website Design Services{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              That Turn Visitors into Customers
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300">
            Create fast, secure, and high-converting online stores that grow
            your business.
          </p>
        </div>
      </section>

      {/* 🟣 ABOUT */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={ecoImg}
            alt=""
            className="drop-shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Build an Online Store Designed to Sell, Scale, and Succeed
            </h2>

            <p className="text-gray-600 mb-6">
              A successful online store is more than an attractive website—it's
              a seamless shopping experience that encourages visitors to
              explore, purchase, and return. At Endless Solution, we create
              high-performing{" "}
              <strong>E-Commerce Website Design solutions</strong> that combine
              modern design, intuitive navigation, and conversion-focused
              functionality.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're launching a new online store or upgrading an
              existing one, we design e-commerce websites that reflect your
              brand, simplify the buying journey, and support long-term business
              growth.
            </p>
            <b>Launch an online store that's built for success.</b>
            <div className="space-y-3">
              {/* {[
                "Mobile Responsive Store",
                "Secure Payments",
                "Fast Checkout",
                "SEO Optimized",
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
                Schedule a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= E-Commerce Challenges Section ================= */}

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
                Your Online Store
                <span className="block text-blue-600">
                  Should Work as Hard as You Do
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                Customers expect fast, secure, and easy shopping experiences. If
                your website is difficult to navigate or slow to load, potential
                buyers are likely to leave before completing a purchase.
              </p>

              <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                A professionally designed e-commerce website helps you create
                trust, improve customer experience, and increase online sales.
              </p>

              <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="text-base sm:text-lg font-medium leading-7 text-gray-700">
                  The right e-commerce website removes barriers and creates a
                  smooth journey from product discovery to checkout.
                </p>
              </div>
            </motion.div>

            {/* Right Challenge Cards */}

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
                      "Low conversion rates despite good traffic",
                      "Complicated checkout processes",
                      "Poor mobile shopping experience",
                      "Slow website performance",
                      "Difficult product management",
                      "Inconsistent branding",
                      "Limited scalability as the business grows",
                      "High cart abandonment rates",
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
                          <FiShoppingCart className="text-white text-lg" />
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

      {/* ================= E-Commerce Services ================= */}

<section className="bg-slate-50 py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
        More Than an Online Store—
        <span className="block text-blue-600">
          A Complete Shopping Experience
        </span>
      </h2>

      <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
       Every online business has different goals, products, and customers. That's why we design e-commerce websites that are tailored to your brand and business model.

      </p>
    </motion.div>

    {/* Services */}

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

      {[
        {
          icon: <FiLayout />,
          title: "Custom Storefront Design",
          desc: "Create a visually engaging online store that reflects your brand identity and builds customer confidence from the very first visit.",
        },
        {
          icon: <FiGrid />,
          title: "Product Catalogue & Category Design",
          desc: "Organize products with intuitive navigation, smart filters, categories, and search functionality that help customers find exactly what they need.",
        },
        {
          icon: <FiSmartphone />,
          title: "Mobile-Responsive Shopping Experience",
          desc: "Deliver a seamless shopping experience across desktops, tablets, and smartphones so customers can shop anytime, anywhere.",
        },
        {
          icon: <FiShoppingCart />,
          title: "User-Friendly Shopping Cart & Checkout",
          desc: "Simplify the buying journey with an optimized checkout experience that reduces cart abandonment and improves conversions.",
        },
        {
          icon: <FiCreditCard />,
          title: "Secure Payment Integration",
          desc: "Support trusted payment gateways that provide customers with a safe, reliable, and convenient payment experience.",
        },
        {
          icon: <FiPackage />,
          title: "Inventory & Order Management",
          desc: "Manage products, inventory, stock levels, and customer orders through an organized and easy-to-use administration dashboard.",
        },
        {
          icon: <FiSearch />,
          title: "SEO-Friendly Website Structure",
          desc: "Build your online store with a search-engine-friendly structure that improves visibility and helps customers discover your products.",
        },
      ].map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl"
        >

          {/* Background Gradient */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>

          {/* Icon */}

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            {service.icon}
          </div>

          {/* Title */}

          <h3 className="mt-6 text-xl font-bold text-gray-900 leading-8">
            {service.title}
          </h3>

          {/* Description */}

          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
            {service.desc}
          </p>

         
        </motion.div>

      ))}

    </div>

    {/* Bottom Highlight */}

    
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
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-[240px]"
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-white">

        {/* Icon */}
        <div
          className="w-16 h-16 mb-5 flex items-center justify-center rounded-full
          bg-gradient-to-r from-blue-600 to-green-500
          text-2xl shadow-xl
          transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
        >
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 leading-7">
          Powerful CRM feature to boost your business growth.
        </p>

      </div>
    </motion.div>
  ))}
</div>
      </section>
      {/* ================= Why Choose Endless Solution ================= */}

<section className="bg-white py-14 sm:py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
    

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
        Why Businesses Choose
        <span className="block text-blue-600">
          Endless Solution
        </span>
      </h2>

      
    </motion.div>

    {/* Main Layout */}

    <div className="mt-20 grid lg:grid-cols-5 gap-8 lg:gap-10">

      {/* Left Content */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >

        <div className="sticky top-28 rounded-3xl bg-gradient-to-br from-blue-600 to-green-500 p-8 sm:p-10 text-white shadow-2xl">

          <h3 className="text-2xl sm:text-3xl font-bold">
          We don't believe in
            <span className="block">
              one-size-fits-all solutions.

            </span>
          </h3>

          <p className="mt-6 text-blue-100 leading-8 text-base sm:text-lg">
            Our team works closely with you to understand your
            products, customers, and vision before creating an
            e-commerce website tailored specifically for your
            business.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 border border-white/20 p-5 backdrop-blur">

            <p className="text-base sm:text-lg leading-7">
              Our focus is simple—
              <strong className="text-white">
                {" "}creating online stores that help businesses
                grow with confidence.
              </strong>
            </p>

          </div>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105"
          >
            Contact Us

            <FiArrowRight />
          </Link>

        </div>

      </motion.div>

      {/* Right Benefits */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3"
      >

        <div className="grid sm:grid-cols-2 gap-5">

          {[
            "Custom e-commerce website designs",
            "Modern and user-friendly layouts",
            "Mobile-first development approach",
            "SEO-ready website architecture",
            "Fast-loading pages",
            "Secure shopping experiences",
            "Easy product management",
            "Scalable solutions for future growth",
            "Ongoing technical support",
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -8,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >

              {/* Hover Gradient */}

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-green-500 transition-all duration-300 group-hover:w-2"></div>

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white">

                  <FiCheck />

                </div>

                <div>

                  <h4 className="font-semibold text-gray-900 leading-7">
                    {item}
                  </h4>

                  {/* <p className="mt-2 text-sm leading-6 text-gray-600">
                    Delivering reliable, scalable, and performance-focused
                    solutions that support long-term business growth.
                  </p> */}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20"
    >

      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 px-8 py-12 sm:px-12 sm:py-16 text-center shadow-2xl">

        {/* Decorative Blur */}

        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative">
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Start Selling
            <span className="block">
              With Confidence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-blue-100">
            Partner with Endless Solution to create an e-commerce
            website designed for performance, business growth,
            and long-term success.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Get a Free Quote

              <FiArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
            >
              Book a Free Consultation
            </Link>

          </div>

        </div>

      </div>

    </motion.div>

  </div>
</section>

      {/* 🔥 CTA */}
      {/* <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold">
            Ready to Launch Your Store?
          </h2>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Get Free Consultation
          </motion.button>
        </div>

      </section> */}
    </div>
    </>
   
  );
}
