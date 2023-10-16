import React from "react";
import styles from "./ItemsSection.module.scss";
import Item from "@/components/Item/Item";
import { Box } from "@mui/material";

const ItemsSection = () => {
  return (
    <Box className={`grid jcs aic g20 ${styles.items_contain}`}>
      {new Array(10).fill(0).map(() => (
        <Item />
      ))}
    </Box>
  );
};

export default ItemsSection;
