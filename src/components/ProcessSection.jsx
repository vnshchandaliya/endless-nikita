import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Audit",
    desc: "We analyze your business, competitors & market deeply.",
  },
  {
    title: "Strategy Development",
    desc: "We create a strong data-driven marketing plan.",
  },
  {
    title: "Implementation",
    desc: "We execute campaigns with precision & optimization.",
  },
  {
    title: "Measure & Scale",
    desc: "We track results & scale what's working.",
  },
];

export default function ProcessZigzag() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-bold">OUR PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Drive Your Success
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full 
          bg-gradient-to-b from-blue-400 to-purple-500 md:-translate-x-1/2"></div>

          {/* 🔥 IMPORTANT: SPACE-Y FOR SEPARATION */}
          <div className="space-y-16">

            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* CARD */}
                <div className="group w-full rounded-xl md:w-[45%] pl-12 md:pl-0 hover:bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]  ">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden p-6 rounded-2xl 
                    bg-white border border-gray-200 shadow-md 
                    transition duration-500 hover:shadow-xl hover:-translate-y-2"
                  >

                    {/* HOVER BG */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10 
                    opacity-0 group-hover:opacity-100  transition duration-500"></div>

                    {/* ICON */}
                    <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 
                    opacity-0 group-hover:bottom-4 group-hover:opacity-100 
                    transition-all duration-500">

                      {/* <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-blue-500 text-white shadow-lg">
                        🚀
                      </div> */}

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        {step.desc}
                      </p>
                    </div>

                  </motion.div>
                </div>

                {/* CIRCLE */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 
                w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-full 
                bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
                text-white font-bold shadow-lg">
                  {i + 1}
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}