import Card from "../../components/Card";
import SectionPage from "../../components/SectionPage";
import allProjectList from "./allProjectsList";

const MtrzPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul>Materialize Projects</SectionPage.Judul>
      <SectionPage.Isi>
        <div className="card-container">
          {allProjectList
            .filter(({ type }) => type == "materialize")
            .map((item, i) => (
              <Card
                key={i}
                url={item.url}
                img={item.img}
                title={item.title}
                description={item.description}
                recreatedUrl={item.recreatedUrl}
              />
            ))}
        </div>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default MtrzPage;
