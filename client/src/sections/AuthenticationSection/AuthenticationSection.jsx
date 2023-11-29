"use client"
import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Form from "@/components/Form/Form";
import Title from "@/components/Title/Title";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import waitImg from "../../images/waiting.jpg"
import { useParams, useRouter } from "next/navigation";
import styles from "./AuthenticationSection.module.scss"
import Cookies from "js-cookie";

const AuthenticationSection = ({ type }) => {
  const params = useParams()
  const router = useRouter()
  useEffect(() => {
    try {
      if (type === "auth_provider") {
        const token = params.token
        const userId = params.userId
        if (token && userId) {
          Cookies.set("AlCazar_token", token, { expires: 30 })
          Cookies.set("AlCazar_userId", userId, { expires: 30 })
          router.push("/")
        }
      }
    } catch (err) {
      console.log(err)
    }
  }, [params])
  return (
    <PrimaryBox component={"section"}>
      <PrimaryContainer className={`grid jcs aic g30`}>
        {type !== "auth_provider" ? (<><Title
          title={`${type === "login"
            ? "Login"
            : type === "register"
              ? "Register"
              : type === "reset_password"
                ? "Reset Password"
                : type === "forgot_password" && "Forgot Password"
            }`}
          line={true}
          h={"h3"}
          align={"center"}
          fw={600}
        />
          <Form type={type} /></>) : (<LazyLoadImage className={`center_rel_x ${styles.auth_image}`} src={waitImg.src} />)}
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default AuthenticationSection;
