import { Box, InputAdornment, Modal, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styles from "./modal.module.scss"
import { ItemContext } from '@/context/ItemContext'
import Title from '@/components/Title/Title'
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { SlideshowRounded } from '@mui/icons-material'
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import { SecondaryButton } from '@/MUIComponents/SecondaryButton'
import toast from 'react-hot-toast'
import { CartContext } from '@/context/CartContext'

const ChooseDimensionModal = () => {
    const { chosenDimension, dimensions, handleCloseViewChooseDimensionModal, openViewChooseDimensionsModal, setChosenDimension } = useContext(ItemContext)
    const { handleToggleCart, addItemToCart, chosenData } = useContext(CartContext)
    const handleChooseDimension = () => {
        if (chosenDimension) {
            addItemToCart({ ...chosenData, dimension: +chosenDimension })
            handleCloseViewChooseDimensionModal()
            handleToggleCart()
        } else {
            toast.error("Please Choose Dimension")
        }
    }
    return (
        <Modal
            open={openViewChooseDimensionsModal}
            onClose={handleCloseViewChooseDimensionModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`grid jcc aic g30 ${styles.modal} center_abs_x_y pad20`}>
                <Title title={"Choose a Dimension"} fw={600} align={"center"} h={"h4"} />
                <PrimaryTextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SlideshowRounded
                                    sx={{ color: (theme) => theme.palette.primary.main }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    id="dimension"
                    name="dimension"
                    select
                    fullWidth
                    SelectProps={{
                        native: true,
                    }}
                    variant="standard"
                    value={chosenDimension}
                    onChange={(e) => setChosenDimension(e.target.value)}
                >
                    <option key={-1} value={""}>
                        Choose Dimension
                    </option>
                    {dimensions.map((dimension, i) => (
                        <option key={i} value={i}>
                            <Typography variant='h5'>L{dimension.length} x W{dimension.width} x H{dimension.height}</Typography>
                        </option>
                    ))}
                </PrimaryTextField>
                <Box className={`flex jcsb aic g10`}>
                    <PrimaryButton onClick={handleChooseDimension}>Choose</PrimaryButton>
                    <SecondaryButton onClick={handleCloseViewChooseDimensionModal} >Close</SecondaryButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default ChooseDimensionModal
