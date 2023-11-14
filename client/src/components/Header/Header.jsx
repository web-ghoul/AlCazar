import {
  AppBar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton";
import { PrimaryIconButton } from "@/MUIComponents/PrimaryIconButton";
import { AccountBoxRounded, BorderColorRounded, ContactMailRounded, ContactsRounded, ExitToAppRounded, HomeRounded, InfoRounded, ListRounded, LoginRounded, PersonRounded, Shop2Rounded, ShoppingCartRounded, SubscriptionsRounded, SupervisedUserCircleRounded, WalletRounded } from "@mui/icons-material";
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
  const { handleToggleCart, resetCartFromLocalStorage,
    resetCart } = useContext(CartContext)
  const { setOption } = useContext(ProfileContext)
  const { token, userId } = useSelector((state) => state.auth)
  const { profile, isLoading } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const router = useRouter()
  const [activeList, setActiveList] = useState(false)
  const mdSize = useMediaQuery("(max-width:992px)")
  if (typeof window !== "undefined") {
    window.addEventListener('click', (e) => {
      if (!e.target.classList.contains("activate")) {
        setActiveList(false)
      }
    })
  }

  const handleLogOut = () => {
    dispatch(logout())
    resetCartFromLocalStorage()
    resetCart()
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
        {
          !mdSize && (<List className={`flex jcc aic`}>
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
          </List>)
        }
        <Box className={`flex jcsb aic g10`}>
          <PrimaryIconButton onClick={handleToggleCart}>
            <Badge>
              <ShoppingCartRounded />
            </Badge>
          </PrimaryIconButton>
          {
            (token && userId) ? (<>
              {
                !mdSize && (<SecondaryIconButton className={`activate`} onClick={() => setActiveList(!activeList)}>
                  <PersonRounded className={`activate`} />
                </SecondaryIconButton>)
              }
            </>) : (<>
              {mdSize ? (<SecondaryIconButton className={`activate`} onClick={() => setActiveList(!activeList)}>
                <ListRounded className={`activate`} />
              </SecondaryIconButton>) : (<Link href={`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`}>
                <SecondaryButton>Log in</SecondaryButton>
              </Link>)}
            </>)
          }
        </Box>
        <List className={`grid jcs aic ${styles.options_list} ${activeList && styles.active}`}>
          {
            mdSize ? (
              <>
                <ListItem>
                  <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_HOME_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                    <HomeRounded />
                    <Typography variant="h6">Home</Typography>
                  </SecondaryIconButton>
                </ListItem>
                <ListItem>
                  <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                    <Shop2Rounded />
                    <Typography variant="h6">Shop</Typography>
                  </SecondaryIconButton>
                </ListItem>
                {
                  !isLoading && profile && profile.isAdmin && (
                    <ListItem>
                      <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_DASHBOARD_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                        <Shop2Rounded />
                        <Typography variant="h6">Dashboard</Typography>
                      </SecondaryIconButton>
                    </ListItem>
                  )
                }
                <ListItem>
                  <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                    <InfoRounded />
                    <Typography variant="h6">About</Typography>
                  </SecondaryIconButton>
                </ListItem>
                <ListItem>
                  <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_CONTACT_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                    <ContactsRounded />
                    <Typography variant="h6">Contact</Typography>
                  </SecondaryIconButton>
                </ListItem>

                <Divider />
                {
                  (token && userId) ? (
                    <>
                      <ListItem>
                        <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_PROFILE_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                          <SupervisedUserCircleRounded />
                          <Typography variant="h6">Profile</Typography>
                        </SecondaryIconButton>
                      </ListItem>
                      <ListItem>
                        <PrimaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                          <LoginRounded />
                          <Typography variant="h6">Log Out</Typography>
                        </PrimaryIconButton>
                      </ListItem>
                    </>
                  ) : (
                    <ListItem>
                      <PrimaryIconButton onClick={handleLogOut} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                        <ExitToAppRounded />
                        <Typography variant="h6">Log In</Typography>
                      </PrimaryIconButton>
                    </ListItem>
                  )
                }

              </>
            ) : (<>
              <ListItem>
                <SecondaryIconButton onClick={() => handleGoToProfile(0)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <AccountBoxRounded />
                  <Typography variant="h6">My Account</Typography>
                </SecondaryIconButton>
              </ListItem>
              <ListItem>
                <SecondaryIconButton onClick={() => handleGoToProfile(1)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <BorderColorRounded />
                  <Typography variant="h6">My Orders</Typography>
                </SecondaryIconButton>
              </ListItem>
              <ListItem>
                <SecondaryIconButton onClick={() => handleGoToProfile(2)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <ContactMailRounded />
                  <Typography variant="h6">My Addresses</Typography>
                </SecondaryIconButton>
              </ListItem>
              <ListItem>
                <SecondaryIconButton onClick={() => handleGoToProfile(3)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <WalletRounded />
                  <Typography variant="h6">My Wallet</Typography>
                </SecondaryIconButton>
              </ListItem>
              <ListItem>
                <SecondaryIconButton onClick={() => handleGoToProfile(4)} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <SubscriptionsRounded />
                  <Typography variant="h6">My Subscription</Typography>
                </SecondaryIconButton>
              </ListItem>
              <Divider />
              <ListItem>
                <PrimaryIconButton onClick={handleLogOut} sx={{ width: "100%" }} className={`flex jcfs aic g20`}>
                  <ExitToAppRounded />
                  <Typography variant="h6">Log Out</Typography>
                </PrimaryIconButton>
              </ListItem>
            </>)
          }

        </List>
      </PrimaryContainer>
    </AppBar>
  );
};

export default Header;
