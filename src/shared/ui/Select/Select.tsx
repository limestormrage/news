import { ChangeEvent, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOption<T>[];
  currentValue?: T;
  onChangeValue?: (val: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, currentValue, onChangeValue, readonly } = props;
  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeValue) {
      onChangeValue(e.target.value as T);
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
};
