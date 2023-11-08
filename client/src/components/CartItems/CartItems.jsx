"use client"
import React, { useContext } from 'react'
import { Box, Divider, Paper, Typography } from '@mui/material'
import CartItem from '../CartItem/CartItem'
import Title from '../Title/Title'
import { CartContext } from '@/context/CartContext'
import styles from "./CartItems.module.scss"
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { CardTravelRounded } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

const CartItems = () => {
    const router = useRouter()
    const { cartData, cartCount } = useContext(CartContext)
    return (
        <Paper className={`grid jcs aic g30 pad20 ${styles.cart_items}`}>
            <Title title={`Cart (${cartCount})`} fw={600} h={"h5"} />
            <Divider />
            {
                cartData.length > 0 ? (
                    <Box className={`grid jcs aic g20 ${styles.items}`}>
                        {cartData.map((item, i) => (
                            <CartItem key={i} data={item} />
                        ))}
                    </Box>
                ) : (
                    <PrimaryIconButton className={`center_rel_x flex jcc aic g10`} onClick={() => router.push(`${process.env.NEXT_PUBLIC_SHOP_PAGE}`)}>
                        <CardTravelRounded />
                        <Typography variant='h6' >Start Shopping</Typography>
                    </PrimaryIconButton>
                )
            }
        </Paper>
    )
}

export default CartItems
