import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Auth/RequireAuth";
import AuthorizePage from "./pages/AuthorizePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
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
        <Route path="/login" element={<AuthorizePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
