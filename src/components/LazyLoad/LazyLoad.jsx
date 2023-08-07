import { Link, Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

const LazyLoad = () => {
  return (
    <div>
      <header style={{ display: "flex" }}>
        <div style={{ padding: "10px" }}>
          <Link to={"home"}>Home</Link>
        </div>
        <div style={{ padding: "10px" }}>
          <Link to={"product"}>Product</Link>
        </div>
        <div style={{ padding: "10px" }}>
          <Link to={"about"}>About</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="home" element={<Page1 />} />
          <Route path="product" element={<Page2 />} />
          <Route path="about" element={<Page3 />} />
        </Routes>
      </main>
    </div>
  );
};
export default LazyLoad;
