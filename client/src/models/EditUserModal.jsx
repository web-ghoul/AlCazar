import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import Title from "@/components/Title/Title";

const EditUserModal = () => {
  const {
    openEditUserModal,
    handleCloseEditUserModal,
  } = useContext(DashboardContext);
  return (
    <Modal
      open={openEditUserModal}
      onClose={handleCloseEditUserModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
        <Title title={"Edit User"} fw={600} align={"center"} h={"h4"} />
        <Form type={"edit_user"} />
      </Box>
    </Modal>
  );
};

export default EditUserModal;
