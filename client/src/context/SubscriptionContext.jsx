import React, { createContext, useState } from 'react'

export const SubscriptionContext = createContext()

const SubscriptionProvider = ({ children }) => {
    const [openDeleteSubscriptionModal, setOpenDeleteSubscriptionModal] = useState(false)
    const [subscriptionEmailId, setSubscriptionEmailId] = useState(null)

    const handleOpenDeleteSubscriptionModal = () => {
        setOpenDeleteSubscriptionModal(true)
    }

    const handleCloseDeleteSubscriptionModal = () => {
        setOpenDeleteSubscriptionModal(false)
    }

    return (
        <SubscriptionContext.Provider value={{ subscriptionEmailId, setSubscriptionEmailId, openDeleteSubscriptionModal, handleCloseDeleteSubscriptionModal, handleOpenDeleteSubscriptionModal }}>
            {children}
        </SubscriptionContext.Provider>
    )
}

export default SubscriptionProvider
