import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import React from "react";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import styles from "./ContactMessageSection.module.scss";
import { Box } from "@mui/material";

const ContactMessageSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g50 `}>
        <Title
          title={"Drop Us A Message"}
          textTransform={"uppercase"}
          fw={700}
          line
          h={"h4"}
          align={"center"}
        />
        <Box className={`grid jcs aic g40 ${styles.contact_form_box}`}>
          <Box className={`${styles.contact_form_image}`} />
          <Form type={"contact"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ContactMessageSection;
