import { NavLink, Outlet } from "react-router-dom";

const projectList = [
  "bootstrap",
  "materialize",
  "tailwind",
  "purecss",
  "hosting",
];

const AsideProjects = () => {
  return (
    <>
      <NavLink to="" className={"title-aside"}>
        <h1>Projects</h1>
      </NavLink>
      <aside>
        <AsidePage asideList={projectList} />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const AsidePage = ({ asideList }) => {
  return (
    <>
      <div className="aside-page">
        {asideList.map((item, i) => (
          <NavLink to={item} key={i}>
            {item}
          </NavLink>
        ))}
      </div>
    </>
  );
};
AsidePage.propTypes;

export default AsideProjects;
