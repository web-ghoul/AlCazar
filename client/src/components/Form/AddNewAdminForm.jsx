import { Box, InputAdornment } from '@mui/material';
import React from 'react'
import LoadButton from '../LoadButton/LoadButton';
import { PrimaryButton } from '@/MUIComponents/PrimaryButton';
import { PrimaryTextField } from '@/MUIComponents/PrimaryTextField';
import { EmailRounded } from '@mui/icons-material';

const AddNewAdminForm = ({ loading, formik }) => {
    return (
        <>
            <PrimaryTextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailRounded
                                sx={{ color: (theme) => theme.palette.primary.main }}
                            />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                fullWidth
                id="email"
                type="text"
                name="email"
                placeholder="Enter User Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <Box className={`grid jcs aic g10`}>
                <LoadButton loading={loading}>
                    <PrimaryButton fullWidth type="submit">
                        Add
                    </PrimaryButton>
                </LoadButton>
            </Box>
        </>
    );
}

export default AddNewAdminForm
