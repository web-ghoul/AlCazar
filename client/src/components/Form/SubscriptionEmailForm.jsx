import React from 'react'
import { PrimaryButton } from '@/MUIComponents/PrimaryButton'
import { SecondaryTextField } from '@/MUIComponents/SecondaryTextField'
import { EmailRounded } from '@mui/icons-material'
import { Box, InputAdornment } from '@mui/material'
import LoadButton from '../LoadButton/LoadButton'

const SubscriptionEmailForm = ({ loading, formik }) => {
    return (
        <Box className={`grid jcs aic g10`}>
            <SecondaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailRounded />
                        </InputAdornment>
                    ),
                }}
                sx={{ color: (theme) => theme.palette.white }}
                variant="standard"
                id="subscriptedEmail"
                name="subscriptedEmail"
                type="subscriptedEmail"
                placeholder="Email"
                value={formik.values.subscriptedEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.subscriptedEmail && Boolean(formik.errors.subscriptedEmail)}
                helperText={formik.touched.subscriptedEmail && formik.errors.subscriptedEmail}
            />
            <LoadButton loading={loading}>
                <PrimaryButton variant="contained"
                    fullWidth
                    type="submit" sx={{ width: "fit-content" }}>
                    Subscribe Now
                </PrimaryButton>
            </LoadButton>
        </Box>
    )
}

export default SubscriptionEmailForm
