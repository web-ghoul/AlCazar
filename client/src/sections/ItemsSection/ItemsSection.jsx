"use client";
import React, { useEffect } from "react";
import styles from "./ItemsSection.module.scss";
import ItemBox from "@/components/ItemBox/ItemBox";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "@/store/itemsSlice";

const ItemsSection = ({ editable }) => {
  const { isLoading, items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <Box className={`grid jcs aic g20 ${styles.items_contain}`}>
      {!isLoading && items
        ? items.map((data, i) => (
            <ItemBox editable={editable} key={i} data={data} />
          ))
        : new Array(10)
            .fill(0)
            .map((_, i) => <ItemBox editable={editable} num={i} key={i} />)}
    </Box>
  );
};

export default ItemsSection;
