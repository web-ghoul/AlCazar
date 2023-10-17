import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./Item.module.scss";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import { ShoppingCartRounded } from "@mui/icons-material";

const Item = () => {
  return (
    <Paper className={`grid jcs aic g20 ${styles.item}`}>
      <Box className={`${styles.item_image}`}></Box>
      <Box className={`grid jcs aic g20 pad20`}>
        <Typography variant="h5" className="tas">
          Zigzag
        </Typography>
        <Box className={`flex flex_wrap jcsb aic`}>
          <Typography variant="h6" className={`${styles.item_price}`}>
            200 L.E.
          </Typography>
          <PrimaryIconButton>
            <ShoppingCartRounded />
          </PrimaryIconButton>
        </Box>
        <SecondaryButton>View More</SecondaryButton>
      </Box>
    </Paper>
  );
};
export default Item;
