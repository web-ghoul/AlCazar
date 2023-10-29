import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { DashboardContext } from "@/context/DashboardContext";

const AddNewAdminModal = () => {
    const {
        handleCloseAddNewAdminModal,
        openAddNewAdminModal
    } = useContext(DashboardContext);
    return (
        <Modal
            open={openAddNewAdminModal}
            onClose={handleCloseAddNewAdminModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`flex jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <Form type={"add_new_admin"} />
            </Box>
        </Modal>
    );
};

export default AddNewAdminModal;
