import React, { createContext, useState } from 'react'

export const ItemContext = createContext()

const ItemProvider = ({ children }) => {
    const [itemImages, setItemImages] = useState([])
    const [openViewItemImagesModal, setOpenViewItemImagesModal] = useState(false)
    const [openViewChooseDimensionsModal, setOpenViewChooseDimensionsModal] = useState(false)
    const [dimensions, setDimensions] = useState([])
    const [chosenDimension, setChosenDimension] = useState()

    const handleOpenViewItemImagesModal = () => {
        setOpenViewItemImagesModal(true)
    }

    const handleCloseViewItemImagesModal = () => {
        setOpenViewItemImagesModal(false)
    }

    const handleOpenViewChooseDimensionModal = () => {
        setOpenViewChooseDimensionsModal(true)
    }

    const handleCloseViewChooseDimensionModal = () => {
        setOpenViewChooseDimensionsModal(false)
        setDimensions([])
    }

    return (
        <ItemContext.Provider value={{ chosenDimension, setChosenDimension, openViewItemImagesModal, handleOpenViewItemImagesModal, handleCloseViewItemImagesModal, setItemImages, itemImages, setDimensions, dimensions, handleOpenViewChooseDimensionModal, handleCloseViewChooseDimensionModal, openViewChooseDimensionsModal }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider
