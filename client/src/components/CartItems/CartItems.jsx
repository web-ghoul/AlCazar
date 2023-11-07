"use client"
import React, { useContext } from 'react'
import { Box, Divider, Paper } from '@mui/material'
import CartItem from '../CartItem/CartItem'
import Title from '../Title/Title'
import { CartContext } from '@/context/CartContext'

const CartItems = () => {
    const { cartData } = useContext(CartContext)
    return (
        <Paper className={`grid jcs aic g10 pad20`}>
            <Title title={`Cart (${cartData.length})`} fw={600} h={"h5"} />
            <Divider />
            {
                cartData.map((item, i) => (
                    <CartItem data={item} />
                ))
            }
        </Paper>
    )
}

export default CartItems
