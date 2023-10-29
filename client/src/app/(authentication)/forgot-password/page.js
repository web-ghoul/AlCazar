import AuthenticationSection from "@/sections/AuthenticationSection/AuthenticationSection";

export const metadata = {
  title: "AlCazar - Forgot Password",
  description: "AlCazar Forgot Password Page",
};

export default function ForgotPasswordPage() {
  return <AuthenticationSection type={"forgot_password"} />;
}
