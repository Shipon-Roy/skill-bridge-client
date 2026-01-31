"use client";
import Container from "@/components/layout/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowOutward } from "react-icons/md";

const blogPosts = [
  {
    id: "1",
    title: "Noteworthy Technology Acquisitions 2025",
    excerpt:
      "Discover the biggest enterprise technology deals of 2025, ranked by impact and innovation.",
    slug: "/blogs/tech-acquisitions-2025",
  },
  {
    id: "2",
    title: "AI Tools Revolutionizing Development in 2026",
    excerpt:
      "How new AI coding assistants are transforming developer workflows and productivity.",
    slug: "/blogs/ai-dev-tools-2026",
  },
];

export default function Blogs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="py-20 bg-gray-900">
      <Container>
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-gray-500 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Latest Blogs
          </h1>
          <p className="text-xl text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest insights on technology, development
            trends, and industry innovations.
          </p>
        </div>

        {/* Blog Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {blogPosts.map(({ id, title, excerpt }) => (
            <div
              key={id}
              className="group h-full max-w-xl mx-auto p-8 border border-green-500/30 rounded-xl shadow-lg bg-gray-900/50 backdrop-blur-sm hover:shadow-xl hover:border-green-400/50 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="h-full flex flex-col">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white group-hover:text-[#7dd3fc] transition-colors flex-1">
                  {title}
                </h3>
                <p className="mb-8 font-normal text-gray-400 leading-relaxed flex-1">
                  {excerpt}
                </p>
                <div className="inline-flex items-center text-lg font-semibold text-[#7dd3fc] hover:text-blue-400 transition-all group-hover:translate-x-2">
                  Read more
                  <MdArrowOutward className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
