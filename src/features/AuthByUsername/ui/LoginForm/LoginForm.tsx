import { loginActions } from "../../model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (name: string) => {
      dispatch(loginActions.setUsername(name));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );
  const onSubmitLoginForm = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text theme={TextTheme.ERROR} text={t("Не верный логин или пароль")} />}
      <Input
        className={styles.input}
        placeholder={t("Введите имя")}
        autoFocus
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        className={styles.input}
        placeholder={t("Введите пароль")}
        onChange={handleChangePassword}
        value={password}
      />
      <Button
        className={styles.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onSubmitLoginForm}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
