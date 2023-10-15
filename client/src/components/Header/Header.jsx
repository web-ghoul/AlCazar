import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { PersonRounded, ShoppingCartRounded } from "@mui/icons-material";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton";
import Link from "next/link";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";

const Header = () => {
  return (
    <AppBar className={`flex jcc aic ${styles.header}`}>
      <PrimaryContainer className={`flex jcsb aic g30`}>
        <Logo text={true} />
        <List className={`flex jcc aic`}>
          <ListItem>
            <Link href={`${process.env.NEXT_PUBLIC_HOME_PAGE}`}>
              <ListItemButton>Home</ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={`${process.env.NEXT_PUBLIC_SHOP_PAGE}`}>
              <ListItemButton>Shop</ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}`}>
              <ListItemButton>Dashboard</ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`}>
              <ListItemButton>About</ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={`${process.env.NEXT_PUBLIC_CONTACT_PAGE}`}>
              <ListItemButton>Contact</ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Box className={`flex jcsb aic g10`}>
          <Link href={`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`}>
            <PrimaryButton>Log in</PrimaryButton>
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`}>
            <SecondaryButton>Register</SecondaryButton>
          </Link>
          {/* <PrimaryIconButton>
            <ShoppingCartRounded />
          </PrimaryIconButton>
          <SecondaryIconButton>
            <PersonRounded />
          </SecondaryIconButton> */}
        </Box>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;
