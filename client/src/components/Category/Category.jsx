import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./Category.module.scss";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { DeleteIconButton } from "@/MUIComponents/DeleteIconButton";
import { DashboardContext } from "@/context/DashboardContext";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton";
import { useRouter } from "next/navigation";
import { FilterAndSearchAndSortForItemsContext } from "@/context/FilterAndSearchAndSortForItemsContext";

const Category = ({ data, editable }) => {
  const router = useRouter()
  const {
    handleOpenDeleteCategoryModal,
    handleOpenEditCategoryModal,
  } = useContext(DashboardContext);
  const { setCategory } = useContext(FilterAndSearchAndSortForItemsContext)
  const handleChooseCategory = () => {
    router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`)
    setCategory(data.title)
  }
  return editable ? (
    <Paper className={`${styles.editable_category} grid jcs aic`}>
      <Box
        className={`${styles.category_image}`}
        sx={{ backgroundImage: `url(${data.image})` }}
      />
      <Box className={`grid jcs aic g30 pad20`}>
        <Typography variant="h5" className={`tac ${styles.category_title}`}>
          {data.title}
        </Typography>
        <Box className={"flex jcsb aic g30"}>
          <SecondaryIconButton
            onClick={() => handleOpenEditCategoryModal(data)}
            className={"flex jcc aic g10"}
          >
            <EditRounded />
            <Typography variant="h6" >
              Edit
            </Typography>
          </SecondaryIconButton>
          <DeleteIconButton
            onClick={() => handleOpenDeleteCategoryModal(data._id)}
          >
            <DeleteRounded />
          </DeleteIconButton>
        </Box>
      </Box>
    </Paper>
  ) : (
    <Paper
      sx={{ backgroundImage: `url(${data.image})` }}
      className={`${styles.category} flex jcc aic`}
      onClick={handleChooseCategory}
    >
      <Box className={`overlay`} />
      <Typography variant="h6" className={`tac ${styles.category_title}`}>
        {data.title}
      </Typography>
    </Paper>
  );
};

export default Category;
