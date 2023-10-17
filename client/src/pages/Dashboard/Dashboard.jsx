import React from "react";
import { PrimaryBox } from "../../MUIComponents/PrimaryBox";
import { PrimaryContainer } from "../../MUIComponents/PrimaryContainer";
import Title from "@/components/Title/Title";
import DashboardOptions from "@/components/DashboardOptions/DashboardOptions";

const Dashboard = () => {
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
  );
};

export default Dashboard;
