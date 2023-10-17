import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Title.module.scss";

const Title = ({ icon, color, h, title, align, fw, line }) => {
  return (
    <Box
      className={`flex aic g10 ${styles.title} ${line && styles.line} ${
        align === "center"
          ? "center_rel_x tac jcc"
          : align === "left"
          ? "tas jcfs"
          : "tae jcfe"
      }`}
    >
      {icon}
      <Typography variant={h} sx={{ fontWeight: fw, color: color && color }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
