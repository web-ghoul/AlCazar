import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import Title from "@/components/Title/Title";
import { ProfileContext } from "@/context/ProfileContext";

const EditAddressModal = () => {
    const {
        openEditAddressModal,
        handleCloseEditAddressModal,
    } = useContext(ProfileContext);
    return (
        <Modal
            open={openEditAddressModal}
            onClose={handleCloseEditAddressModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <Title title={"Edit Address"} fw={600} align={"center"} h={"h4"} />
                <Form type={"edit_address"} />
            </Box>
        </Modal>
    );
};

export default EditAddressModal;
