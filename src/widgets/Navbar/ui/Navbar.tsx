import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleAuthModal}>
          {t("Войти")}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleAuthModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>тест</p>
      </Modal>
    </div>
  );
};
