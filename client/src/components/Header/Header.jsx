import {
  AppBar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { AccountBoxRounded, BorderColorRounded, ContactMailRounded, ExitToAppRounded, PersonRounded, ShoppingCartRounded, SubscriptionsRounded, WalletRounded } from "@mui/icons-material";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton";
import Link from "next/link";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import { ProfileContext } from "@/context/ProfileContext";
import { CartContext } from "@/context/CartContext";
import { resetProfile } from "@/store/profileSlice";

const Header = () => {
  const { handleToggleCart } = useContext(CartContext)
  const { setOption } = useContext(ProfileContext)
  const { token, userId } = useSelector((state) => state.auth)
  const { profile, isLoading } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const router = useRouter()
  const [activeList, setActiveList] = useState(false)
  if (typeof window !== "undefined") {
    window.addEventListener('click', (e) => {
      if (!e.target.classList.contains("activate")) {
        setActiveList(false)
      }
    })
  }

  const handleLogOut = () => {
    dispatch(logout())
    dispatch(resetProfile())
    router.push("/login")
  }

  const handleGoToProfile = (i) => {
    setOption(i)
    router.push(`/profile`)
  }
  return (
    <AppBar className={`flex jcc aic ${styles.header}`}>
      <PrimaryContainer className={`flex jcsb aic g30 ${styles.header_contain}`}>
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
          {
            !isLoading && profile && profile.isAdmin && (
              <ListItem>
                <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}`}>
                  <ListItemButton>Dashboard</ListItemButton>
                </Link>
              </ListItem>
            )
          }
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
          {
            (token && userId) ? (<>
              <PrimaryIconButton onClick={handleToggleCart}>
                <Badge>
                  <ShoppingCartRounded />
                </Badge>
              </PrimaryIconButton>
              <SecondaryIconButton className={`activate`} onClick={() => setActiveList(!activeList)}>
                <PersonRounded className={`activate`} />
              </SecondaryIconButton>
            </>) : (<>
              <Link href={`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`}>
                <PrimaryButton>Log in</PrimaryButton>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`}>
                <SecondaryButton>Register</SecondaryButton>
              </Link>
            </>)
          }
        </Box>
        <List className={`grid jcs aic ${styles.options_list} ${activeList && styles.active}`}>
          <ListItem>
            <SecondaryIconButton onClick={() => handleGoToProfile(0)} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <AccountBoxRounded />
              <Typography variant="h6">My Account</Typography>
            </SecondaryIconButton>
          </ListItem>
          <ListItem>
            <SecondaryIconButton onClick={() => handleGoToProfile(1)} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <BorderColorRounded />
              <Typography variant="h6">My Orders</Typography>
            </SecondaryIconButton>
          </ListItem>
          <ListItem>
            <SecondaryIconButton onClick={() => handleGoToProfile(2)} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <ContactMailRounded />
              <Typography variant="h6">My Addresses</Typography>
            </SecondaryIconButton>
          </ListItem>
          <ListItem>
            <SecondaryIconButton onClick={() => handleGoToProfile(3)} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <WalletRounded />
              <Typography variant="h6">My Wallet</Typography>
            </SecondaryIconButton>
          </ListItem>
          <ListItem>
            <SecondaryIconButton onClick={() => handleGoToProfile(4)} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <SubscriptionsRounded />
              <Typography variant="h6">My Subscription</Typography>
            </SecondaryIconButton>
          </ListItem>
          <ListItem>
            <PrimaryIconButton onClick={handleLogOut} sx={{ width: "100%" }} className={`flex jcc aic g5`}>
              <ExitToAppRounded />
              <Typography variant="h6">Log Out</Typography>
            </PrimaryIconButton>
          </ListItem>
        </List>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;
