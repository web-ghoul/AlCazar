import Authentication from "@/pages/Authentication/Authentication";

export const metadata = {
  title: "AlCazar - Register",
  description: "AlCazar Register Page",
};

export default function RegisterPage() {
  return <Authentication type={"register"} />;
}
