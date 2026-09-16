import { motion } from "framer-motion";
import { FiCheckCircle, FiPenTool, FiImage, FiLayers } from "react-icons/fi";

import designImg from "../assets/graphic/graphic.png";

import img1 from "../assets/graphic/logo.jpg";
import img2 from "../assets/graphic/8893841.jpg";
import img3 from "../assets/graphic/banner .jpg";
import img4 from "../assets/graphic/branding.jpg";
import img5 from "../assets/graphic/ui.jpg";
import img6 from "../assets/graphic/print.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: <FiPenTool />, title: "Logo Design", image: img1 },
  { icon: <FiImage />, title: "Social Media Posts", image: img2 },
  { icon: <FiLayers />, title: "Banner & Ads Design", image: img3 },
  { icon: <FiPenTool />, title: "Brand Identity", image: img4 },
  { icon: <FiImage />, title: "UI/UX Design", image: img5 },
  { icon: <FiLayers />, title: "Print Design", image: img6 },
];

export default function GraphicDesignPage() {
  return (
    <>
 <Helmet>
    <title>
      Graphic Design Services | Creative Branding Solutions | Endless Solution
  </title>

   <meta
    name="keywords"
    content="Create a lasting impression with Endless Solution's graphic design services. We design logos, social media creatives, brochures, banners, business cards, and branding materials." />

    <link
    rel="canonical"
    href="https://endlesssol.com/graphic-designing"
  />
       
 </Helmet>
    <div className=" text-white">
      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 blur-[120px]"></div>

        <div className="relative pt-10 z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Graphic Design Agency{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              That Brings Your Ideas to Life
            </span>
          </motion.h1>

          <p className="mt-6 text-white">
            Stunning visuals that build your brand identity and attract
            customers.
          </p>
        </div>
      </section>

      {/* 🟣 ABOUT */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={designImg}
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
              Create a Strong First Impression with Creative Designs That
              Inspire Trust
            </h2>

            <p className="text-black font-bold mb-6">
              Your Brand Has a Story. Endless Sol Helps You Tell It Beautifully.
            </p>
            <p>
              In today's competitive marketplace, first impressions matter more
              than ever. Before customers read about your products or services,
              they notice your brand. A professionally designed logo, engaging
              social media graphics, and visually appealing marketing materials
              can instantly build trust and make your business memorable.
            </p>
            <br />
            <p>
              At <strong className="font-semibold text-blue-500"> Endless Sol</strong > , we believe every business
              deserves a visual identity that reflects its values, tells its
              story, and builds lasting customer relationships, your audience,
              communicate your brand's personality, and help your business
              grow.Our <strong className="font-semibold text-blue-500">Graphic Design Services</strong>  are designed to help businesses
              create a professional image that attracts attention, builds
              credibility, and supports long-term growth.
            </p>
            <br />
            <p>
              We don't believe in generic templates or one-size-fits-all
              designs. Every project is thoughtfully crafted to match your brand
              personality, business goals, and target audience.
            </p>
            <br />
            <p>
              We don't believe in generic templates or one-size-fits-all
              designs. Every project is thoughtfully crafted to match your brand
              personality, business goals, and target audience.
            </p>

            {/* <div className="space-y-3">
              {[
                "Creative & Unique Designs",
                "Brand Identity Focused",
                "High Quality Graphics",
                "Social Media Ready",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div> */}
            <Link
                to="/contact"
                className="inline-block mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition duration-300"
              >
              Get a Free Design Consultation Today 

              </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY PROFESSIONAL DESIGN MATTERS */}

<section className="relative overflow-hidden bg-white px-5 py-16 sm:px-6 md:py-24">
  {/* Soft Background Glows */}
  <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-600 to-green-500 blur-[120px]" />
  <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-600 to-green-500 blur-[120px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
    {/* LEFT CONTENT */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      

      <h2 className="max-w-2xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Your Brand Deserves More Than
        <span className="block    text-blue-600">
          Just Good Design
        </span>
      </h2>

      <div className="mt-6 space-y-5 text-base leading-7 text-gray-600 sm:leading-8">
        <p>
          Great design is more than choosing attractive colors or stylish
          fonts. It's about communicating your message clearly, building trust,
          and creating meaningful connections with your audience.
        </p>

        <p>
          Imagine walking into two stores that offer the same product. One
          looks modern, organized, and welcoming, while the other appears
          outdated and inconsistent. Most people naturally choose the business
          that feels more professional.
        </p>

        <p className="font-semibold text-gray-900">
          The same principle applies online.
        </p>

        <p>
          Professional Graphic Design Services help your business stand out in
          crowded markets, strengthen your brand identity, and create a
          memorable customer experience.
        </p>
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      {/* Decorative Gradient Border */}

      <div className="rounded-[28px] bg-gradient-to-r from-blue-600 to-green-500 p-[1px] shadow-2xl">
        <div className="rounded-[27px] bg-[#fff] p-5 sm:p-7 md:p-8">
          {/* Top Text */}

          <div className="mb-7">
            {/* <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              The Difference Design Makes
            </span> */}

            <h3 className="mt-3 text-2xl font-bold text-black sm:text-3xl">
              First Impressions Shape Customer Decisions.
            </h3>
          </div>

          {/* Comparison */}

          <div className="grid gap-4 sm:grid-cols-2">
            {/* WITHOUT STRATEGY */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-black shadow-lg text-xl font-bold text-red-400">
                ×
              </div>

              <h4 className="mb-4 text-lg font-semibold text-black">
                Without Strategic Design
              </h4>

              <div className="space-y-3 text-sm text-black">
                <p>Inconsistent brand identity</p>
                <p>Weak first impressions</p>
                <p>Lower customer trust</p>
                <p>Easy to overlook</p>
              </div>
            </div>

            {/* WITH STRATEGY */}

            <div className="rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-5 sm:p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg text-xl text-white">
                <FiCheckCircle />
              </div>

              <h4 className="mb-4 text-lg font-semibold text-black">
                With Strategic Design
              </h4>

              <div className="space-y-3 text-sm text-black">
                <p>Strong visual identity</p>
                <p>Professional brand presence</p>
                <p>Higher customer confidence</p>
                <p>Memorable experiences</p>
              </div>
            </div>
          </div>

          {/* Bottom Brand Statement */}

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg text-white">
                <FiCheckCircle />
              </div>

              <p className="text-sm leading-7 text-black sm:text-base">
                At <span className="font-semibold text-blue-500">Endless Sol</span>,
                every design decision is backed by creativity, strategy, and a
                deep understanding of how visual communication influences
                customer behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* DESIGN CHALLENGES SECTION */}

<section className="bg-[#f8fafc] px-5 py-16 sm:px-6 md:py-24">
  <div className="mx-auto max-w-7xl">

    {/* TOP CONTENT */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-500 sm:text-sm">
        COMMON DESIGN CHALLENGES
      </span> */}

      <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Is Your Business Facing These
        <span className="block text-blue-500">
          Design Challenges?
        </span>
      </h2>

      <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Many businesses struggle to create a consistent and professional brand
        image. Poor-quality visuals can make even the best products or services
        look less trustworthy.
      </p>
    </motion.div>


    {/* CHALLENGES LIST */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mt-12 max-w-5xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <h3 className="mb-6 text-xl font-semibold text-gray-900">
        You may be experiencing challenges such as:
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Your logo no longer reflects your business.",
          "Social media graphics receive little engagement.",
          "Marketing materials look inconsistent.",
          "Your website lacks visual appeal.",
          "Customers don't recognize your brand.",
          "Advertisements fail to capture attention.",
          "Different platforms use different branding styles.",
          "You spend valuable time trying to design everything yourself.",
        ].map((item, index) => (
          <div
            key={index}
            className="group flex items-start gap-3 rounded-xl border border-transparent bg-gray-50 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-50/50"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white">
              <FiCheckCircle className="text-sm" />
            </div>

            <p className="text-sm leading-6 text-gray-700 sm:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>


    {/* BOTTOM CONTENT */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 p-[1px]"
    >
      <div className="rounded-[15px] bg-white px-6 py-8 text-center sm:px-10">
        <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          If any of these sound familiar, you're not alone.
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
          Our Graphic Design Company helps businesses overcome these challenges
          with creative, custom-designed solutions that reflect professionalism
          and build customer confidence.
        </p>
      </div>
    </motion.div>

  </div>
</section>

{/* GRAPHIC DESIGN SERVICES SECTION */}

<section className="bg-white px-5 py-16 sm:px-6 md:py-24">
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center"
    >
      

      <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Our Graphic Design
        <span className="block text-blue-500">Services</span>
      </h2>

      <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        At Endless Sol, we create professional Graphic Design Services that help
        businesses build a strong brand identity, capture attention, and
        communicate their message with confidence.
      </p>
    </motion.div>

    {/* SERVICES */}

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: "01",
          title: "Logo Design",
          text: "Build a memorable brand with a custom logo designed to reflect your business and leave a lasting impression.",
        },
        {
          number: "02",
          title: "Brand Identity Design",
          text: "Create a consistent brand image with professionally designed colors, typography, and visual assets.",
        },
        {
          number: "03",
          title: "Social Media Graphics",
          text: "Increase engagement with creative social media designs that keep your brand fresh and recognizable.",
        },
        {
          number: "04",
          title: "Website Graphics",
          text: "Enhance your website with modern banners, icons, illustrations, and landing page visuals.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-white hover:shadow-xl sm:p-7"
        >
          {/* NUMBER */}

          <div className="mb-6 flex items-center justify-between">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-4xl font-bold text-transparent">
              {service.number}
            </span>

            <div className="h-2.5 w-2.5 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-[1.6]" />
          </div>

          {/* CONTENT */}

          <h3 className="text-xl font-semibold text-gray-900">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            {service.text}
          </p>

          {/* BOTTOM LINE */}

          <div className="mt-7 h-[2px] w-12 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full" />
        </motion.div>
      ))}
    </div>

  </div>
</section>
{/* WHY CHOOSE ENDLESS SOL */}

<section className="bg-[#f8fafc] px-5 py-16 sm:px-6 md:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

    {/* LEFT CONTENT */}

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      
      <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Why Businesses Choose
        <span className="block text-blue-500">
          Endless Sol
        </span>
      </h2>

      <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Choosing the right Graphic Design Agency isn't just about finding
        talented designers. It's about partnering with a creative team that
        understands your business goals and translates them into designs that
        deliver results.
      </p>

      <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        At Endless Sol, we combine creativity with strategy to create visuals
        that make a real impact.
      </p>

      {/* SIMPLE HIGHLIGHT */}

      <div className="mt-8 border-l-4 border-blue-500 bg-white px-5 py-4 shadow-sm">
        <p className="font-medium leading-7 text-gray-700">
          Creative thinking, strategic design, and consistent branding—all
          focused on helping your business communicate with confidence.
        </p>
      </div>
    </motion.div>


    {/* RIGHT CARDS */}

    <div className="grid gap-5 sm:grid-cols-2">

      {[
        {
          number: "01",
          title: "Creative & Custom Designs",
          text: "Every business is unique, and so is every design we create. We deliver original, brand-focused visuals tailored to your goals.",
        },
        {
          number: "02",
          title: "Experienced Design Team",
          text: "Our skilled designers combine creativity with industry expertise to create designs that are visually appealing and strategically effective.",
        },
        {
          number: "03",
          title: "Consistent Brand Identity",
          text: "From logos to marketing materials, we ensure every design reflects your brand consistently across all platforms.",
        },
        {
          number: "04",
          title: "Collaborative Approach",
          text: "Your ideas matter. We work closely with you throughout the design process to ensure the final result aligns with your vision.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg sm:p-7"
        >
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-3xl font-bold text-transparent">
            {item.number}
          </span>

          <h3 className="mt-5 text-lg font-semibold text-gray-900 sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            {item.text}
          </p>

          <div className="mt-6 h-[2px] w-10 bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300 group-hover:w-full" />
        </motion.div>

      ))}

    </div>

  </div>
</section>

{/* DESIGN INVESTMENT SECTION */}

<section className="bg-white px-5 py-16 sm:px-6 md:py-24">
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mx-auto max-w-4xl text-center"
  >
    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
      Why Great Design Is an{" "}
      <span className="text-blue-500">
        Investment, Not an Expense
      </span>
    </h2>

    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-green-500" />

    <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
      Professional design influences how people perceive your business. When
      your branding looks polished, customers naturally feel more confident
      choosing your products or services.
    </p>

    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
      At Endless Sol, we create designs that don't just look impressive—they
      support your marketing efforts, strengthen customer trust, and help your
      business grow with confidence.
    </p>
  </motion.div>
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

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl font-bold">
                        Ready to Elevate Your Brand Design?
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500"
                    >
                        Get Free Consultation
                    </motion.button>
                </div>

            </section> */}
    </div>
    </>
  );
}
