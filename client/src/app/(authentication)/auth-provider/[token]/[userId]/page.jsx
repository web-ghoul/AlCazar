import AuthenticationSection from "@/sections/AuthenticationSection/AuthenticationSection";

export const metadata = {
    title: "AlCazar - Authentication Provider",
    description: "AlCazar Authentication Provider Page",
};

export default function AuthProviderPage() {
    return <AuthenticationSection type={"auth_provider"} />;
}
