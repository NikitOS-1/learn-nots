import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Page1 from "./Pages/Page1";
// import Page2 from "./Pages/Page2";
// import Page3 from "./Pages/Page3";

const Page1 = lazy(() => import("./Pages/Page1"));
const Page2 = lazy(() => import("./Pages/Page2"));
const Page3 = lazy(() => import("./Pages/Page3"));

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
          <Route
            path="home"
            element={
              <Suspense fallback={"Loading..."}>
                <Page1 />
              </Suspense>
            }
          />
          <Route
            path="product"
            element={
              <Suspense fallback={"Loading..."}>
                <Page2 />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={"Loading..."}>
                <Page3 />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
};
export default LazyLoad;
