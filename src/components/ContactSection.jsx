import { useRef, useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);

  // ===============================
  // EMAIL JS
  // ===============================

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_fp19ewq",
        "template_3nnj81s",
        form.current,
        {
          publicKey: "8GXouWM0MI2jZrXKA",
        },
      );

      console.log("SUCCESS!", response);

      setShowPopup(true);
      form.current.reset();
    } catch (err) {
      console.error("EMAIL ERROR:", err);

      alert(
        `Failed to send email!\n\nStatus: ${err?.status}\nMessage: ${
          err?.text || err?.message || "Unknown error"
        }`,
      );
    }
  };

  // ===============================
  // OFFICE DATA
  // ===============================

  const offices = [
    {
      title: "Head Office",
      company: "Endless Solution",
      address: [
        "B-609, U.G Floor",
        "Sudharshan Park",
        "Moti Nagar",
        "New Delhi - 110015",
      ],
      map: "https://share.google/pAA7xEYZknfvq48EI",
    },

    {
      title: "Pitampura Office",
      company: "Endless Solution",
      address: [
        "Shop No. 5",
        "Opp. Metro Pillar No. 365",
        "DDA Market, Pitampura",
        "New Delhi - 110034",
      ],
      map: "https://share.google/7Z1wWLlivr9DPpkVm",
    },

    {
      title: "Karampura Office",
      company: "Endless Solution",
      address: [
        "I-32, Karampura",
        "Second Floor",
        "Near Hansa Documentation",
        "West Delhi - 110015",
      ],
      map: "https://share.google/fXDLdxIa9ET07lyPy",
    },

    {
      title: "Ghaziabad Office",
      company: "Endless Solution",
      address: [
        "E-160, Sector 9",
        "Vijay Nagar",
        "Ghaziabad",
        "Uttar Pradesh - 201009",
      ],
      map: "https://share.google/XFnkyztmAFf34RQ40",
    },
  ];

  return (
    <>
      <section className="py-24 px-6 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* ================= LEFT ================= */}

          <div>
            <p className="uppercase tracking-[6px] text-blue-400 text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
              Let's Build
              <br />
              Something Amazing
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              Whether you need a high-performing website, SEO, Google Ads,
              social media marketing, or complete digital solutions, our experts
              are here to help your business grow.
            </p>

            {/* CONTACT INFO */}

            <div className="mt-10 space-y-6">
              {/* PHONE */}

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <FiPhone size={24} className="text-green-400" />
                </div>

                <div>
                  <p className="font-semibold text-lg text-white">Call Us</p>

                  <p className="text-gray-400">+91 8377070881</p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <FiMail size={24} className="text-purple-400" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>

                  <p className="text-gray-400">info@endlesssol.com</p>
                </div>
              </div>

              {/* SUPPORT */}
            </div>

            {/* OFFICE HEADING */}

            {/* ================= OFFICE LOCATIONS ================= */}
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
    relative
    bg-white
    rounded-[32px]
    p-8
    lg:p-10
    shadow-[0_30px_80px_rgba(0,0,0,.25)]
    overflow-hidden
  "
          >
            {/* Background Blur */}

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-70"></div>

            <div className="relative z-10">
              <p className="uppercase tracking-[5px] text-blue-600 text-sm font-semibold">
                Free Consultation
              </p>

              <h3 className="text-4xl font-bold text-gray-900 mt-3">
                Tell Us About Your Project
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-5">
                {/* Name + Phone */}

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Full Name"
                    className="
            h-14
            px-5
            rounded-2xl
            bg-gray-700
            border
            border-transparent
            outline-none
            focus:border-blue-500
            transition
          "
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="
            h-14
            px-5
            rounded-2xl
            bg-gray-700
            border
            border-transparent
            outline-none
            focus:border-blue-500
            transition
          "
                  />
                </div>

                {/* Email */}

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Email Address"
                  className="
          w-full
          h-14
          px-5
          rounded-2xl
          bg-gray-700
          border
          border-transparent
          outline-none
          focus:border-blue-500
          transition
        "
                />

                {/* Service */}

                <select
                  name="service"
                  className="
          w-full
          h-14
          px-5
          rounded-2xl
          bg-gray-700
          border
          border-transparent
          outline-none
          focus:border-blue-500
          transition
        "
                >
                  <option>Website Development</option>

                  <option>SEO Services</option>

                  <option>Google Ads</option>

                  <option>Social Media Marketing</option>

                  <option>Google Business Profile</option>

                  <option>UI / UX Design</option>

                  <option>Branding</option>
                </select>

                {/* Message */}

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="
          w-full
          p-5
          rounded-2xl
          bg-gray-700
          border
          border-transparent
          outline-none
          resize-none
          focus:border-blue-500
          transition
        "
                />

                {/* Button */}

                <button
                  type="submit"
                  className="
          group
          relative
          w-full
          h-14
          rounded-2xl
          overflow-hidden
          text-white
          font-semibold
          text-lg
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-green-500
          hover:scale-[1.02]
          transition-all
          duration-500
          shadow-xl
        "
                >
                  <span className="relative z-10">Send Message</span>

                  <div
                    className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            bg-gradient-to-r
            from-green-500
            via-blue-500
            to-blue-700
            transition
            duration-500
          "
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f172a] px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-blue-400">
              Our Locations
            </p>

            <h2 className="text-white text-5xl font-bold mt-4">
              Visit Any Of Our Offices
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
              Visit the nearest Endless Solution office and meet our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-blue-500 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <FiMapPin className="text-blue-500" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {office.title}
                </h3>

                <p className="text-blue-400 mt-2 font-semibold">
                  {office.company}
                </p>

                <div className="mt-5 space-y-2">
                  {office.address.map((line, i) => (
                    <p key={i} className="text-gray-400">
                      {line}
                    </p>
                  ))}
                </div>

                <a
                  href={office.map}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-white transition"
                >
                  Get Directions
                  <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= SUCCESS POPUP ================= */}

      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div
            className="
              bg-white
              w-[90%]
              max-w-md
              rounded-3xl
              p-8
              text-center
              shadow-[0_25px_80px_rgba(0,0,0,.35)]
              animate-[fadeIn_.35s_ease]
            "
          >
            {/* Success Icon */}

            <div
              className="
                mx-auto
                w-20
                h-20
                rounded-full
                bg-gradient-to-r
                from-green-400
                to-green-600
                flex
                items-center
                justify-center
                text-white
                text-3xl
                shadow-lg
              "
            >
              <FaCheck />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              Thank You!
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Your message has been sent successfully.
              <br />
              One of our experts will contact you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="
                mt-8
                w-full
                h-12
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-green-500
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
