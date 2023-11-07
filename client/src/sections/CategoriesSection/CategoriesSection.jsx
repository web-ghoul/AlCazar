"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";
import { Box } from "@mui/material";
import Category from "@/components/Category/Category";
import Title from "@/components/Title/Title";
import LoadingCategoriesSection from "./LoadingCategoriesSection";

const CategoriesSection = ({ editable }) => {
  const { isLoading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <Box className={`flex flex_wrap jcsb aic g20 `}>
      {isLoading ? <LoadingCategoriesSection editable={editable} /> : categories && categories.length > 0 ? (
        categories.map((category, i) => {
          return (
            <Category key={i} editable={editable} data={category} />
          )
        })
      ) : (<Title title={"Not Category Yet..."} fw={600} color={"#ddd"} h={"h4"} />)}
    </Box>
  );
};

export default CategoriesSection;
