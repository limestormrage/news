import styles from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface IconProps {
  className?: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ Icon, className }: IconProps) => {
  return <Icon className={classNames(styles.icon, {}, [className])} />;
};
