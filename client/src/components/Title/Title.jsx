import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Title.module.scss";

const Title = ({ icon, color, h, title, textTransform, align, fw, line }) => {
  return (
    <Box
      className={`flex aic g10 ${styles.title} ${line && styles.line} ${align === "center"
        ? "center_rel_x tac jcc"
        : align === "left"
          ? "tas jcfs"
          : "tae jcfe"
        }`}
      sx={{ width: align === "right" ? "100%" : "fit-content" }}
    >
      {icon}
      <Typography
        variant={h}
        sx={{
          fontWeight: fw,
          textTransform: textTransform,
          color: color && color,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
