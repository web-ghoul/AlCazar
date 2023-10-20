import React from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { EmailRounded } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import LoadButton from "../LoadButton/LoadButton";
const ForgotPassword = ({ loading, formik }) => {
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
        name="email"
        type="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <LoadButton loading={loading}>
        <PrimaryButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Forgot Password
        </PrimaryButton>
      </LoadButton>
    </>
  );
};

export default ForgotPassword;
