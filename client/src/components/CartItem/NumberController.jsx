import React, { useContext, useState } from 'react'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import styles from "./CartItem.module.scss"
import { CartContext } from '@/context/CartContext'

const NumberController = ({ data }) => {
    const [value, setValue] = useState(1)
    const { removeItemFromCart } = useContext(CartContext)
    const increment = () => {
        if (value < data.count) {
            setValue(value + 1)
        } else {
            setValue(value)
        }
    }
    const decrement = () => {
        console.log(value)
        if (value > 1) {
            setValue(value - 1)
        } else {
            removeItemFromCart(data._id)
        }
    }
    return (
        <Box className={`flex jcc aic g10`}>
            <PrimaryIconButton onClick={increment}>
                <AddRounded />
            </PrimaryIconButton>
            <PrimaryTextField value={value} onChange={(e) => setValue(e.target.value)} type={"number"} defaultValue={1} />
            <PrimaryIconButton onClick={decrement}>
                <RemoveRounded />
            </PrimaryIconButton>
        </Box>
    )
}

export default NumberController
