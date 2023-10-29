import React, { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
    const [option, setOption] = useState(0)
    const [openEditProfileModal, setOpenEditProfileModal] = useState(false)
    const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false)

    const handleCloseEditProfileModal = () => {
        setOpenEditProfileModal(false);
    };
    const handleOpenEditProfileModal = () => {
        setOpenEditProfileModal(true);
    };
    const handleCloseDeleteAccountModal = () => {
        setOpenDeleteAccountModal(false);
    };
    const handleOpenDeleteAccountModal = () => {
        setOpenDeleteAccountModal(true);
    };
    return (
        <ProfileContext.Provider value={{ option, setOption, openEditProfileModal, handleOpenEditProfileModal, handleCloseEditProfileModal, openDeleteAccountModal, handleCloseDeleteAccountModal, handleOpenDeleteAccountModal }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
