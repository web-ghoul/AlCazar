import React from 'react'
import { Box, Paper } from '@mui/material'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import styles from "./Address.module.scss"
import { Skeleton } from '@mui/material'
import { DeleteRounded, EditRounded } from '@mui/icons-material'

const LoadingAddress = () => {
    return (
        <Paper className={`grid jcs aic g30 pad20 ${styles.address}`}>
            <Skeleton variant='text' />
            <Box className={`grid jcs aic g10`}>
                <Box className={`flex jcsb flex_wrap aic g30`}>
                    <Box className={`flex jcs aic g10`}>
                        <Skeleton variant='text' className={`${styles.title}`} />
                        <Skeleton variant='text' className={`${styles.value}`} />
                    </Box>
                    <Box className={`flex jcs aic g10`}>
                        <Skeleton variant='text' className={`${styles.title}`} />
                        <Skeleton variant='text' className={`${styles.value}`} />
                    </Box>
                    <Box className={`flex jcfs aic g10`}>
                        <Skeleton variant='text' className={`${styles.title}`} />
                        <Skeleton variant='text' className={`${styles.value}`} />
                    </Box>
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Skeleton variant='text' className={`${styles.title}`} />
                    <Skeleton variant='text' className={`${styles.value}`} />
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Skeleton variant='text' className={`${styles.title}`} />
                    <Skeleton variant='text' className={`${styles.value}`} />
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Skeleton variant='text' className={`${styles.title}`} />
                    <Skeleton variant='text' className={`${styles.value}`} />
                </Box>
            </Box>
            <Box className={`flex jcfe aic g20`}>
                <PrimaryIconButton className={`flex jcc aic g5`}>
                    <EditRounded />
                </PrimaryIconButton>
                <DeleteIconButton className={`flex jcc aic g5`}>
                    <DeleteRounded />
                </DeleteIconButton>
            </Box>
        </Paper>
    )
}

export default LoadingAddress
