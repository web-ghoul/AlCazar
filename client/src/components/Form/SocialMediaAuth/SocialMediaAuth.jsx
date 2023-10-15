import { SecondaryIconButton } from '@/MUIComponents/SecondaryIconButton'
import { FacebookRounded, Pinterest } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import styles from "./SocialMediaAuth.module.scss"

const SocialMediaAuth = () => {
  return (
    <Box className={`flex jcc aic g10 ${styles.social_medial_icons}`}>
      <SecondaryIconButton>
        <FcGoogle/>
      </SecondaryIconButton>
      <SecondaryIconButton>
        <FacebookRounded sx={{color:(theme)=>theme.palette.facebook}}/>
      </SecondaryIconButton>
      <SecondaryIconButton>
        <Pinterest sx={{color:(theme)=>theme.palette.pinterest}}/>
      </SecondaryIconButton>
    </Box>
  )
}

export default SocialMediaAuth
