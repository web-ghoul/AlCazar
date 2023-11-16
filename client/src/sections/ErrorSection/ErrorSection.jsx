"use client"
import React from 'react'
import { PrimaryBox } from '@/MUIComponents/PrimaryBox'
import { PrimaryContainer } from '@/MUIComponents/PrimaryContainer'
import errorImage from "../../images/error.jpg"
import styles from "./ErrorSection.module.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ErrorSection = () => {
    return (
        <PrimaryBox>
            <PrimaryContainer className={`grid jcs aic g30 ${styles.error_section} `}>
                <LazyLoadImage src={errorImage.src} className={`${styles.error_image} center_rel_x `} />
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default ErrorSection
