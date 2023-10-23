import React from 'react'
import aboutValuesAndDesignImg from "../../../images/aboutValuesAndDesignImg.webp"
import { Box, List, ListItem, Typography } from '@mui/material'
import styles from "../AboutSection.module.scss"
import Title from '@/components/Title/Title'

const AboutValuesAndDesignSection = () => {
  return (
    <Box className={`grid jcs aic g30 ${styles.about_box}`}>
      <Box sx={{ backgroundImage: `url(${aboutValuesAndDesignImg.src})` }} className={`${styles.about_box_image}`} />
      <Box className={`grid jcfe aic g20`} >
        <Box className={`grid jcfe aic`}>
          <Title title={"Our Values"} h={"h5"} align={"right"} fw={500} />
          <List className={`grid jcfe aic`}>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >Personal care and partnership.</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >Creativity</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >Quality</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >Reliability</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >Value for Money.</Typography>
            </ListItem>
          </List>
        </Box>
        <Box className={`grid jcfe aic`}>
          <Title title={"Design and Innovation"} h={"h5"} align={"right"} fw={500} />
          <List className={`grid jcfe aic`}>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >ALCAZAR invests heavily in building a company design culture.</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >ALCAZAR develops 1 collection yearly launched through our showroom events.</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >In addition to its in‐house design department, ALCAZAR also collaborates with renowned national and international designers.</Typography>
            </ListItem>
            <ListItem className={`flex jcfe aic`}>
              <Typography variant='h6' className={"tae"} >ALCAZAR designers’ collaborations include:
                <List className={`grid jcfe aic`}>
                  <ListItem className={`flex jcfe aic`}>
                    <Typography variant='subtitle1' className={"tae"}>
                      Cherif Morsy - Egypt.
                    </Typography>
                  </ListItem>
                  <ListItem className={`flex jcfe aic`}>
                    <Typography variant='subtitle1' className={"tae"}>
                      Frans Schrofer - Netherlands.
                    </Typography>
                  </ListItem>
                  <ListItem className={`flex jcfe aic`}>
                    <Typography variant='subtitle1' className={"tae"}>
                      Harry & Camilla - Spain.
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutValuesAndDesignSection
