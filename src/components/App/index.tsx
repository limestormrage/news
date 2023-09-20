import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../../pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "../../theme/useTheme";

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
