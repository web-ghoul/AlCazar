"use client";
import { styled } from "@mui/material";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const SecondaryIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    "& svg": {
      color: theme.palette.white
    }
  },
}));
