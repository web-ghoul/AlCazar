import { DashboardContext } from "@/context/DashboardContext";
import React, { useContext } from "react";
import Title from "../Title/Title";
import { DeleteButton } from "@/MUIComponents/DeleteButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import LoadButton from "../LoadButton/LoadButton";
import { Box } from "@mui/material";

const DeleteCategory = ({ loading }) => {
  const { handleCloseDeleteCategoryModal } = useContext(DashboardContext);
  return (
    <>
      <Title
        title={"Are you Sure to Delete a Category ?"}
        h={"h5"}
        align={"center"}
        fw={"600"}
      />
      <Box className={`flex jcfe aic g10`}>
        <LoadButton loading={loading}>
          <DeleteButton type="submit">
            Delete
          </DeleteButton>
        </LoadButton>
        <PrimaryButton onClick={handleCloseDeleteCategoryModal}>
          Cancel
        </PrimaryButton>
      </Box>
    </>
  );
};

export default DeleteCategory;
