import SectionPage from "../../../components/SectionPage";
import { BiLogoCss3 } from "react-icons/bi";

const CssPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul
        externalLink={"https://www.w3schools.com/css/default.asp"}
      >
        <BiLogoCss3 /> CSS
      </SectionPage.Judul>
      <SectionPage.Isi>Learn Css here</SectionPage.Isi>
    </SectionPage>
  );
};

export default CssPage;
