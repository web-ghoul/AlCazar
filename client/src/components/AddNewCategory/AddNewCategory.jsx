import { Box } from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import { PostAddRounded } from "@mui/icons-material";
import styles from "./AddNewCategory.module.scss"

const AddNewCategory = () => {
  return (
    <Box className={`grid jcs aic g30 ${styles.add_new_category}`}>
      <Title
        title={"Add New Category"}
        icon={<PostAddRounded />}
        fw={700}
        h={"h4"}
        align={"center"}
      />
      <Form type={"add_new_category"} />
    </Box>
  );
};

export default AddNewCategory;
