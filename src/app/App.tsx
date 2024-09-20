import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Suspense, useEffect } from "react";
import { BugButton } from "./providers/ErrorBoundary/ui/BugButton";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={`app`}>
      <Suspense fallback="">
        <Navbar />

        <div className="page-content">
          <SideBar />
          {inited && <AppRouter />}
          <BugButton />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
