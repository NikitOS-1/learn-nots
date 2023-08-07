import { useSelector } from "react-redux";
import "./App.style.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const checked = useSelector((state) => state.theme.theme);

  return (
    <div className={!checked ? "night" : "day"}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
