import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { BugButton } from "./providers/ErrorBoundary/ui/BugButton";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={`app`}>
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
