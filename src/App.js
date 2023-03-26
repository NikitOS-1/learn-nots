import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Auth/RequireAuth";
import AuthorizePage from "./pages/AuthorizePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import { fetchUserData } from "./redux/userDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData);
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/comp1" element={<Comp1 />} />
        <Route path="/comp2" element={<Comp2 />} />
        <Route path="/login" element={<AuthorizePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
