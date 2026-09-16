import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart, FiCheckCircle } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import Whoweimg from "../assets/image/whoweare.png";

import WhyChoose from "../components/WhyChooseSection";
import WhyChooseUs from "../components/WhyChooseUs";

const data = [
  {
    icon: <FiTarget />,
    title: "Our Mission",
    desc: "Deliver result-driven strategies that help businesses grow faster.",
  },
  {
    icon: <FiEye />,
    title: "Our Vision",
    desc: "Become a global leader in digital growth solutions.",
  },
  {
    icon: <FiHeart />,
    title: "Our Values",
    desc: "Honesty, performance, and long-term relationships.",
  },
];

const points = [
  "Data-driven strategies",
  "Proven results",
  "Expert team",
  "Transparent reporting",
  "High ROI campaigns",
];

export default function AboutPage() {
  return (
    <>
     <Helmet>
        <title>
          About Endless Solution| Digital Marketing & Web Development Company
        </title>

        <meta
          name="description"
          content="Learn about Endless Solution, a trusted digital marketing and web development company offering SEO, website design, branding, and business growth solutions."
        />
        <link
    rel="canonical"
    href="https://endlesssol.com/about"
  />
 </Helmet>
    <div className=" text-black">

      {/* 🔥 HERO */}
      <section className="relative py-28 px-6  overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

       
        <div className="relative z-10 text-center pt-10 max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              Our Company
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300">
            We help businesses grow digitally with powerful strategies and modern solutions.
          </p>

        </div>
      </section>


      {/* 🟣 WHY CHOOSE US */}
    < WhyChooseUs/>


      {/* 🟠 WHO WE ARE */}
      <section className="py-24 px-6 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src={Whoweimg}
            className="rounded-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Who We Are
            </h2>

            <p className="text-gray-400 mb-6">
              We are a growth-focused digital marketing agency helping businesses scale with SEO, Ads, and web solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-white shadow-xl">
              {[
                "Data Strategy",
                "High ROI",
                "Expert Team",
                "Transparency",
              ].map((item, i) => (
                <div key={i} className="bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] p-4 rounded-xl">
                  {item}
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </section>


      {/* 🔥 CORE VALUES */}
     <section className="py-24 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold">
      Mission, Vision & Values
    </h2>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
    {data.map((item, i) => (
      <motion.div
  key={i}
  whileHover={{
    y: -8,
    transition: { duration: 0.3 },
  }}
  className="h-full"
>
  <div
    className="
      h-full
      rounded-2xl
      bg-gradient-to-r
      from-sky-500
      via-cyan-500
      to-green-500
      p-[2px]
      shadow-xl
    "
  >
    <div
      className="
        h-full
        rounded-2xl
        bg-[#020b22]
        p-8
        flex
        flex-col
        justify-center
        text-center
        min-h-[220px]
      "
    >
      <div className="text-3xl mb-4 text-blue-400 flex justify-center">
        {item.icon}
      </div>

      <h3 className="font-semibold text-2xl mb-4 text-white">
        {item.title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  </div>
</motion.div>
    ))}
  </div>
</section>

    </div>
    </>
  );
}