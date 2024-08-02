import { ChangeEvent, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  currentValue?: string;
  onChangeValue?: (val: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, currentValue, onChangeValue, readonly } = props;
  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeValue) {
      onChangeValue(e.target.value);
    }
  };

  const optionsList = useMemo(() => {
    return options.map(({ label, value }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(styles.selectWrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        className={styles.select}
        value={currentValue}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = "Select";
