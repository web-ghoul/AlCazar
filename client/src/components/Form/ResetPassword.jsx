import React from "react";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTetField";
import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
const ResetPassword = ({ formik }) => {
  return (
    <>
      <PrimaryTextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <PrimaryTextField
        fullWidth
        id="confirm_password"
        name="confirm_password"
        label="Confirm Password"
        type="password"
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirm_password &&
          Boolean(formik.errors.confirm_password)
        }
        helperText={
          formik.touched.confirm_password && formik.errors.confirm_password
        }
      />
      <PrimaryButton
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Reset Password
      </PrimaryButton>
    </>
  );
};

export default ResetPassword;
