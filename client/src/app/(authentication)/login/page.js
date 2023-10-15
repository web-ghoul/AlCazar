import Authentication from "@/pages/Authentication/Authentication";

export const metadata = {
  title: "AlCazar - Login",
  description: "AlCazar Login Page",
};

export default function LoginPage() {
  return <Authentication type={"login"} />;
}
