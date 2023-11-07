import React, { useEffect } from 'react'
import Title from '@/components/Title/Title'
import UserBox from '@/components/UserBox/UserBox'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./UsersSection.module.scss"
import { getUsers } from '@/store/usersSlice'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'
import LoadingUserBox from '@/components/UserBox/LoadingUserBox'

const UsersSection = () => {
    const { isLoading, users } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            const token = Cookies.get("AlCazar_token")
            dispatch(getUsers({ token }))
        } catch (error) {
            toast.error(error.message)
        }
    }, [dispatch])
    return (
        <Box className={`grid jcs aic g50 ${styles.users_section}`}>
            <Title title={"Users"} fw={600} align={"center"} h={"h4"} />
            <Box className={`grid jcs aic g30 ${styles.users_box}`}>
                {!isLoading ? users && users.length > 0 ? users.map((user, i) => (
                    <UserBox data={user} editable={true} key={i} />
                )) : (<Title title={"No Users Yet..."} fw={600} color={"#ddd"} align={"left"} h={"h4"} />) : (new Array(Math.floor(Math.random(20))).fill(0).map((_, i) => (
                    <LoadingUserBox key={i} />
                )))
                }
            </Box>
        </Box>
    )
}

export default UsersSection
