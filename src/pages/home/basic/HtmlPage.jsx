import { AiFillHtml5 } from "react-icons/ai";
import SectionPage from "../../../components/SectionPage";

const HtmlPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul
        externalLink={"https://www.w3schools.com/html/default.asp"}
      >
        <AiFillHtml5 /> Html{" "}
      </SectionPage.Judul>
      <SectionPage.Isi>Learn html here</SectionPage.Isi>
    </SectionPage>
  );
};

export default HtmlPage;
