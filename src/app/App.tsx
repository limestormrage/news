import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
