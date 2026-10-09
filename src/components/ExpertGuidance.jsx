import { Target, BarChart3, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertGuidance = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}

          <div className="max-w-xl">
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Expert Guidance for
              <span className="mt-2 block text-blue-600">
                Smarter Marketing Decisions
              </span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Digital marketing is constantly changing, and businesses need the
              right strategy to stay visible, reach potential customers, and
              generate more enquiries online.
            </p>

            <p className="mt-5 text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-600">
              At Endless Solution, we provide digital marketing services in
              Delhi, including SEO, local SEO, website development, social media
              marketing, Google Ads, and creative solutions. We create
              customized strategies based on your business goals, target
              audience, and location.
            </p>
            <p className="mt-5 text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-600">
              From <strong>Pitampura, Rohini, Moti Nagar and Patel Nagar to Rajouri Garden, Janakpuri, Laxmi Nagar and South Delhi,</strong>  we help businesses build a stronger online presence across Delhi and all over India.

            </p>
             <Link to={"/about"}>
            <button className="mt-8 px-6 py-3 rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#2563eb_0%,_#22c55e_100%)] text-white shadow-lg hover:scale-105 transition">
              Book your free consultation
            </button>
          </Link>
          </div>

          {/* RIGHT */}

          <div className="relative mx-auto w-full max-w-xl">
            {/* Glow */}

            <div className="absolute -left-16 -top-16 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-blue-400/20 blur-3xl"></div>

            <div className="absolute -bottom-16 -right-16 h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-green-400/20 blur-3xl"></div>

            {/* Card */}

            <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Why Businesses Choose Us
              </h3>

              <div className="mt-8 space-y-7">
                {[
                  {
                    icon: <Target size={22} />,
                    title: "Clear Strategy",
                    text: "Build a roadmap focused on measurable growth and business goals.",
                  },
                  {
                    icon: <BarChart3 size={22} />,
                    title: "Data-Driven Insights",
                    text: "Make decisions based on performance data instead of guesswork.",
                  },
                  {
                    icon: <Rocket size={22} />,
                    title: "Sustainable Growth",
                    text: "Create long-term marketing systems that continue delivering results.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>

                      <p className="mt-1 text-sm sm:text-base leading-7 text-white/85">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Box */}

              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-base sm:text-lg leading-7">
                  Our goal is simple: help you make informed decisions that
                  contribute to long-term business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;
