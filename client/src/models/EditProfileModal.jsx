import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { ProfileContext } from "@/context/ProfileContext";

const EditProfileModal = () => {
  const {
    openEditProfileModal,
    handleCloseEditProfileModal,
  } = useContext(ProfileContext);
  return (
    <Modal
      open={openEditProfileModal}
      onClose={handleCloseEditProfileModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`flex jcc aic ${styles.modal} center_abs_x_y pad20`}>
        <Form type={"edit_profile"} />
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
