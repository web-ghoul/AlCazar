import AboutSection from "@/sections/AboutSection/AboutSection";
import BestCategoriesSection from "@/sections/CategoriesSection/BestCategoriesSection";
import ContactMessageSection from "@/sections/ContactSection/ContactMessageSection";
import MainSection from "@/sections/MainSection/MainSection";

export const metadata = {
  title: "AlCazar",
  description: "Web Application for sell Class A furniture",
};

export default function HomePage() {
  return (
    <>
      <MainSection />
      <BestCategoriesSection />
      <AboutSection />
      <ContactMessageSection />
    </>
  )
}
