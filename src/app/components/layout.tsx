import Header from "./header";
import {CardGrid } from "./card";

const Layout = () => {
  return (
    <div className="layout">
      <Header title={"MarkDowm to Html"} />
      <main>
        <CardGrid/>
      </main>
    </div>
  );
};

export default Layout;
