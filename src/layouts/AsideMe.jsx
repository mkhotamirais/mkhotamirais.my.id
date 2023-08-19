import { NavLink, Outlet } from "react-router-dom";

const monthlyList = ["august2023", "september2023", "october2023"];

const AsideMe = () => {
  return (
    <>
      <NavLink to="" className={"title-aside"}>
        <h1>Profil</h1>
      </NavLink>
      <aside>
        <AsidePage asideList={monthlyList} />
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

export default AsideMe;
