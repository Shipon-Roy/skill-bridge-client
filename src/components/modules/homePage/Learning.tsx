import Container from "@/components/layout/Container";
import { MdOutlineMenuBook, MdPsychology, MdWorkOutline } from "react-icons/md";

const features = [
  {
    icon: MdOutlineMenuBook,
    title: "Learning Paths",
    description: "Structured courses with milestones and progress tracking.",
  },
  {
    icon: MdPsychology,
    title: "Gain Skills",
    description: "1-on-1 expert sessions across 50+ categories.",
  },
  {
    icon: MdWorkOutline,
    title: "Career Preparation",
    description: "Job-ready portfolios and interview practice.",
  },
];

export default function Learning() {
  return (
    <div className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-gray-500 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            More Than Just A Learning Platform
          </h2>
          <p className="text-xl text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            Collaboration with top developers and industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group p-8 border border-green-700/70 rounded-2xl bg-gray-800/50 backdrop-blur hover:bg-gray-800/80 hover:border-[#7dd3fc]/50 transition-all duration-500 hover:-translate-y-3"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-20 h-20 bg-linear-to-br from-[#7dd3fc]/20 to-blue-500/20 border-2 border-[#7dd3fc]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all">
                <Icon className="w-12 h-12 text-[#7dd3fc] drop-shadow-lg" />
              </div>

              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#7dd3fc]">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
