import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";

const options = [
  { value: Currency.RUB, label: Currency.RUB },
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.USD, label: Currency.USD }
];

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  className?: string;
}

export const CurrencySelect = memo(
  ({ value, onChange, readonly, className }: CurrencySelectProps) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Currency);
        }
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите валюту")}
        options={options}
        currentValue={value}
        onChangeValue={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);

CurrencySelect.displayName = "CurrencySelect";
