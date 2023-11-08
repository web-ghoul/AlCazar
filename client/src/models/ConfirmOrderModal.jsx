import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { CartContext } from "@/context/CartContext";
import { useSelector } from "react-redux";

const ConfirmOrderModal = () => {
    const {
        handleCloseConfirmOrderModal,
        openConfirmOrderModal
    } = useContext(CartContext);
    return (
        <Modal
            open={openConfirmOrderModal}
            onClose={handleCloseConfirmOrderModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic g30 ${styles.modal} center_abs_x_y pad20`}>
                <Form type={"confirm_order"} />
            </Box>
        </Modal>
    );
};

export default ConfirmOrderModal;
