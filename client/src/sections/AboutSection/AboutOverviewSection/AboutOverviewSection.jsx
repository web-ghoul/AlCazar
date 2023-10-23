import { Box, Typography } from '@mui/material'
import React from 'react'
import aboutOverviewImg from "../../../images/aboutOverviewImg.webp"
import styles from "../AboutSection.module.scss"
import Title from '@/components/Title/Title'

const AboutOverviewSection = () => {
  return (
    <Box className={`grid jcs aic g30 ${styles.about_box}`}>
      <Box sx={{ backgroundImage: `url(${aboutOverviewImg.src})` }} className={`${styles.about_box_image}`} />
      <Box className={`grid jcfe aic g10`}>
        <Title title={"Overview"} align={"right"} h={"h4"} fw={500} />
        <Typography variant='h6' className={`tae`}>The name ALCAZAR is derived from a type of Spanish castle, which means the palace or fortress. Al Cazar was established in 1998 as a family business and quickly became well known in Egypt for providing high quality home furnishings with a ‘special taste’. At AlCazar, quality is not an element to be controlled, but rather it is a way of being; it is our way of doing what we do.
          AlCazar prides itself on being a family based business structured on traditional family values; personal care and partnership is our way, quality, professionalism, reliability in everything we do, owing our clients value for their money, and creativity is our route for survival. AlCazar both designs and produces home & Garden furniture pieces which retails design and manufacture high quality wood furniture, also, we were able to build a strong reputation in executing contract projects of various scales and specializations, through its high quality production and attention to details.
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutOverviewSection
