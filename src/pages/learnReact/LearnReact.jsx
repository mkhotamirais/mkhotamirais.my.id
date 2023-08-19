import { BiLogoReact } from "react-icons/bi";
import SectionPage from "../../components/SectionPage";

const LearnReact = () => {
  return (
    <SectionPage>
      <SectionPage.Judul
        externalLink={"https://www.w3schools.com/html/default.asp"}
      >
        <BiLogoReact /> Learn React{" "}
      </SectionPage.Judul>
      <SectionPage.Isi>Learn React here</SectionPage.Isi>
    </SectionPage>
  );
};

export default LearnReact;
