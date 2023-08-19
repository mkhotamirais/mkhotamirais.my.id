import SectionPage from "../../../components/SectionPage";

const BasicPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul>Basic</SectionPage.Judul>
      <SectionPage.Isi>
        <div className="section">
          <p>
            If you want to be a web designer or web developer, first of all try
            to be a front-end web developer by follow this{" "}
            <a href="https://roadmap.sh/frontend" target="blank">
              roadmap
            </a>
          </p>
        </div>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default BasicPage;
