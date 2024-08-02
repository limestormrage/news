import { getProfileReadOnly, profileActions, updateProfileData } from "entities/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";

export const ProfilePageHeader = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={styles.headerWrapper}>
      <Text title={t("Профиль")}></Text>
      {readOnly ? (
        <Button className={styles.editButton} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            className={styles.editButton}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("Отменить")}
          </Button>
          <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
            {t("Сохранить")}
          </Button>
        </>
      )}
    </div>
  );
};
