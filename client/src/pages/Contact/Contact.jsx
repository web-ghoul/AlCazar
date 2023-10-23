import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import ContactMap from "@/components/ContactMap/ContactMap";
import Title from "@/components/Title/Title";
import ContactMessageSection from "@/sections/ContactSection/ContactMessageSection/ContactMessageSection";
import ContactMessage from "@/sections/ContactSection/ContactMessageSection/ContactMessageSection";
import ContactTextSection from "@/sections/ContactSection/ContactTextSection/ContactTextSection";
import React from "react";

const Contact = () => {
  return (
    <PrimaryBox>
      <Title
        title={"Contact Us"}
        fw={700}
        align={"center"}
        h={"h3"}
        line={true}
      />
      <ContactTextSection/>
      <ContactMessageSection/>
      <ContactMap/>
    </PrimaryBox>
  );
};

export default Contact;
