import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Title from "@/components/Title/Title";
import AboutOverviewSection from "@/sections/AboutSection/AboutOverviewSection/AboutOverviewSection";
import AboutValuesAndDesignSection from "@/sections/AboutSection/AboutValuesAndDesignSection/AboutValuesAndDesignSection";
import AboutVisionAndMissionSection from "@/sections/AboutSection/AboutVisionAndMissionSection/AboutVisionAndMissionSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50`}>
        <Title title={"About Us"} align={"center"} line={true} fw={700} h={"h3"} />
        <Box className={`grid jcs aic g30`}>
          <AboutOverviewSection />
          <AboutVisionAndMissionSection />
          <AboutValuesAndDesignSection />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}
