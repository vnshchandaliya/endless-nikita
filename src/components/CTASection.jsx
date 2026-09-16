import { FiPhone, FiCheck } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute w-96 h-96 bg-purple-400/30 blur-3xl rounded-full top-[-50px] left-[-50px]"></div>
      <div className="absolute w-72 h-72 bg-blue-400/30 blur-3xl rounded-full bottom-[-50px] right-[-50px]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight ">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-4 text-white/80">
            Get a free digital marketing consultation and discover how we can help you generate more leads and increase revenue.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            
          <Link to={"/contact"}>  <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition hover:bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] hover:text-white">
              Book Free Consultation
            </button></Link>

           <a href="tel:918377070881"> <button className="flex items-center cursor-pointer gap-2 border border-white px-6 py-3 rounded-lg hover:scale-105 transition hover:bg-white hover:text-black transition hover:bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] hover:text-white">
              <FiPhone /> Call Now
            </button> </a>
          </div>
        </div>

        {/* RIGHT SIDE FEATURES */}
        <div className="grid sm:grid-cols-2 gap-6">

          {[
            "Free Website Audit",
            "No Obligation",
            "Expert Consultation",
            "Custom Strategy",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full">
                <FiCheck />
              </div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}