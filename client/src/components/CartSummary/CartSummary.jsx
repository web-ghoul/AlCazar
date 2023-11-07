"use client"
import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import { CartContext } from '@/context/CartContext'

const CartSummary = () => {
    const { cartPrice } = useContext(CartContext)
    return (
        <Paper className={`grid jcs aic g10 pad20`}>
            <Title title={"Cart Summary"} fw={600} h={"h5"} />
            <Divider />
            <Box className={`flex jcsb aic g20`}>
                <Title title={"Subtotal"} h={"h6"} fw={700} />
                <Typography variant='h6' >EGP {cartPrice}</Typography>
            </Box>
        </Paper>
    )
}

export default CartSummary
