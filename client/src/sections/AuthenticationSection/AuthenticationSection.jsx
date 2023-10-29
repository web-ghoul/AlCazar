import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Form from "@/components/Form/Form";
import Title from "@/components/Title/Title";
import React from "react";

const AuthenticationSection = ({ type }) => {
  return (
    <PrimaryBox component={"section"}>
      <PrimaryContainer className={`grid jcs aic g30`}>
        <Title
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
        <Form type={type} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default AuthenticationSection;
