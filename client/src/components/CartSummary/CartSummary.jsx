"use client"
import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import { CartContext } from '@/context/CartContext'
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { ProfileContext } from '@/context/ProfileContext'

const CartSummary = () => {
    const { cartPrice, handleOpenChooseAddressModal, chooseAddress, handleOpenConfirmOrderModal } = useContext(CartContext)
    const { profileAddresses } = useSelector((state) => state.profile)
    const { setOption } = useContext(ProfileContext)
    const router = useRouter()
    const handleCheckOut = () => {
        const len = profileAddresses.length
        if (len === 0) {
            router.push(`${process.env.NEXT_PUBLIC_PROFILE_PAGE}`)
            toast(
                "Please Add Address",
                {
                    duration: 6000,
                }
            );
            setOption(2)
        } else if (len === 1) {
            chooseAddress(profileAddresses[0])
            handleOpenConfirmOrderModal()
        } else {
            handleOpenChooseAddressModal()
        }
    }
    return (
        <Paper className={`grid jcs aic g30 pad20`}>
            <Title title={"Cart Summary"} fw={600} h={"h5"} />
            <Divider />
            <Box className={`grid jcs aic g10`}>
                <Box className={`flex jcsb aic g20`}>
                    <Title title={"Subtotal"} h={"h6"} fw={700} />
                    <Typography className={`fw700`} variant='h5' >EGP {cartPrice}</Typography>
                </Box>
                {
                    cartPrice > 0 && (<PrimaryButton onClick={handleCheckOut}>Checkout (EGP {cartPrice})</PrimaryButton>)
                }
            </Box>
        </Paper>
    )
}

export default CartSummary
