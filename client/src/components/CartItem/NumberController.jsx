"use client"
import React, { useContext, useEffect, useState } from 'react'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField'
import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import { CartContext } from '@/context/CartContext'

const NumberController = ({ data }) => {
    const [value, setValue] = useState(1)
    const { incrementItemNumber, decrementItemNumber } = useContext(CartContext)
    const increment = () => {
        if (value < data.data.quantity) {
            setValue(value + 1)
        } else {
            setValue(value)
        }
        incrementItemNumber(data.data._id)
    }
    const decrement = () => {
        setValue(value - 1)
        decrementItemNumber(data.data._id)
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
