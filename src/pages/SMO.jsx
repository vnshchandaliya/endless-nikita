import { motion } from "framer-motion";
import { FiCheckCircle, FiInstagram, FiFacebook, FiTrendingUp } from "react-icons/fi";

import smoImg from "../assets/smo/smo.png";

// Optional images (add your own)
import img1 from "../assets/smo/instagram.jpg";
import img2 from "../assets/smo/facebook.jpg";
import img3 from "../assets/smo/content.jpg";
import img4 from "../assets/videoEdit/ads.jpg";
import img5 from "../assets/smo/engagement.jpg";
import img6 from "../assets/graphic/branding.jpg";
import { Link } from "react-router-dom";

const features = [
  { icon: <FiInstagram />, title: "Instagram Growth", image: img1 },
  { icon: <FiFacebook />, title: "Facebook Marketing", image: img2 },
  { icon: <FiTrendingUp />, title: "Content Strategy", image: img3 },
  { icon: <FiInstagram />, title: "Social Media Ads", image: img4 },
  { icon: <FiFacebook />, title: "Audience Engagement", image: img5 },
  { icon: <FiTrendingUp />, title: "Brand Awareness", image: img6 },
];

export default function SMOPage() {
  return (
   <div className=" text-white">
      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 overflow-hidden">

        {/* Background */}
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
            Grow Your Brand on{" "}
            <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
              Social Media
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300">
            Build your online presence, increase engagement, and attract more customers with SMO.
          </p>

        </div>
      </section>


      {/* 🟣 ABOUT */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src={smoImg}
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
              Is Your Social Media Consuming Time But Delivering Zero Results?
            </h2>

            <p className="text-gray-600 mb-6">
               You're posting consistently, but your engagement is low, your followers aren't growing, and your content isn't bringing in customers. Many businesses invest significant time and resources into social media but struggle to achieve meaningful results.

            </p>

            <div className="space-y-3">
              {[
                "Low engagement despite regular posting",
                "Slow follower growth",
                "Inconsistent brand identity",
                "Limited organic reach",
                "Poor audience targeting",
                "Minimal website traffic from social platforms",
                "Low conversion rates"
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <FiCheckCircle className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">Without a strategic optimization plan, your social media efforts may fail to deliver the return on investment your business deserves. As a trusted Social Media Optimization Company, we create data-driven strategies that increase reach, improve engagement, and turn your social media into a valuable business asset. 
</p>

          </motion.div>

        </div>
      </section>

      {/* WHY SMO MATTERS */}

<section className="py-24 px-6 bg-white relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-200/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/40 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Content */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >

      {/* <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
        WHY SMO MATTERS
      </span> */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Why Social Media
        <span className="block text-blue-600">
          Optimization Matters
        </span>
      </h2>

      <p className="text-gray-600 leading-8 mb-6">
        A professionally optimized social media presence is no longer optional—it's an essential component of modern digital marketing. Our SMO Services services are designed to maximize your brand's online potential through proven strategies that improve reach, engagement, and conversions. 

      </p>

      <p className="text-black leading-8 mb-8 text-md">
        An effective SMO strategy helps your business:

      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        {[
          "Reach the Right Audience",
          "Build Brand Credibility",
          "Strengthen Customer Relationships",
          "Improve Search Visibility",
          "Generate Qualified Leads",
          "Increase Marketing ROI",
        ].map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white">
              <FiCheckCircle />
            </div>

            <span className="font-medium text-gray-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </motion.div>

    {/* Right Cards */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-5"
    >

      {[
        {
          number: "2X",
          title: "Higher Engagement",
          text: "Optimized profiles and content attract more interactions from your audience."
        },
        {
          number: "24/7",
          title: "Brand Presence",
          text: "Your social media platforms continue promoting your business around the clock."
        },
        {
          number: "100%",
          title: "Audience Focused",
          text: "Reach people who are most likely to become loyal customers."
        },
        {
          number: "ROI",
          title: "Business Growth",
          text: "Drive more website traffic, leads, and conversions through strategic optimization."
        },
      ].map((card, index) => (

        <div
          key={index}
          className="rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 text-white shadow-xl hover:-translate-y-2 transition duration-300"
        >

          <h3 className="text-4xl font-bold text-blue-400 mb-3">
            {card.number}
          </h3>

          <h4 className="text-xl font-semibold mb-3">
            {card.title}
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            {card.text}
          </p>

        </div>

      ))}

    </motion.div>

  </div>

</section>

{/* OUR SMO SOLUTIONS */}

<section className="py-24 px-6   relative overflow-hidden">

  {/* Glow */}
  {/* <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div> */}
  {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full"></div> */}

  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto mb-20"
    >


      <h2 className="text-4xl md:text-5xl font-bold text-black mt-6">
        Our Professional
        <span className="block  text-blue-600">
          Social Media Optimization Solutions
        </span>
      </h2>

      <p className="text-black leading-8 mt-6">
       As a leading Social Media Optimization agency, Our team combines creativity with analytics to deliver sustainable growth that supports your long-term marketing goals. Through strategic social media optimization, audience targeting, content planning, and brand positioning, we help improve engagement, increase organic reach, strengthen brand awareness, and generate qualified leads.

      </p>

    </motion.div>

    {/* Services Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      {[
        "Social Media Profile Optimization",
        "Brand Identity Enhancement",
        "Audience Research & Targeting",
        "Content Strategy Development",
        "Hashtag Research & Optimization",
        "Organic Engagement Growth",
        "Social Media SEO",
        "Performance Monitoring & Analytics",
        "Competitor Analysis",
        "Monthly Performance Reporting",
      ].map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group rounded-2xl border border-black bg-[#0f172a] backdrop-blur-xl p-6 hover:border-purple-400/40 transition-all duration-300"
        >

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white text-xl mb-5 group-hover:scale-110 transition">
            <FiCheckCircle />
          </div>

          <h3 className="text-lg font-semibold text-white leading-7">
            {service}
          </h3>

        </motion.div>

      ))}

    </div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20"
    >

      <div className="rounded-3xl  bg-blue-600   p-[1px]">

        <div className="rounded-3xl bg-[#0f172a] px-10 py-12 text-center">

          <h3 className="text-3xl font-bold text-white mb-5">
            Every strategy is tailored to align with your business objectives and industry requirements.

          </h3>

        </div>

      </div>

    </motion.div>

  </div>

</section>
{/* SIMPLE CTA */}




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
               <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center 
               rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
               text-white text-2xl shadow-lg
               transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
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

<section className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] p-10 md:p-14 text-center shadow-2xl"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Strengthen Your Social Media Presence?
      </h3>

      <p className="text-blue-100 max-w-3xl mx-auto leading-8 mb-8">
        Don't let your competitors capture the attention your business deserves.
        Partner with our Social Media Optimization experts to build a powerful
        online presence that drives engagement, generates qualified leads, and
        supports long-term business growth.
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:scale-105 transition duration-300"
      >
        Get Your Free Consultation →
      </Link>
    </motion.div>

  </div>
</section>

    </div>
  );
}