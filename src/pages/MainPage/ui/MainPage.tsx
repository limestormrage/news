import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation("main");
  const [test, setTest] = useState("");

  const onChange = (value: string) => {
    setTest(value);
  };

  return (
    <div>
      {t("Главная страница")} <Input value={test} onChange={onChange} placeholder="Введите текст" />
    </div>
  );
};

export default MainPage;
