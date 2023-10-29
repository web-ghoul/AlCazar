import React from 'react'
import styles from "./CartItem.module.scss"
import { Box, Paper, Typography } from '@mui/material'
import NumberController from './NumberController'

const CartItem = ({ data }) => {
    return (
        <Paper className={`grid jcs aic g10 ${styles.cart_item}`}>
            <Box className={`${styles.cart_item_image}`} sx={{ backgroundImage: `url(${data.images[0]})` }} />
            <Box className={`grid jcs aic g10 pad10 `}>
                <Typography variant='h6'>{data.title}</Typography>
                <Typography variant='h6'>EGP {data.price}</Typography>
                <NumberController data={data} />
            </Box>
        </Paper>
    )
}

export default CartItem
