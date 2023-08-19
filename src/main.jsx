import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./script.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AsideLearnReact from "./layouts/AsideLearnReact";
import AsideHome from "./layouts/AsideHome";
import Home from "./pages/home/Home";
import BasicPage from "./pages/home/basic/BasicPage";
import BackEnd from "./pages/home/backend/BackEnd";
import HtmlPage from "./pages/home/basic/HtmlPage";
import FrontEnd from "./pages/home/frontend/FrontEnd";
import CssPage from "./pages/home/basic/CssPage";
import JavascriptPage from "./pages/home/basic/JavascriptPage";
import CssFw from "./pages/home/cssFw/cssFw";
import WebAppTools from "./pages/home/webAppTools/WebAppTools";
import Fullstack from "./pages/home/fullStack/Fullstack";
import Database from "./pages/home/database/Database";
import Vcs from "./pages/home/vcs/Vcs";
import Hosting from "./pages/home/hosting/Hosting";
import Cms from "./pages/home/cms/Cms";
import AngularjsPage from "./pages/home/frontend/AngularjsPage";
import ReactjsPage from "./pages/home/frontend/ReactjsPage";
import VuejsPage from "./pages/home/frontend/VuejsPage";
import NodejsPage from "./pages/home/backend/NodejsPage";
import NpmPage from "./pages/home/backend/NpmPage";
import SassPage from "./pages/home/cssFw/SassPage";
import BulmaPage from "./pages/home/cssFw/BulmaPage";
import MaterializePage from "./pages/home/cssFw/MaterializePage";
import TailwindPage from "./pages/home/cssFw/TailwindPage";
import BootstrapPage from "./pages/home/cssFw/BootstrapPage";
import ExpressjsPage from "./pages/home/backend/ExpressjsPage";
import Notes from "./pages/home/notes/Notes";
import Akhlak from "./pages/home/notes/Akhlak";
import CodepenPage from "./pages/home/webAppTools/CodepenPage";
import FigmaPage from "./pages/home/webAppTools/FigmaPage";
import PhpPage from "./pages/home/fullStack/PhpPage";
import LaravelPage from "./pages/home/fullStack/LaravelPage";
import CodeigniterPage from "./pages/home/fullStack/CodeigniterPage";
import BabeljsPage from "./pages/home/fullStack/BabeljsPage";
import JqueryPage from "./pages/home/fullStack/JqueryPage";
import AlpinejsPage from "./pages/home/fullStack/AlpinejsPage";
import TypescriptPage from "./pages/home/fullStack/TypescriptPage";
import MongodbPage from "./pages/home/database/MongodbPage";
import MysqlPage from "./pages/home/database/MysqlPage";
import GitPage from "./pages/home/vcs/GitPage";
import GithubPage from "./pages/home/vcs/GithubPage";
import GitlabPage from "./pages/home/vcs/GitlabPage";
import BitbucketPage from "./pages/home/vcs/BitbucketPage";
import NiagahosterPage from "./pages/home/hosting/NiagahosterPage";
import RumahwebPage from "./pages/home/hosting/RumahwebPage";
import WordpressPage from "./pages/home/cms/WordpressPage";
import JoomlaPage from "./pages/home/cms/JoomlaPage";
import AsideProjects from "./layouts/AsideProjects";
import AsideMe from "./layouts/AsideMe";
import Me from "./pages/me/Me";
import LearnReact from "./pages/learnReact/LearnReact";
import UseStatePage from "./pages/learnReact/hooks/UseStatePage";
import UseRefPage from "./pages/learnReact/hooks/UseRefPage";
import UseEffectPage from "./pages/learnReact/hooks/UseEffectPage";
import AllProjects from "./pages/projects/AllProjects";
import Hooks from "./pages/learnReact/hooks/Hooks";
import BsPage from "./pages/projects/BsPage";
import MtrzPage from "./pages/projects/MtrzPage";
import TwPage from "./pages/projects/TwPage";
import PurecssPage from "./pages/projects/PurecssPage";
import HostingProjects from "./pages/projects/HostingProject";
import August2023 from "./pages/me/August2023";
import September2023 from "./pages/me/September2023";
import Octover2023 from "./pages/me/October2023";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<AsideHome />}>
        <Route path="" element={<Home />} />
        {/* basic */}
        <Route path="basic" element={<BasicPage />} />
        <Route path="html" element={<HtmlPage />} />
        <Route path="css" element={<CssPage />} />
        <Route path="javascript" element={<JavascriptPage />} />
        {/* front-end */}
        <Route path="frontEnd" element={<FrontEnd />} />
        <Route path="angularjs" element={<AngularjsPage />} />
        <Route path="reactjs" element={<ReactjsPage />} />
        <Route path="vuejs" element={<VuejsPage />} />
        {/* back-end */}
        <Route path="backEnd" element={<BackEnd />} />
        <Route path="nodejs" element={<NodejsPage />} />
        <Route path="npm" element={<NpmPage />} />
        <Route path="expressjs" element={<ExpressjsPage />} />
        {/* css framework */}
        <Route path="cssFw" element={<CssFw />} />
        <Route path="bootstrap" element={<BootstrapPage />} />
        <Route path="tailwind" element={<TailwindPage />} />
        <Route path="materialize" element={<MaterializePage />} />
        <Route path="bulma" element={<BulmaPage />} />
        <Route path="sass" element={<SassPage />} />
        {/* web app tools */}
        <Route path="webAppTools" element={<WebAppTools />} />
        <Route path="codepen" element={<CodepenPage />} />
        <Route path="figma" element={<FigmaPage />} />
        {/* fullstack */}
        <Route path="fullstack" element={<Fullstack />} />
        <Route path="php" element={<PhpPage />} />
        <Route path="laravel" element={<LaravelPage />} />
        <Route path="codeigniter" element={<CodeigniterPage />} />
        <Route path="babeljs" element={<BabeljsPage />} />
        <Route path="jquery" element={<JqueryPage />} />
        <Route path="alpinejs" element={<AlpinejsPage />} />
        <Route path="typescript" element={<TypescriptPage />} />
        {/* database */}
        <Route path="database" element={<Database />} />
        <Route path="mysql" element={<MysqlPage />} />
        <Route path="mongodb" element={<MongodbPage />} />
        {/* vcs */}
        <Route path="vcs" element={<Vcs />} />
        <Route path="git" element={<GitPage />} />
        <Route path="github" element={<GithubPage />} />
        <Route path="gitlab" element={<GitlabPage />} />
        <Route path="bitbucket" element={<BitbucketPage />} />
        {/* hosting */}
        <Route path="hosting" element={<Hosting />} />
        <Route path="niagahoster" element={<NiagahosterPage />} />
        <Route path="rumahweb" element={<RumahwebPage />} />
        {/* cms */}
        <Route path="cms" element={<Cms />} />
        <Route path="wordpress" element={<WordpressPage />} />
        <Route path="joomla" element={<JoomlaPage />} />
        {/* notes */}
        <Route path="notes" element={<Notes />} />
        <Route path="akhlak" element={<Akhlak />} />
      </Route>
      <Route path="learnReact" element={<AsideLearnReact />}>
        <Route path="" element={<LearnReact />} />
        {/* Hooks */}
        <Route path="hooks" element={<Hooks />} />
        <Route path="useState" element={<UseStatePage />} />
        <Route path="useRef" element={<UseRefPage />} />
        <Route path="useEffect" element={<UseEffectPage />} />
      </Route>
      <Route path="projects" element={<AsideProjects />}>
        <Route path="" element={<AllProjects />} />
        <Route path="bootstrap" element={<BsPage />} />
        <Route path="materialize" element={<MtrzPage />} />
        <Route path="tailwind" element={<TwPage />} />
        <Route path="purecss" element={<PurecssPage />} />
        <Route path="hosting" element={<HostingProjects />} />
      </Route>
      <Route path="me" element={<AsideMe />}>
        <Route path="" element={<Me />} />
        <Route path="august2023" element={<August2023 />} />
        <Route path="september2023" element={<September2023 />} />
        <Route path="october2023" element={<Octover2023 />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
