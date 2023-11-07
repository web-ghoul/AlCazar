import React, { useContext } from 'react'
import Form from '@/components/Form/Form'
import { Box, Modal } from '@mui/material'
import styles from "./modal.module.scss"
import { ProfileContext } from '@/context/ProfileContext'
import Title from '@/components/Title/Title'

const AddNewAddressModal = () => {
    const { openAddNewAddressModal, handleCloseAddNewAddressModal } = useContext(ProfileContext)
    return (
        <Modal
            open={openAddNewAddressModal}
            onClose={handleCloseAddNewAddressModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic ${styles.modal} g30 center_abs_x_y pad20`}>
                <Title title={"Add New Address"} h={"h4"} align={"center"} fw={600} />
                <Form type={"add_new_address"} />
            </Box>
        </Modal>
    )
}

export default AddNewAddressModal
