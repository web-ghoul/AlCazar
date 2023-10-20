import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import React from "react";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";

const ContactMessageSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <Title
          title={"Drop Us A Message"}
          textTransform={"uppercase"}
          fw={600}
          h={"h4"}
          align={"center"}
        />
        <Form type={"contact_message"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ContactMessageSection;