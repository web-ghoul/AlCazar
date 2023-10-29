import { DashboardContext } from "@/context/DashboardContext";
import React, { useContext } from "react";
import Title from "../Title/Title";
import { DeleteButton } from "@/MUIComponents/DeleteButton";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { Box } from "@mui/material";
import LoadButton from "../LoadButton/LoadButton";

const DeleteItemForm = ({ loading }) => {
  const { handleCloseDeleteItemModal } = useContext(DashboardContext);
  return (
    <>
      <Title
        title={"Are you Sure to Delete a Item ?"}
        h={"h5"}
        align={"center"}
        fw={"600"}
      />
      <Box className={`flex jcfe aic g10`}>
        <LoadButton deleted={true} loading={loading}>
          <DeleteButton type="submit">Delete</DeleteButton>
        </LoadButton>
        <PrimaryButton onClick={handleCloseDeleteItemModal}>
          Cancel
        </PrimaryButton>
      </Box>
    </>
  );
};

export default DeleteItemForm;
