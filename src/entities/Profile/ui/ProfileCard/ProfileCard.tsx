import { Profile } from "../../model/types/profile";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";

interface ProfileCardProps {
  className?: string;
  data?: Profile | null;
  isLoading?: boolean;
  error?: string | null;
  readonly?: boolean;
  onChangeLastName?: (value: string) => void;
  onChangeFirstName?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUserName?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUserName,
  onChangeCountry,
  onChangeCurrency
}: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={classNames(styles.cardWrapper, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.cardWrapper, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly
  };

  return (
    <div className={classNames(styles.cardWrapper, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} size={150} />
          </div>
        )}
        <Input
          className={styles.cardInput}
          value={data?.first}
          placeholder={t("Ваше имя")}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          className={styles.cardInput}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          className={styles.cardInput}
          value={data?.age}
          placeholder={t("Ваша возраст")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={styles.cardInput}
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={styles.cardInput}
          value={data?.username}
          placeholder={t("Имя пользователя")}
          onChange={onChangeUserName}
          readonly={readonly}
        />
        <Input
          className={styles.cardInput}
          value={data?.avatar}
          placeholder={t("Ссылка на аватар")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.cardInput}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.cardInput}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
