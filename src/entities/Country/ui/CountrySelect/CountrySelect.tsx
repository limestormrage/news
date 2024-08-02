import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";

const options = [
  { value: Country.Armenia, label: Country.Armenia },
  { value: Country.Belarus, label: Country.Belarus },
  { value: Country.Kazakhstan, label: Country.Kazakhstan },
  { value: Country.Russia, label: Country.Russia },
  { value: Country.Ukraina, label: Country.Ukraina }
];

interface CurrencySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  className?: string;
}

export const CountrySelect = memo(
  ({ value, onChange, readonly, className }: CurrencySelectProps) => {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Country);
        }
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите город")}
        options={options}
        currentValue={value}
        onChangeValue={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);

CountrySelect.displayName = "CountrySelect";
