import { SecondaryIconButton } from '@/MUIComponents/SecondaryIconButton'
import { FacebookRounded, Pinterest } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import { FcGoogle } from "react-icons/fc"
import styles from "./SocialMediaAuth.module.scss"
import { useRouter } from 'next/navigation'

const SocialMediaAuth = () => {
  const router = useRouter()
  return (
    <Box className={`flex jcc aic g10 ${styles.social_medial_icons}`}>
      <SecondaryIconButton onClick={() => router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/callback`)}>
        <FcGoogle />
      </SecondaryIconButton>
      {/* <SecondaryIconButton>
        <FacebookRounded sx={{ color: (theme) => theme.palette.facebook }} />
      </SecondaryIconButton>
      <SecondaryIconButton>
        <Pinterest sx={{ color: (theme) => theme.palette.pinterest }} />
      </SecondaryIconButton> */}
    </Box>
  )
}

export default SocialMediaAuth
