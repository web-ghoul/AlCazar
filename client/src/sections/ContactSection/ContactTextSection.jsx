"use client"
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./ContactTextSection.module.scss";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Title from "../../components/Title/Title";

const ContactTextSection = () => {
  const mdSize = useMediaQuery("(max-width:992px)")
  return (
    <PrimaryBox className={`${styles.contact}`}>
      <PrimaryContainer
        className={`grid jcs aic g30 ${styles.contact_text_contain}`}
      >
        <Box className={`grid jcs aic g20 ${styles.contact_text}`}>
          <Title color={mdSize && "#fff"} title={"Visit Our Stores"} align={"left"} h={"h4"} fw={700} />
          <Box className={`grid jcfs aic g30`}>
            <Box className={`grid jcfs aic g10`}>
              <Title
                title={"Heliopolis Branch"}
                align={"left"}
                h={"h5"}
                fw={700}
                color={mdSize && "#fff"}
              />
              <Box className={`flex jcfs aifs g10`}>
                <Title color={mdSize && "#fff"} title={"Address: "} align={"left"} h={"h6"} fw={500} />
                <Typography variant="h6">
                  17 Seezoustrees St., Korba, Heliopolis, Cairo, Egypt
                </Typography>
              </Box>
              <Box className={`flex jcfs aic g10`}>
                <Title color={mdSize && "#fff"} title={"Phone: "} align={"left"} h={"h6"} fw={500} />
                <Typography variant="h6">
                  (202) 2290 4320 - 01228982639
                </Typography>
              </Box>
            </Box>
            <Box className={`grid jcfs aic g10`}>
              <Title
                title={"New Cairo Branch"}
                align={"left"}
                h={"h5"}
                fw={700}
                color={mdSize && "#fff"}
              />
              <Box className={`flex jcfs aifs g10`}>
                <Title color={mdSize && "#fff"} title={"Address: "} align={"left"} h={"h6"} fw={500} />
                <Typography variant="h6">
                  Downtown Katameya Mall, next to Abaza store, Cairo, Egypt
                </Typography>
              </Box>
              <Box className={`flex jcfs aic g10`}>
                <Title color={mdSize && "#fff"} title={"Phone: "} align={"left"} h={"h6"} fw={500} />
                <Typography variant="h6">01017728260 - 01227423747 </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={`${styles.contact_image}`} />
        <Box className={`${styles.overlay} overlay`} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ContactTextSection;
