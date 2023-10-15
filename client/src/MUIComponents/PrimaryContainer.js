"use client";
import { Container, styled } from "@mui/material";

export const PrimaryContainer = styled(Container)(({theme}) => ({
  paddingLeft: "100px",
  paddingRight: "100px",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "60px",
    paddingRight: "60px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
}));
