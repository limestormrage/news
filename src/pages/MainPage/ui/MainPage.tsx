import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation("main");
  const [test, setTest] = useState("");

  const onChange = (value: string) => {
    setTest(value);
  };

  return (
    <PageWrapper>
      {t("Главная страница")} <Input value={test} onChange={onChange} placeholder="Введите текст" />
    </PageWrapper>
  );
};

export default MainPage;
