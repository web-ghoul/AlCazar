import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import styles from "./UserAddresses.module.scss"
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import { ProfileContext } from '@/context/ProfileContext'
import { useSelector } from 'react-redux'
import Address from './Address'
import LoadingAddress from './LoadingAddress'
import { useParams } from 'next/navigation'

const UserAddresses = ({ addresses, editable }) => {
    const { id } = useParams()
    const { handleOpenAddNewAddressModal } = useContext(ProfileContext)
    const { isLoading } = useSelector((state) => id ? state.user : state.profile)
    return (
        <Box className={`${styles.user_address} grid jcs aic g30 pad20`}>
            <Box className={`grid jcfs aic g5`}>
                <Title title={"My Addresses"} align={"left"} h={"h4"} fw={500} />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.gray }} className={`fw500`}>Add and manage the addresses you use often.</Typography>
            </Box>
            <Divider />
            <Box className={`grid jcs aic g20 `}>
                {
                    isLoading ? (
                        new Array(Math.floor(Math.random() * 5)).fill(0).map((_, i) => (
                            <LoadingAddress key={i} />
                        ))
                    ) : (addresses && addresses.length > 0) ? (addresses.map((address, i) => (
                        <Address editable={editable} key={i} number={i + 1} address={address} />
                    ))) : (
                        <Title title={"You haven't saved any addresses yet."} fw={500} h={"h5"} color={"#333"} />
                    )
                }
                <PrimaryButton onClick={handleOpenAddNewAddressModal} className={`center_rel_x`} sx={{ width: "fit-content" }}>Add New Address</PrimaryButton>
            </Box>
        </Box>
    )
}

export default UserAddresses
