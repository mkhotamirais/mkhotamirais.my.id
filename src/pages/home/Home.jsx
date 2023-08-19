import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SectionPage from "../../components/SectionPage";
import { FiArrowDown } from "react-icons/fi";
import SectionContent from "../../components/SectionContent";

const Beranda = () => {
  return (
    <SectionPage>
      <SectionPage.Judul>Home</SectionPage.Judul>
      <SectionPage.Isi>
        <SectionContent title="Hello World" id="hello-world">
          <div className="text-6xl mt-8 mb-6">My name is Khotami</div>
          <div className="text-2xl mb-6 text-slate-700">
            I am a Web Developer
          </div>
          <a href="#about-me" className="group">
            <Button className={""}>
              About Me{" "}
              <FiArrowDown className="inline-block duration-300 group-hover:animate-bounce" />
            </Button>
          </a>
          <Link to="projects">
            <Button className={"mt-6 ml-2"}>My Projects</Button>
          </Link>
          <Link to="basic">
            <Button
              className={
                "mt-6 bg-slate-700 text-white hover:bg-white hover:text-slate-800 ml-2"
              }
            >
              Start learning
            </Button>
          </Link>
        </SectionContent>
        <SectionContent
          title="About Me"
          id="about-me"
          className={"scroll-mt-20"}
        >
          <p className="">
            Hello my name is m khotami rais, I am still learning to be an expert
            web developer, I learn reactjs recently. this is my first reactjs
            project that deployed to a paid web server.
          </p>
          <Link to="me">
            <Button className={"mt-5"}>More about me</Button>
          </Link>
        </SectionContent>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default Beranda;
