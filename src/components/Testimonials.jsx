import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "MAHAVEER",
    location: "Google Review",
    stay: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Mahaveer&background=0F4C81&color=fff",
    review:
      "Great service. The team was responsive, professional, and delivered exactly what was promised. Highly satisfied with the overall experience.",
    rating: 5,
  },

  {
    id: 2,
    name: "AKSHAY RAMDAS KARDAK",
    location: "Google Review",
    stay: "SEO Client",
    image: "https://ui-avatars.com/api/?name=Akshay+Ramdas+Kardak&background=0F4C81&color=fff",
    review:
      "I had a great experience with Endless Solution. They are one of the best SEO service providers in Delhi. Their team is professional, responsive, and knowledgeable. They helped improve my website's Google rankings and increased organic traffic significantly.",
    rating: 5,
  },

  {
    id: 3,
    name: "Dhruv Singhal",
    location: "Google Review",
    stay: "Digital Marketing Client",
    image: "https://ui-avatars.com/api/?name=Dhruv+Singhal&background=0F4C81&color=fff",
    review:
      "Working with this digital marketing company has been an excellent experience. Their team is highly professional, transparent, and committed to delivering quality work on time. From website development to SEO and Google Ads, every service was executed with precision and expertise.",
    rating: 5,
  },

  {
    id: 4,
    name: "PSPL GLOBAL",
    location: "Google Review",
    stay: "SEO Client",
    image: "https://ui-avatars.com/api/?name=PSPL+GLOBAL&background=0F4C81&color=fff",
    review:
      "One of the most trusted digital marketing agencies. Their SEO strategy helped our business rank for important keywords on Google. We are extremely happy with the results.",
    rating: 5,
  },

  {
    id: 5,
    name: "Rahul Sharma",
    location: "Google Review",
    stay: "Website Development",
    image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0F4C81&color=fff",
    review:
      "I got my business website designed by Endless Solution and it looks amazing. The website is fast, mobile-friendly, and professionally designed. Highly recommend their website development services.",
    rating: 5,
  },

  {
    id: 6,
    name: "Simran Passi",
    location: "Google Review",
    stay: "SEO Client",
    image: "https://ui-avatars.com/api/?name=Simran+Passi&background=0F4C81&color=fff",
    review:
      "One of the best digital marketing agencies I've worked with. Their SEO services helped my website rank higher on Google, and I started getting quality leads within a few months. Highly recommended!",
    rating: 5,
  },

  {
    id: 7,
    name: "Arjun Singh",
    location: "Google Review",
    stay: "Brand Promotion",
    image: "https://ui-avatars.com/api/?name=Arjun+Singh&background=0F4C81&color=fff",
    review:
      "Thank you for boosting my brand on Google. The team was supportive throughout the process and delivered excellent results. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* <span className="rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#0F4C81]">
            Guest Testimonials
          </span> */}

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Hear From Our Happy Guests
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every stay creates unforgettable memories. Discover why guests
            continue choosing our luxury beachfront resort for their perfect
            vacation.
          </p>
        </div>

        {/* Swiper Starts Here */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
          speed={1200}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonialSwiper !pb-16"
        >
          {testimonials.map((item) => (
           <SwiperSlide key={item.id} className="!h-auto flex">

              <div className="group flex h-full w-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Top */}
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
                    <FaQuoteLeft
                      size={22}
                      className="text-[#0F4C81]"
                    />
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                </div>

                {/* Review */}
           <p className="flex-1 text-[16px] leading-8 text-slate-600">
  "{item.review}"
</p>
                {/* Divider */}
                <div className="my-8 h-px bg-slate-200"></div>

                {/* User */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-[#0F4C81]/10"
                  />

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.location}
                    </p>

                    {/* <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {item.stay}
                    </span> */}

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
            </div>
    </section>
  );
};

export default Testimonials;