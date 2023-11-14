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
  "& svg": {
    fontSize: "25px !important"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "4px 9px",
    fontSize: "17px",
    "& svg": {
      fontSize: "22px !important"
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px 8px",
    fontSize: "16px",
    "& svg": {
      fontSize: "20px !important"
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 7px",
    "& svg": {
      fontSize: "18px !important"
    },
  },
  [theme.breakpoints.down("sx")]: {
    padding: "2px 6px",
    fontSize: "15px",
    "& svg": {
      fontSize: "16px !important"
    },
  },
}));
