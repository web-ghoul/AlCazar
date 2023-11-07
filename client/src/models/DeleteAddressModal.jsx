import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { ProfileContext } from "@/context/ProfileContext";

const DeleteAddressModel = () => {
    const { handleCloseDeleteAddressModal, openDeleteAddressModal } = useContext(
        ProfileContext
    );
    return (
        <Modal
            open={openDeleteAddressModal}
            onClose={handleCloseDeleteAddressModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`flex jcs aic pad20 center_abs_x_y ${styles.modal}`}>
                <Form type={"delete_address"} />
            </Box>
        </Modal>
    );
};

export default DeleteAddressModel;
