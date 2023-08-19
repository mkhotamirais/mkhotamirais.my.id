import Button from "../../components/Button";
import SectionPage from "../../components/SectionPage";

const Me = () => {
  return (
    <SectionPage>
      <SectionPage.Judul>Profil</SectionPage.Judul>
      <SectionPage.Isi>
        <div className="section" id="me-first">
          <h3>Mkhotami</h3>
          <p>
            There are only two things I want to master in my life, coding and
            english language. I think that if i master both of it, I can reach
            my world more wide. I will always develop my website, it means
            improving my code and english skill. If you find a lot of errors in
            this page then find a little one in the next pages, it means i
            improved my skill. Now, let us take a look at my monthly code story.
          </p>
          <Button
            className={
              "mt-5 bg-slate-600 text-white hover:bg-white hover:text-inherit"
            }
          >
            My Monthly Code Story
          </Button>
        </div>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default Me;
