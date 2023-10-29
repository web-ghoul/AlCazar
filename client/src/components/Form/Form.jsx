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
import DeleteItemForm from "./DeleteItemForm";
import { DashboardContext } from "@/context/DashboardContext";
import DeleteCategoryForm from "./DeleteCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "@/store/itemsSlice";
import { getCategories } from "@/store/categoriesSlice";
import ContactForm from "./ContactForm";
import { logging, logout } from "@/store/authSlice";
import Cookies from "js-cookie";
import DeleteUserForm from "./DeleteUserForm";
import DeleteAccountForm from "./DeleteAccountForm";
import EditItemForm from "./EditItemForm";
import EditCategoryForm from "./EditCategoryForm";
import EditUserForm from "./EditUserForm";
import EditProfileForm from "./EditProfileForm";
import { ProfileContext } from "@/context/ProfileContext";
import { getUsers } from "@/store/usersSlice";
import AddNewAdminForm from "./AddNewAdminForm";
import FilterAndSearchAndSort from "../FilterAndSearchAndSort/FilterAndSearchAndSort";

const Form = ({ type }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { token, userId } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const {
    itemId,
    categoryId,
    user_id,
    handleCloseDeleteItemModal,
    handleCloseDeleteUserModal,
    handleCloseDeleteCategoryModal,
    handleCloseEditItemModal,
    editableItemData,
    handleCloseEditCategoryModal,
    editableCategoryData,
    handleCloseEditUserModal,
    editableUserData,
    handleCloseAddNewAdminModal
  } = useContext(DashboardContext);

  const { handleCloseDeleteAccountModal } = useContext(ProfileContext)

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
          try {
            const token = res.data.token
            const userId = res.data.user._id
            Cookies.set("AlCazar_token", token, { expires: 30 })
            Cookies.set("AlCazar_userId", userId, { expires: 30 })
            dispatch(logging({ token, userId }))
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
          router.push(`${process.env.NEXT_PUBLIC_HOME_PAGE}`);
        })
        .catch((err) => {
          console.log(err)
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
          formData,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
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
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
          }
        });
      setLoading(false);
    },
  });

  const editItemFormik = useFormik({
    initialValues: {
      title: editableItemData && editableItemData.title,
      price: editableItemData && editableItemData.price,
      images: [],
      category: editableItemData && editableItemData.category,
      count: editableItemData && editableItemData.count,
      width: editableItemData && editableItemData.width,
      length: editableItemData && editableItemData.length,
      height: editableItemData && editableItemData.height,
    },
    validationSchema: yup.object({
      title: yup.string("Enter your title").required("Title is required"),
      price: yup.number("Enter your price").required("Price is required"),
      images: yup.array(yup.mixed()),
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
      if (values.images.length > 0) {
        values.images.map((image) => {
          formData.append("images", image);
        });
      } else {
        values.images = editableItemData.images
      }
      formData.append("data", JSON.stringify(values));
      await axios
        .patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/editItem/${itemId}`,
          formData,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        )
        .then((res) => {
          try {
            handleCloseEditItemModal()
            dispatch(getItems())
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
        })
        .catch((err) => {
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
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
      image: yup.array(yup.mixed()).required("Image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      values.image.map((img) => {
        formData.append("image", img);
      });
      formData.append("data", JSON.stringify(values));
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addNewCategory`,
          formData,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
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
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
          }
        });
      setLoading(false);
    },
  });

  const editCategoryFormik = useFormik({
    initialValues: {
      title: editableCategoryData && editableCategoryData.title,
      image: ""
    },
    validationSchema: yup.object({
      title: yup.string("Enter your title").required(),
      image: yup.array(yup.mixed()),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      if (values.image) {
        values.image.map((img) => {
          formData.append("image", img);
        });
      } else {
        values.image = [editableCategoryData.image]
      }
      formData.append("data", JSON.stringify(values));
      await axios
        .patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/editCategory/${categoryId}`,
          formData,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        )
        .then((res) => {
          try {
            handleCloseEditCategoryModal()
            dispatch(getCategories())
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
        })
        .catch((err) => {
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
          }
        });
      setLoading(false);
    },
  });

  const editUserFormik = useFormik({
    initialValues: {
      firstName: editableUserData && editableUserData.firstName,
      lastName: editableUserData && editableUserData.lastName,
      phone: editableUserData && editableUserData.phone,
      email: editableUserData && editableUserData.email,
      avatar: ""
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
      avatar: yup.array(yup.mixed())
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      if (values.avatar) {
        values.avatar.map((img) => {
          formData.append("image", img);
        });
      } else {
        values.avatar = [editableUserData.avatar]
      }
      formData.append("data", JSON.stringify(values));
      await axios
        .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/editUser/${user_id}`, formData,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
        .then((res) => {
          try {
            handleCloseEditUserModal()
            dispatch(getUsers({ token }))
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
        })
        .catch((err) => {
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
          }
        });
      setLoading(false);
    },
  });

  const addNewAdminFormik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: yup.object({
      email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await axios
        .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addNewAdmin`, values,
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
        .then((res) => {
          try {
            handleCloseAddNewAdminModal()
            dispatch(getUsers({ token }))
            toast.success(res.data.message);
          } catch (error) {
            toast.error(error.message);
          }
          resetForm();
        })
        .catch((err) => {
          let msg;
          try {
            msg = err.response.data.error
            toast.error(msg);
          } catch (error) {
            msg = error.message
            toast.error(msg);
          }
          if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
            dispatch(logout())
            router.push(`/login`)
          }
        });
      setLoading(false);
    },
  });

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter your name").required("Name is required"),
      email: yup
        .string("Enter your email")
        .email("Email isn't Valid")
        .required("Email is required"),
      subject: yup.string("Enter your subject"),
      message: yup.string("Enter your message").required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      // await axios
      //   .post(
      //     `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/addNewCategory`,
      //     formData
      //   )
      //   .then((res) => {
      //     try {
      //       toast.success(res.data.message);
      //     } catch (error) {
      //       toast.error(error.message);
      //     }
      //     resetForm();
      //   })
      //   .catch((err) => {
      //     try {
      //       toast.error(err.response.data.error);
      //     } catch (error) {
      //       toast.error(err.message);
      //     }
      //   });
      setLoading(false);
    },
  });

  const handleDeleteItem = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/deleteItem/${itemId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
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
        handleCloseDeleteItemModal();
        let msg;
        try {
          msg = err.response.data.error
          toast.error(msg);
        } catch (error) {
          msg = error.message
          toast.error(msg);
        }
        if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
          dispatch(logout())
          router.push(`/login`)
        }
      });
    setLoading(false);
  };

  const handleDeleteCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/deleteCategory/${categoryId}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
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
        handleCloseDeleteCategoryModal();
        let msg;
        try {
          msg = err.response.data.error
          toast.error(msg);
        } catch (error) {
          msg = error.message
          toast.error(msg);
        }
        if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
          dispatch(logout())
          router.push(`/login`)
        }
      });
    setLoading(false);
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/deleteUser/${user_id}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      .then((res) => {
        try {
          toast.success(res.data.message);
          handleCloseDeleteUserModal();
          dispatch(getUsers({ token }));
        } catch (error) {
          toast.error(error.message);
        }
      })
      .catch((err) => {
        handleCloseDeleteUserModal();
        let msg;
        try {
          msg = err.response.data.error
          toast.error(msg);
        } catch (error) {
          msg = error.message
          toast.error(msg);
        }
        if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
          dispatch(logout())
          router.push(`/login`)
        }
      });
    setLoading(false);
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/deleteAccount`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      .then((res) => {
        try {
          toast.success(res.data.message);
          handleCloseDeleteAccountModal();
          dispatch(logout());
          router.push(`/login`)
        } catch (error) {
          toast.error(error.message);
        }
      })
      .catch((err) => {
        handleCloseDeleteAccountModal();
        let msg;
        try {
          msg = err.response.data.error
          toast.error(msg);
        } catch (error) {
          msg = error.message
          toast.error(msg);
        }
        if (msg === `${process.env.NEXT_PUBLIC_SESSION_EXPIRED_MESSAGE}`) {
          dispatch(logout())
          router.push(`/login`)
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
                : type === "contact"
                  ? contactFormik.handleSubmit
                  : type === "add_new_item"
                    ? addNewItemFormik.handleSubmit
                    : type === "add_new_category"
                      ? addNewCategoryFormik.handleSubmit : type === "edit_item" ? editItemFormik.handleSubmit : type === "edit_category" ? editCategoryFormik.handleSubmit
                        : type === "edit_item" ? editItemFormik.handleSubmit : type === "edit_user" ? editUserFormik.handleSubmit : type === "delete_item"
                          ? handleDeleteItem
                          : type === "add_new_admin" ? addNewAdminFormik.handleSubmit : type === "delete_category" ? handleDeleteCategory : type === "delete_user" ? handleDeleteUser : type === "delete_account" && handleDeleteAccount
      }
      className={`form grid jcs aic g30 ${type === "edit_user" && "edit_user_form"}`}
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
      ) : type === "contact" ? (
        <ContactForm loading={loading} formik={contactFormik} />
      ) : type === "delete_item" ? (
        <DeleteItemForm loading={loading} />
      ) : (
        type === "delete_category" ? (<DeleteCategoryForm loading={loading} />) : type === "delete_user" ? (<DeleteUserForm loading={loading} />) : type === "delete_account" ? (<DeleteAccountForm loading={loading} />) : type === "edit_item" ? <EditItemForm loading={loading} formik={editItemFormik} /> : type === "edit_category" ? <EditCategoryForm loading={loading} formik={editCategoryFormik} /> : type === "edit_user" ? <EditUserForm loading={loading} formik={editUserFormik} /> : type === "edit_profile" ? <EditProfileForm loading={loading} /> : type === "add_new_admin" && <AddNewAdminForm loading={loading} formik={addNewAdminFormik} />
      )}
    </form>
  );
};

export default Form;
