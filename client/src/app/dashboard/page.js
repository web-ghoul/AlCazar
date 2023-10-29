import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import DashboardOptions from "@/components/DashboardOptions/DashboardOptions";
import Title from "@/components/Title/Title";

export const metadata = {
  title: "AlCazar - Dashboard",
  description: "Web Application for sell Class A furniture",
};

export default function DashboardPage() {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs g50 aic`}>
        <Title
          title={"Dashboard"}
          align={"center"}
          line={true}
          fw={700}
          h={"h3"}
        />
        <DashboardOptions />
      </PrimaryContainer>
    </PrimaryBox>
  )
}
