import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import styles from "./Or.module.scss"

const Or = () => {
  return (
    <Box className={`flex jcs aic ${styles.or}`}>
      <Typography variant='h6' className={`${styles.or_text} center_rel_x  pad5`}>Or</Typography>
      <Divider className={`center_abs_x`}/>
    </Box>
  )
}

export default Or