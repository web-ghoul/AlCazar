"use client";
import { TextField, styled } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
    "& input , & select , & option": {
        fontSize: "20px"
    },
    "& svg": {
        fontSize: "25px"
    },
    [theme.breakpoints.down("lg")]: {
        "& input , & select , & option": {
            fontSize: "18px"
        },
        "& svg": {
            fontSize: "22px"
        },
    },
    [theme.breakpoints.down("md")]: {
        "& input , & select , & option": {
            fontSize: "17px"
        }
    },
    [theme.breakpoints.down("sm")]: {
        "& input , & select , & option": {
            fontSize: "14px"
        },
        "& svg": {
            fontSize: "20px"
        },
    },
    [theme.breakpoints.down("sx")]: {
        "& input , & select , & option": {
            fontSize: "12px"
        },
        "& svg": {
            fontSize: "18px"
        },
    },
}));
