import { Card, CardContent } from "@/components/ui/card";
import { MdPeopleOutline, MdCheckCircle, MdSchedule } from "react-icons/md";

const features = [
  {
    id: "mentorship",
    icon: MdPeopleOutline,
    title: "1-on-1 Mentorship",
    description:
      "Get personalized attention from experts who tailor lessons to your specific goals and pace.",
  },
  {
    id: "tutors",
    icon: MdCheckCircle,
    title: "Tutors",
    description:
      "Every tutor passes a rigorous verification process to ensure high-quality teaching standards.",
  },
  {
    id: "scheduling",
    icon: MdSchedule,
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your busy life. Reschedule easily when things come up.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-linear-to-b from-gray-900 to-gray-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center mb-20 space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-gray-300 via-green-400 to-green-400 bg-clip-text text-transparent">
            Why Choose SkillBridge?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            we believe that learning to code should be accessible to everyone,
            regardless of their location, background, or financial situation.
          </p>
        </div>

        {/* Features Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ id, icon: Icon, title, description }) => (
            <Card
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              key={id}
              className="group border-2  shadow-lg shadow-gray-800/50 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900 backdrop-blur-sm hover:bg-gray-950 transition-all duration-500 hover:-translate-y-3 h-full border-green-900"
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-lg">
                  <Icon className="w-11 h-11 text-blue-600 drop-shadow-lg" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-gray-50 group-hover:text-green-400 transition-colors mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg flex-1">
                    {description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
