import React from 'react'
import { Box, Paper, Skeleton } from '@mui/material'
import styles from "./ItemBox.module.scss"

const LoadingItemBox = ({ editable }) => {
    return (
        <Paper className={`grid jcs aic g20 ${styles.item}`}>
            <Skeleton variant='rectangular' className={`${styles.item_image_load}`} />
            <Box className={`grid jcs aic g20 pad20`}>
                <Skeleton variant='text' className={`${styles.item_name_load}`} />
                <Box className={`flex flex_wrap jcsb aic`}>
                    <Skeleton variant='text' className={`${styles.item_price_load}`} />
                    <Skeleton variant='rectangular' className={`${styles.item_delete_btn_load}`} />
                </Box>
                <Box className={`flex flex_wrap jcsb aic g10`}>
                    {
                        editable && (
                            <Skeleton variant='rectangular' className={`${styles.item_edit_btn_load}`} />
                        )
                    }
                    <Skeleton variant='rectangular' className={`${styles.item_view_btn_load}`} />
                </Box>
            </Box>
        </Paper>
    )
}

export default LoadingItemBox
