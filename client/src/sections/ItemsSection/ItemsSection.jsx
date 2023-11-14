"use client";
import React, { useContext, useEffect } from "react";
import styles from "./ItemsSection.module.scss";
import ItemBox from "@/components/ItemBox/ItemBox";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "@/store/itemsSlice";
import { getCategories } from "@/store/categoriesSlice";
import { getDimensions } from "@/store/dimensionsSlice";
import Title from "@/components/Title/Title";
import LoadingItemsSection from "./LoadingItemsSection";
import { FilterAndSearchAndSortContext } from "@/context/FilterAndSearchAndSortContext";

const ItemsSection = ({ editable }) => {
  const { isLoading, items } = useSelector((state) => state.items);
  const { search, sort, dimension, category } = useContext(FilterAndSearchAndSortContext)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems({ search, dimension, category, sort }))
    dispatch(getCategories());
    dispatch(getDimensions());
  }, [dispatch]);
  return (
    <Box className={`grid jcs aic g20 ${styles.items_contain}`}>
      {isLoading ? <LoadingItemsSection editable={editable} /> : items && items.length > 0
        ? items.map((data, i) => (
          <ItemBox editable={editable} key={i} data={data} />
        ))
        : (<Title title={"Not Items Yet..."} h={"h4"}
          color={"#ddd"} fw={600} />)}
    </Box>
  );
};

export default ItemsSection;
