import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import ItemsSection from "@/sections/ItemsSection/ItemsSection";
import Title from "@/components/Title/Title";

export const metadata = {
  title: "AlCazar - Shop",
  description: "Web Application for sell Class A furniture",
};

export default function ShopPage() {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs g30 aic`}>
        <ItemsSection editable={false} >
          <Title
            title={"Our Collection"}
            align={"left"}
            line={true}
            fw={700}
            h={"h4"}
          />
        </ItemsSection>
      </PrimaryContainer>
    </PrimaryBox>
  );
}
