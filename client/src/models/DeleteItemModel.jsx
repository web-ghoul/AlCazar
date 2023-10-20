import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";

const DeleteItemModel = () => {
  const { openDeleteItemModal, handleCloseDeleteItemModal } = useContext(
    DashboardContext
  );
  return (
    <Modal
      open={openDeleteItemModal}
      onClose={handleCloseDeleteItemModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`flex jcs aic pad20 center_abs_x_y ${styles.modal}`}>
        <Form type={"delete_item"} />
      </Box>
    </Modal>
  );
};

export default DeleteItemModel;
