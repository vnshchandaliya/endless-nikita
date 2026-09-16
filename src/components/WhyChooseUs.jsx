import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import whyChooseUs from "../assets/image/whychooseus.png";

const WhyChooseUs = () => {
  const points = [
    "Customized growth strategies",
    "Data-backed decision making",
    "Transparent communication",
    "Focus on lead quality, not just traffic",
    "Continuous campaign optimization",
    "Dedicated support from experienced professionals",
  ];

  return (
    <section className="py-24 px-6 bg-[#0F172A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 font-semibold uppercase tracking-wider mb-3">
            Why Choose Endless Sol
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
           Why Choose Endless Sol?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At Endless Sol, we believe digital marketing should do more than
            generate clicks—it should drive real business growth. We combine
            strategy, creativity, and data to help businesses attract the right
            audience, generate quality leads, and increase revenue.
          </p>

          <div className="space-y-4">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <CheckCircle2
                  size={22}
                  className="text-green-400 flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={whyChooseUs}
            alt="Why Choose Endless Sol"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 right-6 md:right-[-20px] bg-white text-gray-900 p-6 rounded-2xl shadow-2xl max-w-xs">
            <h4 className="text-xl font-bold text-blue-600 mb-2">
              Your Growth Partner
            </h4>

            <p className="text-sm leading-relaxed text-gray-600">
              We're not just another service provider—we become an extension of
              your team, working toward the same business goals.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;