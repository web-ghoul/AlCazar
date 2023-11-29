import React from "react";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "../Logo/Logo";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import styles from "./Footer.module.scss";
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { useRouter } from "next/navigation";
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
          <SecondaryButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`)} sx={{ width: "fit-content" }}>
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
              <ListItemButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_HOME_PAGE}`)}>Home</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`)}>Shop</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`)}>About</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_CONTACT_PAGE}`)}>Contact</ListItemButton>
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
                  href={`${process.env.NEXT_PUBLIC_OFFICIAL_FACEBOOK}`}
                  target={"_blank"}
                >
                  Facebook
                </a>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textDecoration: "underline" }}>
                <a
                  href={`${process.env.NEXT_PUBLIC_OFFICIAL_INSTAGRAM}`}
                  target={"_blank"}
                >
                  Instagram
                </a>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ textDecoration: "underline" }}>
                <a
                  href={`${process.env.NEXT_PUBLIC_OFFICIAL_PINTEREST}`}
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
