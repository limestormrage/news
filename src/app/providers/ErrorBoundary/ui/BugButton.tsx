import { useEffect, useState } from "react";
import { AppButton } from "shared/ui/AppButton/AppButton";

//компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState<boolean>(false);

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <AppButton onClick={throwError}>Выбросить ошибку</AppButton>;
};
