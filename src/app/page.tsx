import Blogs from "@/components/modules/homePage/Blogs";
import Hero from "@/components/modules/homePage/Hero";
import Learning from "@/components/modules/homePage/Learning";
import WhyChoose from "@/components/modules/homePage/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <Learning />
      <Blogs />
      <WhyChoose />
    </div>
  );
}
