import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import styles from "./UserInfo.module.scss"
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import { ProfileContext } from '@/context/ProfileContext'
import { useParams } from 'next/navigation'
import { DashboardContext } from '@/context/DashboardContext'

const UserInfo = ({ data }) => {
    const { id } = useParams()
    const { handleOpenDeleteAccountModal, handleOpenEditAccountModal } = useContext(ProfileContext)
    const { handleOpenDeleteUserModal, handleOpenEditUserModal } = useContext(DashboardContext)
    return (
        <Box className={`${styles.user_info} grid jcs aic g30 pad20`}>
            <Box className={`grid jcfs aic g5`}>
                <Title title={"My Account"} align={"left"} h={"h4"} fw={500} />
                <Typography variant='h6' sx={{ color: (theme) => theme.palette.gray }} className={`fw500`}>View and Edit your personal info below</Typography>
            </Box>
            <Divider />
            {
                data && (
                    <Box className={`grid jcs aic g30`}>
                        <Box className={`flex flex_wrap jcs aic g30`}>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Email :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{data.email}</Typography>
                            </Box>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Display Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{data.firstName + " " + data.lastName}</Typography>
                            </Box>
                        </Box>
                        <Box className={`flex flex_wrap jcs aic g30`}>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"First Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{data.firstName}</Typography>
                            </Box>
                            <Box className={`flex jcfs aic g5`}>
                                <Title title={"Last Name :"} align={"left"} h={"h5"} fw={500} />
                                <Typography variant='h6' className={`fw500`}>{data.lastName}</Typography>
                            </Box>
                        </Box>
                        <Box className={`flex jcfs aic g5`}>
                            <Title title={"Phone :"} align={"left"} h={"h5"} fw={500} />
                            <Typography variant='h6' className={`fw500`}>{data.phone}</Typography>
                        </Box>
                    </Box>
                )
            }
            <Box className={`flex jcfe aic g10`}>
                <PrimaryIconButton onClick={() => id ? handleOpenEditUserModal(data) : handleOpenEditAccountModal(data)} className={`flex jcc aic g10`}>
                    <EditRounded />
                    <Typography variant='h6'>Edit Info</Typography>
                </PrimaryIconButton>
                <DeleteIconButton onClick={() => id ? handleOpenDeleteUserModal(data._id) : handleOpenDeleteAccountModal()} className={`flex jcc aic g10`}>
                    <DeleteRounded />
                    <Typography variant='h6'>Delete Account</Typography>
                </DeleteIconButton>
            </Box>
        </Box>
    )
}

export default UserInfo
