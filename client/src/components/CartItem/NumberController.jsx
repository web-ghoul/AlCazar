"use client"
import React, { useContext, useEffect, useState } from 'react'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import { CartContext } from '@/context/CartContext'

const NumberController = ({ data, index }) => {
    const [value, setValue] = useState(1)
    const { incrementItemNumber, cartData, decrementItemNumber } = useContext(CartContext)
    const increment = () => {
        incrementItemNumber(index)
        if (cartData.length > index) {
            setValue(cartData[index].number)
        }
    }
    const decrement = () => {
        decrementItemNumber(index)
        if (cartData.length > index) {
            setValue(cartData[index].number)
        }
    }
    useEffect(() => {
        setValue(data.number)
    }, [data])
    return (
        <Box className={`flex jcc aic g10`}>
            <PrimaryIconButton onClick={increment}>
                <AddRounded />
            </PrimaryIconButton>
            <PrimaryTextField disabled value={value} onChange={(e) => setValue(e.target.value)} type={"number"} />
            <PrimaryIconButton onClick={decrement}>
                <RemoveRounded />
            </PrimaryIconButton>
        </Box>
    )
}

export default NumberController
