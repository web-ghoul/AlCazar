import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Title.module.scss";

const Title = ({ color, h, title, align, fw, line }) => {
  return (
    <Box
      className={`flex aic ${styles.title} ${line && styles.line} ${
        align === "center"
          ? "center_rel_x tac jcc"
          : align === "left"
          ? "tas jcfs"
          : "tae jcfe"
      }`}
    >
      <Typography variant={h} sx={{ fontWeight: fw, color: color && color }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
