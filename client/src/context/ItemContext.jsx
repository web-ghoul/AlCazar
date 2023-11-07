import React, { createContext, useState } from 'react'

export const ItemContext = createContext()

const ItemProvider = ({ children }) => {
    const [itemImages, setItemImages] = useState([])
    const [openViewItemImagesModal, setOpenViewItemImagesModal] = useState(false)

    const handleOpenViewItemImagesModal = () => {
        setOpenViewItemImagesModal(true)
    }

    const handleCloseViewItemImagesModal = () => {
        setOpenViewItemImagesModal(false)
    }

    return (
        <ItemContext.Provider value={{ openViewItemImagesModal, handleOpenViewItemImagesModal, handleCloseViewItemImagesModal, setItemImages, itemImages }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider
