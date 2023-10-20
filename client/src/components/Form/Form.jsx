"use client";
import React, { useContext, useState } from "react";
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
import AddNewItemForm from "./AddNewItemForm";
import AddNewCategoryForm from "./AddNewCategoryForm";
import DeleteItem from "./DeleteItem";
import { DashboardContext } from "@/context/DashboardContext";
import DeleteCategory from "./DeleteCategory";
import { useDispatch } from "react-redux";
import { getItems } from "@/store/itemsSlice";
import { getCategories } from "@/store/categoriesSlice";

const Form = ({ type }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    itemId,
    categoryId,
    handleCloseDeleteItemModal,
    handleCloseUpdateItemModal,
    handleCloseDeleteCategoryModal,
    handleCloseUpdateCategoryModal,
  } = useContext(DashboardContext);

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
            toast.error(err.response.data.error);
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
            toast.error(err.response.data.error);
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

  const addNewItemFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      images: [],
      category: "",
      count: "",
      width: "",
      length: "",
      height: "",
    },
    validationSchema: yup.object({
      title: yup.string("Enter your title").required("Title is required"),
      description: yup
        .string("Enter your description")
        .required("Description is required"),
      price: yup.number("Enter your price").required("Price is required"),
      images: yup.array(yup.mixed()).required("Image is required"),
      category: yup
        .string("Enter your category")
        .required("Category is required"),
      count: yup.number("Enter your count").required("Count is required"),
      width: yup.number("Enter your width").required("Width is required"),
      length: yup.number("Enter your length").required("Length is required"),
      height: yup.number("Enter your height").required("Height is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      values.images.map((image) => {
        formData.append("images", image);
      });
      formData.append("data", JSON.stringify(values));
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addNewItem`,
          formData
        )
        .then((res) => {
          try {
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
        })
        .catch((err) => {
          try {
            toast.error(err.response.data.error);
          } catch (error) {
            toast.error(err.message);
          }
        });
      setLoading(false);
    },
  });

  const addNewCategoryFormik = useFormik({
    initialValues: {
      title: "",
      image: "",
    },
    validationSchema: yup.object({
      title: yup.string("Enter your title").required(),
      image: yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("data", JSON.stringify(values));
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addNewCategory`,
          formData
        )
        .then((res) => {
          try {
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
        })
        .catch((err) => {
          try {
            toast.error(err.response.data.error);
          } catch (error) {
            toast.error(err.message);
          }
        });
      setLoading(false);
    },
  });

  const handleDeleteItem = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/deleteItem/${itemId}`
      )
      .then((res) => {
        try {
          toast.success(res.data.message);
          handleCloseDeleteItemModal();
          dispatch(getItems());
        } catch (error) {
          toast.error(error.message);
        }
      })
      .catch((err) => {
        try {
          toast.error(err.response.data.error);
        } catch (error) {
          toast.error(error.message);
        }
      });
    setLoading(false);
  };

  const handleDeleteCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/deleteCategory/${categoryId}`
      )
      .then((res) => {
        try {
          toast.success(res.data.message);
          handleCloseDeleteCategoryModal();
          dispatch(getCategories());
        } catch (error) {
          toast.error(error.message);
        }
      })
      .catch((err) => {
        try {
          toast.error(err.response.data.error);
        } catch (error) {
          toast.error(error.message);
        }
      });
    setLoading(false);
  };

  return (
    <form
      onSubmit={
        type === "login"
          ? loginFormik.handleSubmit
          : type === "register"
          ? registerFormik.handleSubmit
          : type === "reset_password"
          ? resetPasswordFormik.handleSubmit
          : type === "forgot_password"
          ? forgotPasswordFormik.handleSubmit
          : type === "add_new_item"
          ? addNewItemFormik.handleSubmit
          : type === "add_new_category"
          ? addNewCategoryFormik.handleSubmit
          : type === "delete_item"
          ? handleDeleteItem
          : type === "delete_category" && handleDeleteCategory
      }
      className={`form grid jcs aic g30`}
    >
      {type === "login" ? (
        <Login loading={loading} formik={loginFormik} />
      ) : type === "register" ? (
        <Register loading={loading} formik={registerFormik} />
      ) : type === "reset_password" ? (
        <ResetPassword loading={loading} formik={resetPasswordFormik} />
      ) : type === "forgot_password" ? (
        <ForgotPassword loading={loading} formik={forgotPasswordFormik} />
      ) : type === "add_new_item" ? (
        <AddNewItemForm loading={loading} formik={addNewItemFormik} />
      ) : type === "add_new_category" ? (
        <AddNewCategoryForm loading={loading} formik={addNewCategoryFormik} />
      ) : type === "delete_item" ? (
        <DeleteItem loading={loading} />
      ) : (
        type === "delete_category" && <DeleteCategory loading={loading} />
      )}
    </form>
  );
};

export default Form;
