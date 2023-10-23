import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/categoriesSlice";
import { Box } from "@mui/material";
import Category from "@/components/Category/Category";

const CategoriesSection = ({ editable }) => {
  const { isLoading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      {!isLoading && categories && categories.length > 0 && (
        <Box className={`flex flex_wrap jcsb aic g20 `}>
          {categories.map((category, i) => {
            return (
              <Category key={i} editable={editable} data={category} />
            )
          })}
        </Box>
      )}
    </>
  );
};

export default CategoriesSection;
