import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import UserProfileOptions from "@/components/UserProfileOptions/UserProfileOptions";

export const metadata = {
  title: "AlCazar - Profile",
  description: "Web Application for sell Class A furniture",
};

export default function profilePage() {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <UserProfileOptions />
      </PrimaryContainer>
    </PrimaryBox>
  );
}
