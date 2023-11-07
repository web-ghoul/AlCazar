import React from 'react'
import { Box, Paper, Skeleton } from '@mui/material'
import styles from "./UserBox.module.scss"

const LoadingUserBox = ({ editable }) => {
    return (
        <Paper className={`grid jcs aic g30 pad20 ${styles.user_box}`}>
            <Skeleton variant='rounded' className={`${styles.avatar} center_rel_x`} />
            <Box className={`grid jcs aic g20`}>
                <Skeleton variant='text' />
                {editable && (<Box className={`flex jcsb aic g20`}>
                    <Box className={`flex jcfs aic g20`}>
                        <Skeleton variant='rectangular' />
                        <Skeleton variant='rectangular' />
                    </Box>
                    <Skeleton variant='rectangular' />
                </Box>)}
            </Box>
        </Paper>
    )
}

export default LoadingUserBox
