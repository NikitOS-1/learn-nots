import { Link, Route, Routes } from "react-router-dom";
import "./Table.scss";
import Dashboard from "./Pages/Dashboard/Dashboard";
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
          <Link to={"/"} className="nav-item">
            Dashboard
          </Link>
          <Link to={"/story-teble"} className="nav-item">
            Story table
          </Link>
          <Link to={"/settings"} className="nav-item">
            Settings
          </Link>
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
