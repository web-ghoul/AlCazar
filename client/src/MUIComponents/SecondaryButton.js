"use client";
import { styled } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";

export const SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
  },
}));
