import React from 'react'
import { Skeleton } from '@mui/material'
import styles from "./UserOrders.module.scss"

const LoadingOrder = () => {
    return (
        <Skeleton variant='rectangular' className={`${styles.loading_order}`} />
    )
}

export default LoadingOrder
