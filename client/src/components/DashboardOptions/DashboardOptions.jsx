"use client";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddNewItem from "./AddNewItem/AddNewItem";
import {
  AddToPhotosRounded,
  CategoryRounded,
  EditRounded,
  PostAddRounded,
} from "@mui/icons-material";
import styles from "./DashboardOptions.module.scss";
import "./global.scss";
import { FaUserEdit } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import ItemsSection from "@/sections/ItemsSection/ItemsSection";
import Title from "../Title/Title";
import CategoriesSection from "@/sections/CategoriesSection/CategoriesSection";
import UsersSection from "@/sections/UsersSection/UsersSection";
import AddNewAdmin from "./AddNewAdmin/AddNewAdmin";
import FilterAndSearchAndSort from "../FilterAndSearchAndSort/FilterAndSearchAndSort";
import { DashboardContext } from "@/context/DashboardContext";

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

const DashboardOptions = () => {
  const { setDashboardOption,
    dashboardOption } = useContext(DashboardContext)
  const handleChange = (_, newValue) => {
    setDashboardOption(newValue);
  };

  return (
    <Box className={`grid jcs aifs g50 ${styles.dashboard_options}`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={dashboardOption}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={`${styles.tabs} pad20`}
      >
        <Tab
          icon={<CategoryRounded />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Edit Items
            </Typography>
          }
          {...a11yProps(0)}
        />
        <Tab
          icon={<AddToPhotosRounded />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Add New Item
            </Typography>
          }
          {...a11yProps(1)}
        />
        <Tab
          icon={<EditRounded />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Edit Categories
            </Typography>
          }
          {...a11yProps(2)}
        />
        <Tab
          icon={<PostAddRounded />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Add New Category
            </Typography>
          }
          {...a11yProps(3)}
        />
        <Tab
          icon={<FaUserEdit />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Edit Users
            </Typography>
          }
          {...a11yProps(4)}
        />
        <Tab
          icon={<MdAdminPanelSettings />}
          label={
            <Typography variant="h6" sx={{ fontWeight: 600 }} className={`tas`}>
              Add New Admin
            </Typography>
          }
          {...a11yProps(5)}
        />
      </Tabs>
      <TabPanel value={dashboardOption} index={0}>
        <Box className={`grid jcs aic g30`} sx={{ width: "100%" }}>
          <Title
            title={"Items"}
            align={"center"}
            fw={600}
            h={"h4"}
          />
          <FilterAndSearchAndSort />
          <ItemsSection editable={true} />
        </Box>
      </TabPanel>
      <TabPanel value={dashboardOption} index={1}>
        <AddNewItem />
      </TabPanel>
      <TabPanel value={dashboardOption} index={2}>
        <Box className={`grid jcs aic g30`}>
          <Title
            title={"Categories"}
            h={"h4"}
            align={"center"}
            fw={600}
          />
          <CategoriesSection editable={true} />
        </Box>
      </TabPanel>
      <TabPanel value={dashboardOption} index={3}>
        <AddNewCategory />
      </TabPanel>
      <TabPanel value={dashboardOption} index={4}>
        <UsersSection />
      </TabPanel>
      <TabPanel value={dashboardOption} index={5}>
        <AddNewAdmin />
      </TabPanel>
    </Box>
  );
};

export default DashboardOptions;
