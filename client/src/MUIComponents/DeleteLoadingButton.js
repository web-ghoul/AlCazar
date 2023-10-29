"use client";
import { styled } from "@mui/material";
import { PrimaryLoadingButton } from "./PrimaryLoadingButton";

export const DeleteLoadingButton = styled(PrimaryLoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.youtube,
  borderColor: theme.palette.youtube,
  "&:hover": {
    backgroundColor: theme.palette.white,
    color: theme.palette.youtube,
  },
}));
