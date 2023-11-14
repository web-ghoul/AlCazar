"use client";
import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const PrimaryLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "18px !important",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("lg")]: {
    padding: "17px !important",
    borderRadius: "3px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "16px !important",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px !important",
  },
  [theme.breakpoints.down("sx")]: {
    padding: "14px !important",
    borderRadius: "2px",
  },
}));
