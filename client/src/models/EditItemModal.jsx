import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import Title from "@/components/Title/Title";

const EditItemModal = () => {
  const {
    openEditItemModal,
    handleCloseEditItemModal,
  } = useContext(DashboardContext);
  return (
    <Modal
      open={openEditItemModal}
      onClose={handleCloseEditItemModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
        <Title title={"Edit Item"} fw={600} h={"h4"} align={"center"} />
        <Form type={"edit_item"} />
      </Box>
    </Modal>
  );
};

export default EditItemModal;
