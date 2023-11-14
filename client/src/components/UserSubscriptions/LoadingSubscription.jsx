import React from 'react'
import { Skeleton } from '@mui/material'
import styles from "./UserSubscriptions.module.scss"

const LoadingSubscription = () => {
    return (
        <Skeleton variant='rectangular' className={`${styles.loading_subscription}`} />
    )
}

export default LoadingSubscription
