import React, { useContext } from 'react'
import Title from '../Title/Title'
import { Box } from '@mui/material'
import LoadButton from '../LoadButton/LoadButton'
import { DeleteButton } from '@/MUIComponents/DeleteButton'
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import { SubscriptionContext } from '@/context/SubscriptionContext'

const DeleteSubscriptionEmailForm = ({ loading }) => {
    const { handleCloseDeleteSubscriptionModal } = useContext(SubscriptionContext)
    return (
        <>
            <Title
                title={"Are you Sure to Delete your Subscripted Email ?"}
                h={"h5"}
                align={"center"}
                fw={"600"}
            />
            <Box className={`flex jcfe aic g10`}>
                <LoadButton deleted={true} loading={loading}>
                    <DeleteButton type="submit">Delete</DeleteButton>
                </LoadButton>
                <PrimaryButton onClick={handleCloseDeleteSubscriptionModal}>
                    Cancel
                </PrimaryButton>
            </Box>
        </>
    )
}

export default DeleteSubscriptionEmailForm
