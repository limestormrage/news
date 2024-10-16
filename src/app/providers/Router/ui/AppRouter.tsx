import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <>{route.element}</>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
      </Suspense>
    </>
  );
};

export default memo(AppRouter);
