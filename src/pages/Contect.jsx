import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ContactPage() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
const sendEmail = async (e) => {
  e.preventDefault();

  try {
    const response = await emailjs.sendForm(
      "service_fp19ewq",
      "template_3nnj81s",
      form.current,
      {
        publicKey: "8GXouWM0MI2jZrXKA",
      }
    );

    console.log("SUCCESS!", response);

    setShowPopup(true);
    form.current.reset();
  } catch (err) {
    console.error("EMAIL ERROR:", err);

    alert(
      `Failed to send email!\n\nStatus: ${err?.status}\nMessage: ${
        err?.text || err?.message || "Unknown error"
      }`
    );
  }
};

  return (
    <>
      <div className=" text-black">
        {/* 🔥 HERO */}
        <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)]"></div>

          <div className="relative md:pt-0 pt-18 z-10 max-w-3xl mx-auto ">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-transparent bg-clip-text">
                Touch
              </span>
            </motion.h1>

            <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
              Have a project in mind? Let’s connect and build something amazing
              together. We help businesses grow with websites, marketing, and
              smart solutions.
            </p>
          </div>
        </section>

        {/* 🔥 CONTACT SECTION */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* 🔵 LEFT SIDE */}
            <div>
              <h2 className="text-2xl text-black sm:text-3xl md:text-4xl font-bold">
                Let’s Build Something Great
              </h2>

              <p className="text-black mt-4 text-sm sm:text-base">
                Whether you need a website, SEO, ads, or a complete digital
                strategy — our team is here to help you grow faster and smarter.
              </p>

              <div className="mt-8 sm:mt-10 space-y-6">
                {/* ADDRESS */}
                {/* ADDRESS */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <FiMapPin size={24} className="text-blue-600" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-black">
                      Our Offices
                    </h4>

                    <p className="text-gray-500 mt-2">
                      Visit any of our offices across Delhi NCR.
                    </p>

                    <div className="mt-6 space-y-4 max-h-[420px] overflow-y-auto pr-2">
                      {[
                        {
                          title: "Head Office",
                          company: "Endless Solution",
                          address:
                            "B-609, U.G Floor, Sudharshan Park, Moti Nagar, New Delhi - 110015",
                           map: "https://share.google/pAA7xEYZknfvq48EI",
                        },
                        {
                          title: "Pitampura Office",
                          company: "Endless Solution",
                          address:
                            "Shop No.5, Opp. Metro Pillar No.365, DDA Market, Pitampura, New Delhi - 110034",
                             map: "https://share.google/7Z1wWLlivr9DPpkVm",
                        },
                        {
                          title: "Karampura Office",
                          company: "Endless Solution",
                          address:
                            "I-32, Karampura, Second Floor, Near Hansa Documentation, West Delhi - 110015",
                         map: "https://share.google/fXDLdxIa9ET07lyPy",
                        },
                        {
                          title: "Ghaziabad Office",
                          company: "Endless Solution",
                          address:
                            "E-160, Sector-9, Vijay Nagar, Ghaziabad, Uttar Pradesh - 201009",
                         map: "https://share.google/XFnkyztmAFf34RQ40",
                        },
                        {
                          title: "West Delhi Office",
                          company: "The Endless Solution",
                          address:
                            "GH-8 House No.113, Ground Floor, Sehyoog Apartments, New Delhi - 110087",
                          map: "https://share.google/JzmPUP8mRSZ4XoHxP",
                        },
                      ].map((office, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-gray-200 p-5 hover:border-blue-500 hover:shadow-lg transition-all bg-white"
                        >
                          <h5 className="font-bold text-lg text-black">
                            {office.title}
                          </h5>

                          <p className="text-blue-600 font-semibold mt-1">
                            {office.company}
                          </p>

                          <p className="text-gray-500 text-sm leading-7 mt-3">
                            {office.address}
                          </p>

                           <a
                  href={office.map}
                  target="_blank"
                            className="inline-flex items-center mt-5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                          >
                            View on Google Maps →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl  text-green-400">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Call Us</h4>
                    <p className="text-black text-sm">+91 8377070881</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl  text-purple-400">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-black text-sm">info@endlesssol.com</p>
                  </div>
                </div>
                {/* Support */}
                {/* <div className="flex gap-4">
                  <div className="p-1 rounded-xl  text-yellow-400">
                    <MdOutlineSupportAgent size={30} />
                  </div>
                  <div>
                    <h4 className="font-semibold">For technical support</h4>
                    <p className="text-black text-sm">+91-8377898410</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* 🟣 FORM */}
            <div className="max-w-md mx-auto lg:max-w-none w-full">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl text-black">
                <h3 className="text-lg sm:text-xl font-semibold mb-5">
                  Get Free Consultation
                </h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="p-3 text-sm sm:text-base rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="p-3 text-sm sm:text-base rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 text-sm sm:text-base rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <select
                    name="service"
                    className="w-full p-3 text-sm sm:text-base rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Select Service</option>
                    <option>Website Development</option>
                    <option>SEO Optimization</option>
                    <option>Google Ads</option>
                    <option>Social Media Marketing</option>
                    <option>GMB Optimization</option>
                  </select>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full p-3 text-sm sm:text-base rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="relative w-full py-3 sm:py-4 rounded-xl font-semibold overflow-hidden
                    bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg
                    hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">Send Message </span>
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-white/20 blur-xl transition"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl max-w-sm w-full">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full 
            bg-gradient-to-r from-green-400 to-green-600 text-white text-xl sm:text-2xl"
            >
              <FaCheck />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Message Sent Successfully!
            </h3>

            <p className="text-black text-sm mb-6">We’ll contact you shortly</p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2 rounded-lg bg-blue-600 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
