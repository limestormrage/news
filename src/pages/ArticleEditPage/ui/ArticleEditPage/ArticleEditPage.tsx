import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-edit");

  const isEdit = Boolean(id);
  return (
    <PageWrapper className={classNames("", {}, [className])}>
      {isEdit ? t("Редактирование статьи с ID = ") + id : t("Создание новой статьи")}
    </PageWrapper>
  );
};

export default ArticleEditPage;
