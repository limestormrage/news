import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main');

  return (
    <p>
      {t('Главная страница')}
    </p>
  );
};

export default MainPage;
