import SectionPage from "../../../components/SectionPage";
import SectionContent from "../../../components/SectionContent";
import PlusMinus from "./hookscomponents/PlusMinus";

const UseStatePage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul
        externalLink={"https://react.dev/reference/react/useState#usage"}
      >
        useState{" "}
      </SectionPage.Judul>
      <SectionPage.Isi>
        <SectionContent title={"counter"}>
          <PlusMinus />
        </SectionContent>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default UseStatePage;
