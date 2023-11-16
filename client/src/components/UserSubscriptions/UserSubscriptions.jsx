import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import Title from '../Title/Title'
import styles from "./UserSubscriptions.module.scss"
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import Subscription from './Subscription'
import LoadingSubscription from './LoadingSubscription'

const UserSubscriptions = ({ subscriptions }) => {
    const { id } = useParams()
    const { isLoading } = useSelector((state) => id ? state.user : state.profile)
    return (
        <Box className={`${styles.user_subscriptions} grid jcs aic g30 pad20`}>
            <Box className={`grid jcfs aic g5`}>
                <Title title={`${subscriptions && subscriptions.length > 0 ? `My Subscriptions (${subscriptions.length})` : "My Subscriptions"}`} align={"left"} h={"h4"} fw={500} />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.gray }} className={`fw500`}>View and manage the subscriptions you've purchased.</Typography>
            </Box>
            <Divider />
            <Box className={`grid jcs aic g20`}>
                {
                    isLoading ? (
                        new Array(Math.floor(Math.random() * 5)).fill(0).map((_, i) => (
                            <LoadingSubscription key={i} />
                        ))
                    ) : (
                        (subscriptions && subscriptions.length > 0) ? subscriptions.map((subscription, i) => (
                            <Subscription key={i} subscription={subscription} />
                        )) : (<Title title={"You haven't purchased any subscriptions yet."} fw={500} h={"h5"} align={"center"} />))
                }
            </Box>
        </Box>
    )
}

export default UserSubscriptions
