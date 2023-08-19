import { TbBrandJavascript } from "react-icons/tb";
import SectionPage from "../../../components/SectionPage";
import SectionContent from "../../../components/SectionContent";
const daftarIsi = [
  "introduction",
  "basic",
  "function",
  "object",
  "class",
  "dom and bom",
];
const topTitle = "Javascript";
const JavascriptPage = () => {
  return (
    <SectionPage>
      <SectionPage.Judul
        externalLink={"https://www.w3schools.com/js/default.asp"}
      >
        <TbBrandJavascript /> {topTitle}
      </SectionPage.Judul>
      <SectionPage.DaftarIsi contentList={daftarIsi} title={topTitle} />
      <SectionPage.Isi>
        <SectionContent title="introduction" id={0}>
          <p>
            Basic concept of programming: variable, data type, loop, condition,
            array, function, object. Programming language bridges between hign
            level language or human language and low level language or machine
            language / assembly such as cpu central processing unit. Program is
            a set of instruction for computer. The computer is not smart but
            obedient, follows eather righ instruction or false, so it must be
            right. Compiler vs interpreter: compiler (invisible source code,
            faster, ready to run) but (not cross platform, not flexible and need
            more steps) such as: c, c++, objective-c. Interperter (cross
            platform, flexible, easy to test) but (need interpreter, slower,
            hard to access source code) such as: javascript, php; hybrid java,
            vb.net, python. Why learn javascript: free, only need browser
            without installation, untyped means no need to define data tipe for
            each variable, interpreted can be as a client-side (frontend):
            native javascript / vanilla javascript; jquery; angularjs, react,
            ember etc. or Server-side (backend) development: nodejs, expressjs
            Another function: Browser extension/Add-on; Desktop applications;
            Mobile app development; IoT & robotics; JSON history later
          </p>
        </SectionContent>
        <SectionContent title="basic" id={1}>
          <p>
            You need to know these keys and operator: var, let, const, var
            shorthand, console (.log, .info, .error, .warn .table); ternary,
            nullish_coalescing, optionalChaining, operator: arithmetic,
            assignment, comparison, logical, conditional(if, while, switch case;
            type: typeof); data type: number (int, float), string, boolean,
            undefined, null, symbol, object (array, function, date), falsy,
            truthy, logic poerator on non boolean: OR read truthy value from
            right: AND read falsy from right;
          </p>
        </SectionContent>
        <SectionContent title="function" id={2}>
          <p>halo</p>
        </SectionContent>
        <SectionContent title="object" id={3}>
          <p>halo</p>
        </SectionContent>
        <SectionContent title="class" id={4}>
          <p>halo</p>
        </SectionContent>
        <SectionContent title="dom and bom" id={5}>
          <p>halo</p>
        </SectionContent>
      </SectionPage.Isi>
    </SectionPage>
  );
};

export default JavascriptPage;
