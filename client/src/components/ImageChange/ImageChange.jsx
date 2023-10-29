import React, { useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./ImageChange.module.scss"
import { SecondaryButton } from '@/MUIComponents/SecondaryButton'
import { CloudUpload } from '@mui/icons-material'

const ImageChange = ({ image, setImage }) => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <Box className={`${styles.image_change} flex jcc aic`}>
            <LazyLoadImage src={image.name ? URL.createObjectURL(image) : image} alt={"change"} />
            <Box className={`${styles.overlay} flex jcc aic overlay`} >
                <SecondaryButton component="label" variant='contained' startIcon={<CloudUpload />} className={`flex jcc aic g5`}>
                    <VisuallyHiddenInput type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <Typography variant='h6'>Change Avatar</Typography>
                </SecondaryButton>
            </Box>
        </Box>
    )
}

export default ImageChange
