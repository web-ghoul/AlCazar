import { Box, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import styles from "./UserAddresses.module.scss"
import { ProfileContext } from '@/context/ProfileContext'

const Address = ({ address, number }) => {
    const { handleOpenDeleteAddressModal, handleOpenEditAddressModal } = useContext(ProfileContext)
    return (
        <Paper className={`grid jcs aic g30 pad20 ${styles.address}`}>
            <Title title={`Address #${number}`} h={"h5"} />
            <Box className={`grid jcs aic g10`}>
                <Box className={`flex jcsb flex_wrap aic g30`}>
                    <Box className={`flex jcfs aic g10`}>
                        <Title title={"First Name :"} h={"h6"} fw={500} />
                        <Typography variant='h6' >{address.firstName}</Typography>
                    </Box>
                    <Box className={`flex jcfs aic g10`}>
                        <Title title={"Last Name :"} h={"h6"} fw={500} />
                        <Typography variant='h6' >{address.lastName}</Typography>
                    </Box>
                    <Box className={`flex jcfs aic g10`}>
                        <Title title={"Phone Number :"} h={"h6"} fw={500} />
                        <Typography variant='h6' >{address.phone}</Typography>
                    </Box>
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Title title={"Address :"} h={"h6"} fw={500} />
                    <Typography variant='h6' >{address.address}</Typography>
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Title title={"Country :"} h={"h6"} fw={500} />
                    <Typography variant='h6' >{address.country}</Typography>
                </Box>
                <Box className={`flex jcfs aic g10`}>
                    <Title title={"City :"} h={"h6"} fw={500} />
                    <Typography variant='h6' >{address.city}</Typography>
                </Box>
            </Box>
            <Box className={`flex jcfe aic g20`}>
                <PrimaryIconButton onClick={() => handleOpenEditAddressModal(address)} className={`flex jcc aic g5`}>
                    <EditRounded />
                    <Typography variant='h6'>Edit</Typography>
                </PrimaryIconButton>
                <DeleteIconButton onClick={() => handleOpenDeleteAddressModal(address._id)} className={`flex jcc aic g5`}>
                    <DeleteRounded />
                    <Typography variant='h6'>Remove</Typography>
                </DeleteIconButton>
            </Box>
        </Paper>
    )
}

export default Address
