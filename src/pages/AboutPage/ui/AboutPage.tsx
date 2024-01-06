import { useTranslation } from "react-i18next";

const AboutPage = (): JSX.Element => {
  const {t} = useTranslation('about');

  return <p>{t('О Сайте')}</p>;
};

export default AboutPage;
