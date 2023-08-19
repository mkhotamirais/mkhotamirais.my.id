import { NavLink, Outlet } from "react-router-dom";
import {
  backendList,
  basicList,
  cms,
  cssFw,
  database,
  frontendList,
  fullstack,
  hosting,
  notes,
  vcs,
  webAppTools,
} from "./asideHomeList";

const AsideBeranda = () => {
  return (
    <>
      <NavLink to="/" className={"title-aside"}>
        <h1>Home</h1>
      </NavLink>
      <aside>
        <NavLink to="basic">Basic</NavLink>
        <AsidePage asideList={basicList} />
        <NavLink to="frontEnd">Front-End</NavLink>
        <AsidePage asideList={frontendList} />
        <NavLink to="backEnd">Back-End</NavLink>
        <AsidePage asideList={backendList} />
        <NavLink to="cssFw">Css Framework</NavLink>
        <AsidePage asideList={cssFw} />
        <NavLink to="webAppTools">Web App Tools</NavLink>
        <AsidePage asideList={webAppTools} />
        <NavLink to="fullstack">fullstack</NavLink>
        <AsidePage asideList={fullstack} />
        <NavLink to="database">database</NavLink>
        <AsidePage asideList={database} />
        <NavLink to="vcs">vcs</NavLink>
        <AsidePage asideList={vcs} />
        <NavLink to="hosting">hosting</NavLink>
        <AsidePage asideList={hosting} />
        <NavLink to="cms">cms</NavLink>
        <AsidePage asideList={cms} />
        <NavLink to="notes">notes</NavLink>
        <AsidePage asideList={notes} />
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
          <NavLink to={item.name} key={i}>
            <item.icon /> {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};
AsidePage.propTypes;

export default AsideBeranda;
