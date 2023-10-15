import Authentication from "@/pages/Authentication/Authentication";

export const metadata = {
  title: "AlCazar - Reset Password",
  description: "AlCazar Reset Password Page",
};

export default function ResetPasswordPage() {
  return <Authentication type={"reset_password"} />;
}
