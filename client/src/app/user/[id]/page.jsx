import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import UserProfileOptions from "@/components/UserProfileOptions/UserProfileOptions";

export const metadata = {
    title: "AlCazar - User",
    description: "Web Application for sell Class A furniture",
};

export default function UserPage() {
    return (
        <PrimaryBox>
            <PrimaryContainer>
                <UserProfileOptions />
            </PrimaryContainer>
        </PrimaryBox>
    )
}
