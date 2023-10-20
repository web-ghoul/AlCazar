import { PrimaryButton } from "@/MUIComponents/PrimaryButton";
import { PrimaryTextField } from "@/MUIComponents/PrimaryTextField";
import React from "react";
import Or from "./Or/Or";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import Link from "next/link";
import SocialMediaAuth from "./SocialMediaAuth/SocialMediaAuth";
import {
  EmailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import LoadButton from "../LoadButton/LoadButton";

const Login = ({ loading,formik }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
      <PrimaryTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        type={showPassword ? "text" : "password"}
        variant="standard"
        fullWidth
        id="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Box className={`grid jcs aic g10`}>
        <Link href={`${process.env.NEXT_PUBLIC_FORGOT_PASSWORD_PAGE}`}>
          <Typography
            variant="h6"
            className={`tae`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            Forgot your password ?
          </Typography>
        </Link>
        <LoadButton loading={loading}>
          <PrimaryButton
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </PrimaryButton>
        </LoadButton>
        <Link href={`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`}>
          <Typography
            variant="h6"
            className={`tas`}
            sx={{
              color: (theme) => theme.palette.primary.main,
              textDecoration: "underline",
            }}
          >
            Create an Account ?
          </Typography>
        </Link>
      </Box>
      <Box className={`grid jcs aic g10`}>
        <Or />
        <Typography
          variant="h6"
          className={`tac`}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          Log in with
        </Typography>
      </Box>
      <SocialMediaAuth />
    </>
  );
};

export default Login;
