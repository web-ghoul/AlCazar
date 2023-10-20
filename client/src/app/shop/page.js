import { PrimaryBox } from "@/MUIComponents/PrimaryBox";
import { PrimaryContainer } from "@/MUIComponents/PrimaryContainer";
import Shop from "@/pages/Shop/Shop";

export const metadata = {
  title: "AlCazar - Shop",
  description: "Web Application for sell Class A furniture",
};

export default function ShopPage() {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs g30 aic`}>
        <Shop editable={false} />
      </PrimaryContainer>
    </PrimaryBox>
  );
}
