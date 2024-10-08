import styles from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../types/article";
import ListIcon from "shared/assets/icons/filter-list.svg";
import PlateIcon from "shared/assets/icons/filter-plate.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  changeView: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon
  },
  {
    view: ArticleView.PLATE,
    icon: PlateIcon
  }
];

export const ArticleViewSelector = ({ view, className, changeView }: ArticleViewSelectorProps) => {
  return (
    <div className={classNames("", {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
          onClick={() => changeView(viewType.view)}
        >
          <Icon
            Icon={viewType.icon}
            className={classNames("", { [styles.notSelectedIcon]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
};
