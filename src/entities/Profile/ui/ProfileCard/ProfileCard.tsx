import { getProfileDate } from "entities/Profile/model/selectors/getProfileDate/getProfileDate";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileDate);
  // const error = useSelector(getProfileError);
  // const isLoadingData = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.cardWrapper, {}, [className])}>
      <div className={styles.cardHeader}>
        <Text title={t("Профиль")}></Text>
        <Button className={styles.editButton} theme={ButtonTheme.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={styles.cardData}>
        <Input className={styles.cardInput} value={data?.first} placeholder={t("Ваше имя")} />
        <Input
          className={styles.cardInput}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
        />
      </div>
    </div>
  );
};
