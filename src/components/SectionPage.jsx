import { HiOutlineExternalLink } from "react-icons/hi";

const SectionPage = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

const DaftarIsi = ({ contentList, title }) => {
  return (
    <div className="daftar-isi">
      <h3 className="daftar-isi-title">Content {title}</h3>
      {contentList.map((item, i) => (
        <a href={`#${i}`} key={i}>
          {item}
        </a>
      ))}
    </div>
  );
};

const Judul = ({ children, externalLink }) => (
  <a href={externalLink} target="blank">
    <h1 className="title-page">
      {children}
      {externalLink && (
        <HiOutlineExternalLink className="text-[1rem] self-start" />
      )}
    </h1>
  </a>
);

const Isi = ({ children }) => <div className="content-page">{children}</div>;

SectionPage.DaftarIsi = DaftarIsi;
SectionPage.Judul = Judul;
SectionPage.Isi = Isi;
SectionPage.propTypes;
Judul.propTypes;
Isi.propTypes;
DaftarIsi.propTypes;

export default SectionPage;
