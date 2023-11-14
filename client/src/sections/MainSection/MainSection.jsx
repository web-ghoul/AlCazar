"use client"
import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./MainSection.module.scss";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import { useRouter } from "next/navigation";

const MainSection = () => {
  const router = useRouter();
  const sm_size = useMediaQuery("(max-width:768px)")
  const goToShopPage = () =>
    router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`);
  return (
    <Carousel>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_1} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant={`${sm_size ? "h3" : "h2"}`}
              className={`flex ${styles.head} fw700 tac center_rel_x flex_wrap tac jcc aic g5`}
            >
              Leave The Season in
              <Box
                component={"span"}
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                AlCAZAR
              </Box>
              Style
            </Typography>
            <Typography className={`tac center_rel_x`} variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton className={`center_rel_x`} onClick={goToShopPage}>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_2} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant={`${sm_size ? "h3" : "h2"}`}
              className={`flex ${styles.head} fw700 tac center_rel_x flex_wrap tac jcc aic g5`}
            >
              Leave The Season in
              <Box
                component={"span"}
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                AlCAZAR
              </Box>
              Style
            </Typography>
            <Typography className={`tac center_rel_x`} variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton className={`center_rel_x`} onClick={goToShopPage}>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_3} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant={`${sm_size ? "h3" : "h2"}`}
              className={`flex ${styles.head} fw700 tac center_rel_x flex_wrap tac jcc aic g5`}
            >
              Leave The Season in
              <Box
                component={"span"}
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                AlCAZAR
              </Box>
              Style
            </Typography>
            <Typography className={`tac center_rel_x`} variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton className={`center_rel_x`} onClick={goToShopPage}>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
    </Carousel>
  );
};

export default MainSection;
