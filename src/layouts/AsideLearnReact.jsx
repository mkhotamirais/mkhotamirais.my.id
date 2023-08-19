import { NavLink, Outlet } from "react-router-dom";

const hookList = ["useState", "useRef", "useEffect"];

const AsideLearnReact = () => {
  return (
    <>
      <NavLink to="" className={"title-aside"}>
        <h1>Learn React</h1>
      </NavLink>
      <aside>
        <NavLink to="hooks">Hooks</NavLink>
        <AsidePage asideList={hookList} />
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

export default AsideLearnReact;
