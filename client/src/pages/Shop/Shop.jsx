import React from "react";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import FilterItems from "@/components/FilterItems/FilterItems";
import ItemsSection from "@/sections/ItemsSection/ItemsSection";
import Title from "@/components/Title/Title";
import SearchAndSort from "@/components/SearchAndSort/SearchAndSort";

const Shop = ({ editable }) => {
  return (
    <>
      <Title
        title={"Our Collection"}
        align={"left"}
        line={true}
        fw={700}
        h={"h4"}
      />
      {/* <SearchAndSort/> */}
      {/* <FilterItems /> */}
      <ItemsSection editable={editable} />
    </>
  );
};

export default Shop;
