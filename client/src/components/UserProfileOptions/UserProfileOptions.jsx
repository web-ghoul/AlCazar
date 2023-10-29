"use client";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
    AccountBoxRounded,
    BorderColorRounded,
    ContactMailRounded,
    SubscriptionsRounded,
    WalletRounded,
} from "@mui/icons-material";
import styles from "./UserProfileOptions.module.scss";
import "./global.scss";
import UserBox from "../UserBox/UserBox";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/store/userSlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { ProfileContext } from "@/context/ProfileContext";
import UserInfo from "../UserInfo/UserInfo";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box className={`flex jcs aic`}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const UserProfileOptions = () => {
    const { option, setOption } = useContext(ProfileContext)
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const handleChange = (_, newValue) => {
        setOption(newValue);
    };
    useEffect(() => {
        try {
            const token = Cookies.get("AlCazar_token")
            const userId = Cookies.get("AlCazar_userId")
            dispatch(getUser({ token, userId }))
        } catch (error) {
            toast.error(error.message)
        }
    }, [dispatch])

    return (
        <Box className={`grid jcs aifs g50 ${styles.user_profile_options}`}>
            <Box className={`grid jcfs aifs g50`}>
                <UserBox editable={false} data={user} />
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={option}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={`${styles.tabs} pad20`}
                >
                    <Tab
                        icon={<AccountBoxRounded />}
                        label={
                            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
                                My Account
                            </Typography>
                        }
                        {...a11yProps(0)}
                    />
                    <Tab
                        icon={<BorderColorRounded />}
                        label={
                            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
                                My Orders
                            </Typography>
                        }
                        {...a11yProps(1)}
                    />
                    <Tab
                        icon={<ContactMailRounded />}
                        label={
                            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
                                My Addresses
                            </Typography>
                        }
                        {...a11yProps(2)}
                    />
                    <Tab
                        icon={<WalletRounded />}
                        label={
                            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
                                My Wallet
                            </Typography>
                        }
                        {...a11yProps(3)}
                    />
                    <Tab
                        icon={<SubscriptionsRounded />}
                        label={
                            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
                                My Subscriptions
                            </Typography>
                        }
                        {...a11yProps(4)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={option} index={0}>
                <UserInfo />
            </TabPanel>
            <TabPanel value={option} index={1}>
                Addresses
            </TabPanel>
            <TabPanel value={option} index={2}>
                Wallets
            </TabPanel>
            <TabPanel value={option} index={3}>
                Subscriptions
            </TabPanel>
            <TabPanel value={option} index={4}>
                Accounts
            </TabPanel>
        </Box>
    );
};

export default UserProfileOptions;
