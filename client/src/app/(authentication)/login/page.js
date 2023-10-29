import AuthenticationSection from "@/sections/AuthenticationSection/AuthenticationSection";

export const metadata = {
  title: "AlCazar - Login",
  description: "AlCazar Login Page",
};

export default function LoginPage() {
  return <AuthenticationSection type={"login"} />;
}
