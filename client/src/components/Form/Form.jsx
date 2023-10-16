"use client";
import React, { useState } from "react";
import "./Form.scss";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Form = ({ type }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, { ...values })
        .then((res) => {
          toast.success(res.data.message);
          try {
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
          router.push(`${process.env.NEXT_PUBLIC_HOME_PAGE}`);
        })
        .catch((err) => {
          try {
            toast.error(err.response.data.message);
          } catch (error) {
            toast.error(error.message);
          }
        });
      setLoading(false);
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string("Enter your first name")
        .required("First Name is required"),
      lastName: yup
        .string("Enter your last name")
        .required("Last Name is required"),
      phone: yup.string("Enter your phone").required("Phone is required"),
      email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string("Enter your password")
        .required("Password is required")
        .min(8, "Password should be of minimum 8 characters length"),
      confirmPassword: yup
        .string("Enter your password")
        .required("Password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, { ...values })
        .then((res) => {
          try {
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
          router.push(`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`);
        })
        .catch((err) => {
          try {
            toast.success(err.response.data.message);
          } catch (error) {
            toast.error(error.message);
          }
        });
      setLoading(false);
    },
  });

  const resetPasswordFormik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
      password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
      confirmPassword: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={
        type === "login"
          ? loginFormik.handleSubmit
          : type === "register"
          ? registerFormik.handleSubmit
          : type === "reset_password"
          ? resetPasswordFormik.handleSubmit
          : type === "forgot_password" && forgotPasswordFormik.handleSubmit
      }
      className={`form grid jcs aic g20`}
    >
      {type === "login" ? (
        <Login loading={loading} formik={loginFormik} />
      ) : type === "register" ? (
        <Register loading={loading} formik={registerFormik} />
      ) : type === "reset_password" ? (
        <ResetPassword loading={loading} formik={resetPasswordFormik} />
      ) : (
        type === "forgot_password" && (
          <ForgotPassword loading={loading} formik={forgotPasswordFormik} />
        )
      )}
    </form>
  );
};

export default Form;
