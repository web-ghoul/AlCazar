import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title/Title'
import styles from "./UserOrders.module.scss"
import Order from './Order'
import { useParams, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import LoadingOrder from './LoadingOrder'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { CardTravelRounded } from '@mui/icons-material'

const UserOrders = ({ orders }) => {
    const router = useRouter()
    const { id } = useParams()
    const { isLoading } = useSelector((state) => id ? state.user : state.profile)
    return (
        <Box className={`${styles.user_orders} grid jcs aic g30 pad20`}>
            <Box className={`grid jcfs aic g5`}>
                <Title title={"My Orders"} align={"left"} h={"h4"} fw={500} />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.gray }} className={`fw500`}>View your order history or check the status of a recent order.</Typography>
            </Box>
            <Divider />
            <Box className={`grid jcs aic g30`}>
                {
                    isLoading ? (new Array(Math.floor(Math.random() * 10)).fill(0).map((_, i) => (
                        <LoadingOrder key={i} />
                    ))) : (orders && orders.length > 0) ? orders.map((order, i) => (
                        <Order order={order} number={i + 1} key={i} />
                    )) : (<>
                        <Title title={"You haven't placed any orders yet."} fw={500} h={"h5"} align={"center"} />
                        <PrimaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`)} className={`flex jcc aic g10`}>
                            <CardTravelRounded />
                            <Typography variant='h6' >Start Shopping</Typography>
                        </PrimaryIconButton>
                    </>)
                }
            </Box>
        </Box>
    )
}

export default UserOrders
