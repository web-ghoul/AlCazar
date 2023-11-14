import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import {
  Box,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
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
import Form from "../Form/Form";
import Title from "../Title/Title";

const Footer = () => {
  const router = useRouter();
  const md_size = useMediaQuery("(max-width:992px)")
  const sm_size = useMediaQuery("(max-width:768px)")
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
        {
          sm_size && <Divider className={`${styles.footer_divider}`} />
        }
        <Box className={`grid ${md_size ? "jcfs" : "jcc"} aic g10`}>
          <Title line={true} color={"#fff"} title={"Quick Links"} align={`${md_size ? "left" : "center"}`} h={"h5"} />
          <List className={`grid ${md_size ? "jcfs" : "jcc"} aic g10`}>
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
        {
          sm_size && <Divider className={`${styles.footer_divider}`} />
        }
        <Box className={`grid ${md_size ? "jcfs" : "jcc"} aic g10`}>
          <Title line={true} color={"#fff"} title={"Follow Us"} align={`${md_size ? "left" : "center"}`} h={"h5"} />
          <List className={`grid ${md_size ? "jcfs" : "jcc"} aic g10`}>
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
        {
          sm_size && <Divider className={`${styles.footer_divider}`} />
        }
        <Box className={`grid jcs aic g30`}>
          <Title line={true} color={"#fff"} title={"Join Our Newsletter"} align={`${md_size ? "left" : "center"}`} h={"h5"} />
          <Form type="subscription_email" />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Footer;
