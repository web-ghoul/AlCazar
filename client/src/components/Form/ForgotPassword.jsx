import React from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTetField";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
const ForgotPassword = ({ formik }) => {
  return (
    <>
      <PrimaryTextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <PrimaryButton
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Forgot Password
      </PrimaryButton>
    </>
  );
};

export default ForgotPassword;
