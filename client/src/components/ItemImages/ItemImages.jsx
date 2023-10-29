import React, { useState } from 'react'
import { Box } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from "./ItemImages.module.scss"

const ItemImages = ({ images }) => {
    const [curImage, setCurImage] = useState(0)
    return (
        <Box className={`grid jcs aic g30 ${styles.item_images}`}>
            <LazyLoadImage src={images[curImage]} alt={"item"} className={`${styles.main_image}`} />
            <Box className={`flex flex_wrap jcs ais g10 ${styles.mini_images}`}>
                {
                    images.map((image, i) => (
                        <Box onClick={() => setCurImage(i)} key={i} className={`flex  jcc aifs ${styles.mini_image} ${i === curImage && styles.active}`}>
                            <LazyLoadImage src={image} alt={"Item"} />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ItemImages
