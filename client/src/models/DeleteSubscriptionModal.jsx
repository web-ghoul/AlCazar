import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { SubscriptionContext } from "@/context/SubscriptionContext";

const DeleteSubscriptionModal = () => {
    const {
        openDeleteSubscriptionModal,
        handleCloseDeleteSubscriptionModal,
    } = useContext(SubscriptionContext);
    return (
        <Modal
            open={openDeleteSubscriptionModal}
            onClose={handleCloseDeleteSubscriptionModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`flex jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <Form type={"delete_subscription"} />
            </Box>
        </Modal>
    );
};

export default DeleteSubscriptionModal;
