import { FaCheck } from "react-icons/fa";
const Challenges = () => {
  const challenges = [
    "Few people find your site on Google",
    "Ads cost money but bring in little business",
    "Social posts feel like shouting into the void",
    "Traffic comes, but sales do not",
    "You are unsure which numbers matter—or why",
    "If any of these sound familiar, you are in the right place.",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-blue-400 text-sm mb-2 font-bold">
              Common Business Challenges
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The Challenges <span className="text-blue-600">We Fix</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Many businesses struggle to generate consistent growth online.
              If any of these problems sound familiar, you're in the right place.
            </p>
          </div>

          {/* Right Challenge Cards */}
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg">
                  <FaCheck />
                </div>

                <p className="text-gray-800 font-medium text-base md:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center">
          {/* <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg">
            <span className="text-2xl"></span>
            <p className="font-medium">
              
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Challenges;