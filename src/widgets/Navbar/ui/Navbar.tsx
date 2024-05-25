import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenAuthModal}>
          {t("Войти")}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
    </div>
  );
};
