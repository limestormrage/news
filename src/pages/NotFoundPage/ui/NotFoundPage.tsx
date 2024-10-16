import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <PageWrapper className={classNames(styles.notFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </PageWrapper>
  );
};
