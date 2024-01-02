import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="page-content">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
