import React from "react";
import Title from "@/components/Title/Title";
import { Box } from "@mui/material";
import styles from "./BestCategoriesSection.module.scss";
import Category from "@/components/Category/Category";
import catImg from "../../images/bedrooms_cat.webp";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";

const BestCategoriesSection = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g30`}>
        <Title
          title={"Best Categories For You"}
          h={"h4"}
          line={true}
          align={"left"}
          fw={700}
        />
        <Box className={`flex flex_wrap jcsb aic g20 `}>
          <Category image={catImg} category={"Dinning Rooms"} />
          <Category image={catImg} category={"Dinning Rooms"} />
          <Category image={catImg} category={"Dinning Rooms"} />
          <Category image={catImg} category={"Dinning Rooms"} />
          <Category image={catImg} category={"Dinning Rooms"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default BestCategoriesSection;
