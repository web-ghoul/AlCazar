import React, { useContext } from 'react'
import { Paper } from '@mui/material'
import Title from '../Title/Title'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import { DeleteRounded } from '@mui/icons-material'
import styles from "./UserSubscriptions.module.scss"
import { SubscriptionContext } from '@/context/SubscriptionContext'

const Subscription = ({ subscription }) => {
    const {
        handleOpenDeleteSubscriptionModal, setSubscriptionEmailId
    } = useContext(SubscriptionContext);
    const handleDeleteSubscription = () => {
        handleOpenDeleteSubscriptionModal()
        setSubscriptionEmailId(subscription._id)
    }
    return (
        <Paper className={`pad10 flex jcsb aic g30 ${styles.subscription}`}>
            <Title title={subscription.email} h={"h5"} fw={600} />
            <DeleteIconButton onClick={handleDeleteSubscription}>
                <DeleteRounded />
            </DeleteIconButton>
        </Paper>
    )
}

export default Subscription
