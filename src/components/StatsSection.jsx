import { FiBriefcase, FiUsers, FiDollarSign, FiStar } from "react-icons/fi";
import img1 from "../assets/impact-Img/project.jpg";
import img2 from "../assets/impact-Img/client.jpg";
import img3 from "../assets/impact-Img/revenue.jpg";
import img4 from "../assets/impact-Img/rating.jpg";

const stats = [
  {
    icon: <FiBriefcase />,
    image: img1,
    number: "500+",
    label: "Projects Completed",
  },
  {
    icon: <FiUsers />,
    image: img2,
    number: "350+",
    label: "Happy Clients",
  },
  {
    icon: <FiDollarSign />,
    image: img3,
    number: "50+",
    label: "Revenue Generated",
  },
  {
    icon: <FiStar />,
    image: img4,
    number: "4.9",
    label: "Google Rating",
  },
];

export default function StatsSection() {
  return (
    // bg-[#0b1220]
    <section className="py-20 px-6  text-black">
      <div className="max-w-7xl mx-auto">

        {/* HEADING (optional modern touch) */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm mb-2 font-bold">OUR IMPACT</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Numbers That Define Our Success
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden 
  bg-black/5 backdrop-blur-lg border border-white/10 
  p-6 rounded-2xl text-center hover:scale-105 transition duration-300"
            >

              {/* 🔥 BACKGROUND IMAGE (HOVER) */}
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover 
    opacity-0 group-hover:opacity-20 transition duration-500"
              />

              {/* 🔥 DARK OVERLAY */}
              <div className="absolute inset-0 bg-white/80 group-hover:bg-black/50 transition"></div>

              {/* 🔥 CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center 
    rounded-full bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] 
    text-white text-xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* NUMBER */}
                <h3 className="text-3xl font-bold text-blue-400 group-hover:text-white transition">
                  {item.number}
                </h3>

                {/* LABEL */}
                <p className="text-gray-500 mt-2 text-sm group-hover:text-white transition">
                  {item.label}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}