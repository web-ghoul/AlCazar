"use client";
import { styled } from "@mui/material";
import { PrimaryTextField } from "./PrimaryTextField";

export const SecondaryTextField = styled(PrimaryTextField)(({ theme }) => ({
  color: theme.palette.white,
  "& svg": {
    color: theme.palette.white,
  },
  "& div:after": {
    borderBottomColor: `${theme.palette.white}    !important`,
  },
  "& input , & input::placeholder":{
    color: theme.palette.white,
  }
}));
