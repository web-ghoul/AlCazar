import { Box } from "@mui/material";
import React from "react";
import Title from "../../Title/Title";
import Form from "../../Form/Form";
import { AddToPhotosRounded } from "@mui/icons-material";
import "../global.scss"

const AddNewItem = () => {
  return (
    <Box className={`grid jcs aic g30 full_width`}>
      <Title
        title={"Add New Item"}
        icon={<AddToPhotosRounded />}
        fw={700}
        h={"h4"}
        align={"center"}
      />
      <Form type={"add_new_item"} />
    </Box>
  );
};

export default AddNewItem;
