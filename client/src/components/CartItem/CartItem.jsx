"use client"
import React, { useContext } from 'react'
import styles from "./CartItem.module.scss"
import { Box, Paper, Typography } from '@mui/material'
import NumberController from './NumberController'
import { DeleteButton } from '@/MUIComponents/DeleteButton'
import { CartContext } from '@/context/CartContext'
import { useSelector } from 'react-redux'

const CartItem = ({ data, index }) => {
    const { removeItemFromCart } = useContext(CartContext)
    return (
        <Paper className={`grid jcs aic g10 ${styles.cart_item}`}>
            <Box className={`${styles.cart_item_image}`} sx={{ backgroundImage: `url(${data.data.images[0]})` }} />
            <Box className={`grid jcs aic g10 pad10 `}>
                <Typography variant='h6'>{data.data.title}</Typography>
                <Typography variant='h6'>EGP {data.data.price}</Typography>
                <Typography variant='h6'>L{data.data.dimensions[data.dimension].length} x W{data.data.dimensions[data.dimension].width} x H{data.data.dimensions[data.dimension].height}</Typography>
                <NumberController index={index} data={data} />
                <DeleteButton onClick={() => { removeItemFromCart({ price: data.data.price, number: data.number, index }) }}>
                    Remove
                </DeleteButton>
            </Box>
        </Paper>
    )
}

export default CartItem
