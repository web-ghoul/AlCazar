"use client"
import { Box, Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import AboutOverviewSection from './AboutOverviewSection/AboutOverviewSection'
import AboutVisionAndMissionSection from './AboutVisionAndMissionSection/AboutVisionAndMissionSection'
import AboutValuesAndDesignSection from './AboutValuesAndDesignSection/AboutValuesAndDesignSection'

const AboutPageSection = () => {
    const smSize = useMediaQuery("(max-width:768px)")
    return (
        <Box className={`grid jcs aic g50`}>
            <AboutOverviewSection />
            {smSize && <Divider />}
            <AboutVisionAndMissionSection />
            {smSize && <Divider />}
            <AboutValuesAndDesignSection />
        </Box>
    )
}

export default AboutPageSection
