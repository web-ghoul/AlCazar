import React from 'react'
import aboutVisionAndMissionImg from "../../../images/aboutVisionAndMissionImg.webp"
import { Box, Typography } from '@mui/material'
import Title from '@/components/Title/Title'
import styles from "../AboutSection.module.scss"

const AboutVisionAndMissionSection = () => {
    return (
        <Box className={`grid jcs aic g30 ${styles.about_box}`}>
            <Box className={`grid jcfs aic g20`}>
                <Box className={`grid jcfs aic g10`}>
                    <Title title={"Our Vision"} h={"h5"} align={"left"} fw={600} />
                    <Typography variant='h6' >
                        To establish ALCAZAR as an international renowned brand.
                    </Typography>
                </Box>
                <Box className={`grid jcfs aic g5`}>
                    <Title title={"Our Mission"} h={"h5"} align={"left"} fw={600} />
                    <Typography variant='h6' >
                        We believe in wood as a living material to express our engagement with it, we design and produce a unique mixture of fine wood furniture to satisfy our valued customers’ refined taste.
                    </Typography>
                </Box>
            </Box>
            <Box className={`${styles.about_box_image}`} sx={{ backgroundImage: `url(${aboutVisionAndMissionImg.src})` }} />
        </Box>
    )
}

export default AboutVisionAndMissionSection
