import React from "react";
import Title from "@/components/Title/Title";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import CategoriesSection from "../CategoriesSection";

const BestCategoriesSection = ({ editable }) => {
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
        <CategoriesSection editable={editable} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default BestCategoriesSection;
