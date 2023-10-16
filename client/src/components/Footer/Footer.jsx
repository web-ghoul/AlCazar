import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import {
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import styles from "./Footer.module.scss";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { EmailRounded } from "@mui/icons-material";
import { SecondaryTextField } from "@/MUIComponents/SecondaryTextField";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <PrimaryBox component={"footer"} className={`${styles.footer}`}>
      <PrimaryContainer
        className={`grid jcsb aifs g30 ${styles.footer_contain}`}
      >
        <Box className={`grid jcfs aic g20`}>
          <Logo text={true} />
          <Typography variant="h6">
            First accessories collection now displayed at our newest store at
            Downtown Katameya Mall. Visit our store for more offers.
          </Typography>
          <SecondaryButton sx={{ width: "fit-content" }}>
            Read More
          </SecondaryButton>
        </Box>
        <Box className={`grid jcc aic g30`}>
          <Typography className={`tac`} variant="h5">
            Quick Links
          </Typography>
          <List className={`grid jcc aic g10`}>
            <ListItem>
              <ListItemButton>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Shop</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>About</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Contact</ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box className={`grid jcc aic g30`}>
          <Typography className={`tac`} variant="h5">
            Follow Us
          </Typography>
          <List className={`grid jcc aic g10`}>
            <ListItem>
              <ListItemButton sx={{ textDecoration: "underline" }}>
                <a
                  href={"https://www.facebook.com/AlCazarFineWoods/"}
                  target={"_blank"}
                >
                  Facebook
                </a>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textDecoration: "underline" }}>
                <a
                  href={"https://www.instagram.com/alcazarfinewoods_furniture/"}
                  target={"_blank"}
                >
                  Instagram
                </a>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textDecoration: "underline" }}>
                <a
                  href={"https://www.pinterest.com/alcazarfurnitur/"}
                  target={"_blank"}
                >
                  Pinterest
                </a>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box className={`grid jcs aic g30`}>
          <Typography variant="h5">Join Our Newsletter</Typography>
          <Box className={`grid jcs aic g10`}>
            <SecondaryTextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
              sx={{ color: (theme) => theme.palette.white }}
              variant="standard"
              placeholder="Email"
            />
            <PrimaryButton sx={{ width: "fit-content" }}>
              Subscribe Now
            </PrimaryButton>
          </Box>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Footer;
