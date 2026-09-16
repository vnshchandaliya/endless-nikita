import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";


import webImg from "../assets/services-img/website.png";
import seoImg from "../assets/services-img/seo.png";
import adsImg from "../assets/services-img/ads.png";
import smmImg from "../assets/services-img/smm.png";
import smoImg from "../assets/services-img/smo.png";
import gmbImg from "../assets/services-img/gmb.png";
const services = [
  {
    title: "Website Development",
    desc: "We build fast, responsive, and modern websites designed to attract visitors, improve user experience, and convert traffic into loyal customers for long-term business growth and strong online presence.",
    img: webImg,
    link:"/website-designing"
    
  },
  {
    title: "SEO Optimization",
    desc: "We optimize your website to rank higher on Google, increase organic traffic, and generate quality leads using proven SEO techniques and strategies that deliver consistent and long-lasting results.",
    img: seoImg,
    link: "/seo",
  },
  {
    title: "Advertising ",
    desc: "We create high-performing advertising campaigns on Google and social media platforms to target the right audience, maximize ROI, and drive more conversions, sales, and business growth effectively.",
    img: adsImg,
    link: "/ads",
  },
  //  {
  //   title: "Social Media Marketing",
  //   desc: "We manage and grow your social media presence with engaging content, creative strategies, and targeted campaigns to build brand awareness, increase followers, and boost customer engagement consistently.",
  //   img: smmImg,
  // },
  {
    title: "Social Media Optimization ",
    desc: "We optimize your social media profiles with proper branding, keywords, and engaging content to improve visibility, attract the right audience, and build strong online presence consistently.",
    img: smoImg,
    link: "/smo",
  },
   {
    title: "Google My Business creation",
    desc: "We create and fully optimize your Google My Business profile with accurate business details, images, keywords, and regular updates to improve local search visibility, attract nearby customers, increase calls, visits, and build trust.",
    img: gmbImg,
    link: "/gmb",
  },
];

export default function ServicesSlider() {
  return (
    <section className="py-20 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Our Services 
            <div className=" border w-20 mx-10 mt-3 text-blue-500"></div>
          </h2>

          <div className="flex gap-3">
            <button className="prevBtn bg-white/10 px-4 py-2 rounded hover:bg-white/20">
              ←
            </button>
            <button className="nextBtn bg-white/10 px-4 py-2 rounded hover:bg-white/20">
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2} // 👈 MAIN + HALF NEXT
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 1.2 }, // 👈 FIX: always 1 + half
          }}
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:scale-[1.02] transition duration-300">

                {/* LEFT IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="w-40 md:w-52 object-contain fill-white drop-shadow-lg drop-shadow-white"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.desc}
                  </p>

                  <Link
  to={item.link}
  className="text-blue-400 hover:underline"
>
  Learn More →
</Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}