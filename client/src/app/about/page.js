import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Title from "@/components/Title/Title";
import AboutPageSection from "@/sections/AboutSection/AboutPageSection";

export const metadata = {
  title: "AlCazar - About",
  description: "Web Application for sell Class A furniture",
};

export default function AboutPage() {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Title title={"About Us"} align={"center"} line={true} fw={700} h={"h3"} />
        <AboutPageSection />
      </PrimaryContainer>
    </PrimaryBox>
  )
}
