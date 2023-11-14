"use client";
import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "5px 10px",
  borderRadius: "4px",
  fontSize: "18px",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "4px 9px",
    borderRadius: "3px",
    fontSize: "17px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 7px",
    borderRadius: "2px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "2px 6px",
  },
}));
