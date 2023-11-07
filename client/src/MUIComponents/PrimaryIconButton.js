"use client";
import { IconButton, styled } from "@mui/material";

export const PrimaryIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "5px 10px",
  borderRadius: "2px",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    "& svg": {
      color: theme.palette.primary.main
    }
  },
}));
