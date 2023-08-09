import { Link, Route, Routes } from "react-router-dom";
import "./Table.scss";
import Dashboard from "./Pages/Dashboard";
import StoryTable from "./Pages/StoryTable";
import Settings from "./Pages/Settings";

const Table = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">Logo</div>
      </header>
      <main className="main">
        <nav className="nav">
          <div className="nav-item">
            <Link to={"/"}>Dashboard</Link>
          </div>
          <div className="nav-item">
            <Link to={"/story-teble"}>Story table</Link>
          </div>
          <div className="nav-item">
            <Link to={"/settings"}>Settings</Link>
          </div>
        </nav>
        <section className="section">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="story-teble" element={<StoryTable />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </>
  );
};
export default Table;
