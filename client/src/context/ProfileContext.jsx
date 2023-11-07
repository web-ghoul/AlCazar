import React, { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
    const [option, setOption] = useState(0)
    const [avatar, setAvatar] = useState()
    const [addressId, setAddressId] = useState(null)
    const [editableAccountData, setEditableAccountData] = useState()
    const [editableAddressData, setEditableAddressData] = useState()
    const [openEditProfileModal, setOpenEditProfileModal] = useState(false)
    const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false)
    const [openEditAccountModal, setOpenEditAccountModal] = useState(false)
    const [openViewAvatarModal, setOpenViewAvatarModal] = useState(false)
    const [openAddNewAddressModal, setOpenAddNewAddressModal] = useState(false)
    const [openDeleteAddressModal, setOpenDeleteAddressModal] = useState(false)
    const [openEditAddressModal, setOpenEditAddressModal] = useState(false)

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
    const handleCloseEditAccountModal = () => {
        setOpenEditAccountModal(false);
    };
    const handleOpenEditAccountModal = (data) => {
        setEditableAccountData(data)
        setOpenEditAccountModal(true);
    };
    const handleCloseViewAvatarModal = () => {
        setOpenViewAvatarModal(false);
    };
    const handleOpenViewAvatarModal = () => {
        setOpenViewAvatarModal(true);
    };
    const handleCloseAddNewAddressModal = () => {
        setOpenAddNewAddressModal(false);
    };
    const handleOpenAddNewAddressModal = () => {
        setOpenAddNewAddressModal(true);
    };
    const handleCloseDeleteAddressModal = () => {
        setOpenDeleteAddressModal(false);
    };
    const handleOpenDeleteAddressModal = (id) => {
        setAddressId(id)
        setOpenDeleteAddressModal(true);
    };
    const handleCloseEditAddressModal = () => {
        setOpenEditAddressModal(false);
    };
    const handleOpenEditAddressModal = (data) => {
        setAddressId(data._id)
        setEditableAddressData(data)
        setOpenEditAddressModal(true);
    };
    return (
        <ProfileContext.Provider value={{ editableAddressData, addressId, editableAccountData, option, setOption, openEditProfileModal, handleOpenEditProfileModal, handleCloseEditProfileModal, openDeleteAccountModal, handleCloseDeleteAccountModal, handleOpenDeleteAccountModal, openEditAccountModal, handleCloseEditAccountModal, handleOpenEditAccountModal, openViewAvatarModal, handleCloseViewAvatarModal, handleOpenViewAvatarModal, avatar, setAvatar, openAddNewAddressModal, handleCloseAddNewAddressModal, handleOpenAddNewAddressModal, handleCloseDeleteAddressModal, handleOpenDeleteAddressModal, openDeleteAddressModal, handleOpenEditAddressModal, handleCloseEditAddressModal, openEditAddressModal }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider
