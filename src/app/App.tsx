import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import { BugButton } from "./providers/ErrorBoundary/ui/BugButton";

const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <SideBar />
          <AppRouter />
          <BugButton />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
