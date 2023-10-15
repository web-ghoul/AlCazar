import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography } from "@mui/material";
import styles from "./MainSection.module.scss";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";

const MainSection = () => {
  return (
    <Carousel>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_1} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant="h2"
              className={`flex fw700 flex_wrap jcfs aic g5`}
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
            <Typography variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_1} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant="h2"
              className={`flex fw700 flex_wrap jcfs aic g5`}
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
            <Typography variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
      <CarouselItem>
        <Box className={`${styles.main_box} ${styles.box_1} `}>
          <Box className={"overlay"} />
          <PrimaryContainer
            className={`${styles.main_contain} grid jcc aic acc g30`}
          >
            <Typography
              variant="h2"
              className={`flex fw700 flex_wrap jcfs aic g5`}
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
            <Typography variant="h6">
              We believe in wood as a living material to express our engagement
              with it, we design and produce a unique mixture of fine wood
              furniture to satisfy our valued customers’ refined taste.
            </Typography>
            <PrimaryButton>Shop Now</PrimaryButton>
          </PrimaryContainer>
        </Box>
      </CarouselItem>
    </Carousel>
  );
};

export default MainSection;
