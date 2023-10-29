import AuthenticationSection from "@/sections/AuthenticationSection/AuthenticationSection";

export const metadata = {
  title: "AlCazar - Reset Password",
  description: "AlCazar Reset Password Page",
};

export default function ResetPasswordPage() {
  return <AuthenticationSection type={"reset_password"} />;
}
