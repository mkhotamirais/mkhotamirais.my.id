import Card from "../../components/Card";
import SectionPage from "../../components/SectionPage";
import allProjectList from "./allProjectsList";

const BsPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul>Bootstrap Projects</SectionPage.Judul>
      <SectionPage.Isi>
        <div className="card-container">
          {allProjectList
            .filter(({ type }) => type == "bootstrap")
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

export default BsPage;
