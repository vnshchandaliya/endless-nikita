import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const blogs = [
  {
  slug: "/blog/how-long-does-seo-take-to-show-results-in-2026",
  title: "How Long Does SEO Take to Show Results in 2026?",
  desc:
    "How long does SEO take to show results in 2026? Learn the realistic SEO timeline, key ranking factors, and how businesses can improve Google visibility.",
  date: "September 12, 2026",
  image: "/BlogsIMG/blog6.png",
},
  {
  slug: "/blog/zero-click-searches",
  title: "Zero-Click Searches: What They Mean for Your Business",
  desc: "Are zero-click searches hurting your website traffic? Discover what Google's answer engine means for your business and how to adapt your SEO strategy to win.",
  date: "August 2026",
  image: "/BlogsIMG/blog5.png",
},
  {
    slug: "/blog/is-seo-dead-in-2026",
    title: "Is SEO Dead in 2026? What Google AI Search Means for Your Business",
    desc: "Is SEO dead in 2026? Discover how AI Search, Google AI Overviews, and changing search behavior are reshaping SEO and what businesses should do next.",
    date: "August 2026",
    image: "/BlogsIMG/blog3.webp",
  },
  {
    slug: "/blog/7-seo-strategies-businesses-should-prioritize-in-2026",
    title: "7 SEO Strategies Businesses Should Prioritize in 2026",
    desc: "Discover the 7 SEO strategies businesses should prioritize in 2026 to improve Google visibility, attract qualified traffic, adapt to AI Search, and generate more leads.",
    date: "August 2026",
    image: "/BlogsIMG/blog4.webp",
  },
  {
    slug: "/blog/can-i-buy-a-domain-name-without-hosting",
    title: "Can I Just Buy a Domain Name Without Any Hosting Package?",
    desc: "Learn whether you can buy a domain name without hosting, why it's a smart decision, and what happens after purchasing only a domain.",
    date: "July 30, 2026",
    image: "/BlogsIMG/blog1.png",
  },
  {
    slug: "/blog/seo-vs-google-ads-which-is-better-for-your-business",
    title: "SEO vs Google Ads: Which is Better for Your Business?",
    desc: "Compare SEO vs Google Ads to discover which strategy is best for your business. Learn the key differences, benefits, and when to use each for growth.",
    date: "August 04, 2026",
    image: "/BlogsIMG/blog2.webp",
  },
];
const Blogs = () => {
  const BLOGS_PER_PAGE = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  return (
    <>
      <Helmet>
        <title>Blog | Digital Marketing Tips & Business Growth Insights</title>

        <meta
          name="description"
          content="Read expert articles on SEO, branding, design, advertising, social media strategies and digital marketing trends."
        />
      </Helmet>

      <section className="bg-[#fff] min-h-screen pt-38 pb-20 overflow-hidden">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="relative z-10 text-center">
            <h1 className="fontplayfair text-[#000] font-bold leading-[0.95] mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
              Our Blogs
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-[#234C6A] ont-[500] Poppins-font text-base md:text-2xl leading-relaxed">
              Explore expert tips to help businesses grow faster online.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
            {currentBlogs.map((blog) => (
              <Link
                key={blog.slug}
                to={blog.slug}
                className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#ece1d8]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <LazyLoadImage
                    src={blog.image}
                    alt={blog.title}
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full  object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                   <div className="p-6 flex flex-col flex-1">
                  {/* <div className=" px-[3px] text-blue-500 hover:text-black   ">
                    {blog.date}
                  </div> */}

                  <h2 className="text-[#0F2D45] text-[24px] leading-tight font-bold mb-4 group-hover:text-[#1B3C53] transition duration-300">
                    {blog.title}
                  </h2>

                  <p className="text-[#4b5563] text-[15px] leading-relaxed">
                    {blog.desc}
                  </p>

                  {/* <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[#0F2D45] font-semibold group-hover:text-red-500 transition">
                      Read Article
                    </span>

                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0F2D45] text-white flex items-center justify-center group-hover:bg-red-500 transition duration-300">
                      →
                    </div>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-11 h-11 rounded-full cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-[#1B3C53] text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2 rounded-lg bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              Next
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blogs;
