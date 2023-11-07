import React, { useContext } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CloseRounded } from "@mui/icons-material";
import { ProfileContext } from "@/context/ProfileContext";

const ViewAvatarModal = () => {
    const { openViewAvatarModal, avatar, handleCloseViewAvatarModal } = useContext(ProfileContext)
    return (
        <Modal
            open={openViewAvatarModal}
            onClose={handleCloseViewAvatarModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} center_abs_x_y pad20`}>
                <IconButton sx={{ width: "fit-content" }} onClick={handleCloseViewAvatarModal}>
                    <CloseRounded sx={{ color: (theme) => theme.palette.primary.main }} />
                </IconButton>
                <LazyLoadImage src={avatar} />
            </Box>
        </Modal>
    );
};

export default ViewAvatarModal;
