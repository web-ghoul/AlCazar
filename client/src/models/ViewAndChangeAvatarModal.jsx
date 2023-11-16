import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { ProfileContext } from "@/context/ProfileContext";
import Form from "@/components/Form/Form";

const ViewAndChangeAvatarModal = () => {
    const { openViewAvatarModal, handleCloseViewAvatarModal } = useContext(ProfileContext)
    return (
        <Modal
            open={openViewAvatarModal}
            onClose={handleCloseViewAvatarModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <Form type={"change_avatar"} />
            </Box>
        </Modal>
    );
};

export default ViewAndChangeAvatarModal;
