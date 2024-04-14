import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>/</div>
    </div>
  );
};
