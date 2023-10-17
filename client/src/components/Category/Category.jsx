import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./Category.module.scss";

const Category = ({ image, category }) => {
  return (
    <Paper
      sx={{ backgroundImage: `url(${image.src})` }}
      className={`${styles.category} flex jcc aic`}
    >
      <Box className={`overlay`} />
      <Typography variant="h6" className={`tac ${styles.category_title}`}>
        {category}
      </Typography>
    </Paper>
  );
};

export default Category;
