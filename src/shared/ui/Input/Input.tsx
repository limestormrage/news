import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onBlurInput = () => setIsFocused(false);
  const onFocusInput = () => setIsFocused(true);
  const onSelectInput = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      // inputRef.current?.focus();
      console.log(inputRef);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onSelect={onSelectInput}
          {...otherProps}
        />
        {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
