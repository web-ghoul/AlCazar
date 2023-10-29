"use client"
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./AboutSection.module.scss";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Title from "@/components/Title/Title";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();
  return (
    <PrimaryBox className={`${styles.about}`}>
      <PrimaryContainer className={` grid jcs aic g30 ${styles.about_contain}`}>
        <Box className={`grid jcfs aic g30 ${styles.about_content}`}>
          <Title
            color={"#fff"}
            title={"About Us"}
            align={"left"}
            h={"h3"}
            line={true}
            fw={700}
          />
          <Typography variant="h6" className={`${styles.about_text}`}>
            AlCazar was created in 1998 as a family business based on the belief
            that wood is a 'living material'. We quickly became well known
            furniture brand in Egypt for providing quality home furnishings with
            a 'special taste'. AlCazar Home & Garden collections offer high
            value products for reasonable prices. They offer a life style that
            can be made unique through the personal connections the user makes
            with the products. The designed pieces are new, yet they are
            familiar rooted in an extensive cultural tradition, a tradition that
            is lived and not exhibited.
          </Typography>
          <PrimaryButton
            onClick={() => router.push(`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`)}
            sx={{
              borderColor: (theme) => theme.palette.white,
              width: "fit-content",
            }}
          >
            Read More
          </PrimaryButton>
        </Box>
        <Box className={`${styles.about_image}`} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default AboutSection;
