import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError
} from "entities/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoadingData = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный город"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении")
  };

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );
  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value: string) => {
      if (/^\d*$/.test(value)) {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
      }
    },
    [dispatch]
  );
  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency: currency }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country: country }));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((error) => (
            <Text theme={TextTheme.ERROR} text={validateErrorTranslates[error]} key={error} />
          ))}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoadingData}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUserName={onChangeUserName}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
