import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import Title from "@/components/Title/Title";
import { ProfileContext } from "@/context/ProfileContext";

const EditAccountModal = () => {
    const {
        openEditAccountModal,
        handleCloseEditAccountModal,
    } = useContext(ProfileContext);
    return (
        <Modal
            open={openEditAccountModal}
            onClose={handleCloseEditAccountModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <Title title={"Edit Account"} fw={600} align={"center"} h={"h4"} />
                <Form type={"edit_account"} />
            </Box>
        </Modal>
    );
};

export default EditAccountModal;
