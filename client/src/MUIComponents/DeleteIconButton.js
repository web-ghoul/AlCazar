"use client";
import { styled } from "@mui/material";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const DeleteIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.youtube,
  borderColor: theme.palette.youtube,
  "&:hover svg": {
    color: theme.palette.youtube,
  },
}));
