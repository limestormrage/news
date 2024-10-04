import styles from "./AddNewCommentForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getAddNewCommentText } from "../../model/selectors/addNewCommentSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addNewCommentActions, addNewCommentReducer } from "../../model/slice/addNewCommentSlice";
import { useCallback } from "react";
import {
  DynamicModuleLoader,
  ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddNewCommentFormProps {
  className?: string;
  onSendComment: (comment: string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer
};

const AddNewCommentForm = ({ className, onSendComment }: AddNewCommentFormProps) => {
  const { t } = useTranslation();
  const formText = useSelector(getAddNewCommentText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = () => {
    onSendComment(formText);
    onCommentTextChange("");
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.addNewCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          placeholder={t("Введите текст комментария")}
          value={formText}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t("Отправить")}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddNewCommentForm;
