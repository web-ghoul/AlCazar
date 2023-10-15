import Authentication from "@/pages/Authentication/Authentication";

export const metadata = {
  title: "AlCazar - Forgot Password",
  description: "AlCazar Forgot Password Page",
};

export default function ForgotPasswordPage() {
  return <Authentication type={"forgot_password"} />;
}
