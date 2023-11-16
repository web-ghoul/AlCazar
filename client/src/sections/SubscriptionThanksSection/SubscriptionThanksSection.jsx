"use client"
import React, { useEffect, useState } from 'react'
import { PrimaryBox } from '@/MUIComponents/PrimaryBox'
import { PrimaryContainer } from '@/MUIComponents/PrimaryContainer'
import Title from '@/components/Title/Title'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import subscriptionImage from "../../images/subscription.png"
import styles from "./SubscriptionThanksSection.module.scss"
import { Skeleton } from '@mui/material'

const SubscriptionThanksSection = () => {
    const { subscriptedEmailId } = useParams()
    const router = useRouter()
    const dispatch = useDispatch()
    const [confirmed, setConfirmed] = useState(false)
    const handleConfirmedSubscriptedEmail = async () => {
        await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/confirmSubscriptedEmail/${subscriptedEmailId}`
        ).then((res) => {
            try {
                setConfirmed(true)
                router.push(`${process.env.NEXT_PUBLIC_HOME_PAGE}`)
            } catch (error) {
                console.log(error.message);
            }
        }).catch((err) => {
            let msg;
            try {
                msg = err.response.data.error
                toast.error(msg);
            } catch (error) {
                msg = error.message
                toast.error(msg);
            }
            if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
                dispatch(logout())
                router.push(`/login`)
            }
        });
    }
    useEffect(() => {
        handleConfirmedSubscriptedEmail()
    }, [])
    return (
        <PrimaryBox>
            <PrimaryContainer className={`grid jcs aic g30 ${styles.subscription}`}>
                {
                    confirmed ? (<>
                        <LazyLoadImage src={subscriptionImage.src} className={`${styles.subscription_image} center_rel_x `} />
                        <Title title={"Thanks for Subscription"} align={"center"} fw={600} h={"h3"} />
                    </>) : (<Skeleton className={` ${styles.subscription_image} ${styles.subscription_image_loading} center_rel_x `} />)
                }
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default SubscriptionThanksSection
