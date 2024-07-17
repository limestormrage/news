import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenAuthModal}>
          {t("Войти")}
        </Button>
      </div>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />}
    </div>
  );
});

Navbar.displayName = "Navbar";
