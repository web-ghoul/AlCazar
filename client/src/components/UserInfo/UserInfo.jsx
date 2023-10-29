import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import styles from "./UserInfo.module.scss"
import { useSelector } from 'react-redux'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import { ProfileContext } from '@/context/ProfileContext'

const UserInfo = () => {
    const { user } = useSelector((state) => state.user)
    const { handleOpenDeleteAccountModal, handleOpenEditAccountModal } = useContext(ProfileContext)
    return (
        <Box className={`${styles.user_info} grid jcs aic g30 pad20`}>
            <Box className={`grid jcfs aic g5`}>
                <Title title={"My Account"} align={"left"} h={"h4"} fw={500} />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.gray }} className={`fw500`}>View and Edit your personal info below</Typography>
            </Box>
            <Divider />
            {
                user && (
                    <Box className={`grid jcs aic g30`}>
                        <Box className={`flex flex_wrap jcs aic g30`}>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Email :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{user.email}</Typography>
                            </Box>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Display Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{user.firstName + " " + user.lastName}</Typography>
                            </Box>
                        </Box>
                        <Box className={`flex flex_wrap jcs aic g30`}>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"First Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{user.firstName}</Typography>
                            </Box>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Last Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{user.lastName}</Typography>
                            </Box>
                        </Box>
                        <Box className={`flex jcfs aic g5`}>
                            <Title title={"Phone :"} align={"left"} h={"h5"} fw={500} />
                            <Typography variant='h6' className={`fw500`}>{user.phone}</Typography>
                        </Box>
                    </Box>
                )
            }
            <Box className={`flex jcfe aic g10`}>
                <PrimaryIconButton onClick={handleOpenEditAccountModal} className={`flex jcc aic g10`}>
                    <EditRounded />
                    <Typography variant='h6'>Edit Info</Typography>
                </PrimaryIconButton>
                <DeleteIconButton onClick={handleOpenDeleteAccountModal} className={`flex jcc aic g10`}>
                    <DeleteRounded />
                    <Typography variant='h6'>Delete Account</Typography>
                </DeleteIconButton>
            </Box>
        </Box>
    )
}

export default UserInfo
