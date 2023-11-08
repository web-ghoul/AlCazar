import React, { useContext } from "react";
import { Box, Icon, Modal } from "@mui/material";
import styles from "./modal.module.scss";
import { CartContext } from "@/context/CartContext";
import { useSelector } from "react-redux";
import Address from "@/components/UserAddresses/Address";
import Title from "@/components/Title/Title";
import { CloseRounded } from "@mui/icons-material";

const ChooseAddressModal = () => {
    const {
        handleCloseChooseAddressModal,
        openChooseAddressModal
    } = useContext(CartContext);
    const { profileAddresses } = useSelector((state) => state.profile)
    return (
        <Modal
            open={openChooseAddressModal}
            onClose={handleCloseChooseAddressModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic g30 ${styles.modal} center_abs_x_y pad20`}>
                <Icon className={`flex jcc ${styles.close_icon} aic`} onClick={handleCloseChooseAddressModal}>
                    <CloseRounded />
                </Icon>
                <Title title={"Choose Address"} fw={700} h={"h4"} align={"center"} />
                <Box className={`grid jcs aic g20`}>
                    {
                        profileAddresses.map((address, i) => (
                            <Address select={true} number={i + 1} address={address} key={i} />
                        ))
                    }
                </Box>
            </Box>
        </Modal>
    );
};

export default ChooseAddressModal;
