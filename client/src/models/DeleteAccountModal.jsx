import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { ProfileContext } from "@/context/ProfileContext";

const DeleteAccountModal = () => {
  const {
    openDeleteAccountModal,
    handleCloseDeleteAccountModal,
  } = useContext(ProfileContext);
  return (
    <Modal
      open={openDeleteAccountModal}
      onClose={handleCloseDeleteAccountModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`flex jcc aic ${styles.modal} center_abs_x_y pad20`}>
        <Form type={"delete_account"} />
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;
