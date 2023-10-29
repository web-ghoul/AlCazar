import AuthenticationSection from "@/sections/AuthenticationSection/AuthenticationSection";

export const metadata = {
  title: "AlCazar - Register",
  description: "AlCazar Register Page",
};

export default function RegisterPage() {
  return <AuthenticationSection type={"register"} />;
}
