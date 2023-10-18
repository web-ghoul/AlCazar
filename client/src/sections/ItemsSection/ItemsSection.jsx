"use client";
import React, { useEffect } from "react";
import styles from "./ItemsSection.module.scss";
import Item from "@/components/Item/Item";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "@/store/itemsSlice";

const ItemsSection = () => {
  const { isLoading, items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <Box className={`grid jcs aic g20 ${styles.items_contain}`}>
      {!isLoading &&
        items &&
        items.map((data, i) => <Item key={i} data={data} />)}
    </Box>
  );
};

export default ItemsSection;
