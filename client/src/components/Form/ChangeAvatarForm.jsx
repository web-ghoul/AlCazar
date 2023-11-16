import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { CloseRounded, EditRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import LoadButton from '../LoadButton/LoadButton'
import { ProfileContext } from '@/context/ProfileContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImageChange from '../ImageChange/ImageChange'

const ChangeAvatarForm = ({ loading, formik }) => {
    const { avatar, handleCloseViewAvatarModal } = useContext(ProfileContext)
    const [image, setImage] = useState(avatar)
    useEffect(() => {
        formik.values.avatar = [image]
    }, [image])
    return (
        <>
            <PrimaryIconButton sx={{ width: "fit-content" }} onClick={handleCloseViewAvatarModal}>
                <CloseRounded />
            </PrimaryIconButton>
            <ImageChange setImage={setImage} image={image} />
            {
                image && (<LoadButton loading={loading}>
                    <PrimaryIconButton type="submit" className={`flex jcc aic g10`}>
                        <EditRounded />
                        <Typography variant="h6">Change Avatar</Typography>
                    </PrimaryIconButton>
                </LoadButton>)
            }
        </>
    )
}

export default ChangeAvatarForm
