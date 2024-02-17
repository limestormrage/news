import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppButton } from "shared/ui/AppButton/AppButton";
import styles from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.pageErrorWrapper, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <AppButton onClick={reloadPage}>{t("Перезагрузить страницу")}</AppButton>
    </div>
  );
};
