import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { BookmarkNotes } from "@escolalms/components/lib/components/organisms/BookmarkNotes/index";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Bookmarks = () => {
  const { t } = useTranslation();
  const { push } = useHistory();

  if (typeof window !== "undefined") {
    return null;
  }

  return (
    <ProfileLayout title={t("MyProfilePage.MyBookmarks")}>
      <BookmarkNotes
        onClickBookmark={(
          courseId: number,
          lessonId: number,
          topicId: number
        ) => push(`/course/${courseId}/${lessonId}/${topicId}`, null)}
        onDelete={() => toast.success(t<string>("Notifications.Deleted"))}
      />
    </ProfileLayout>
  );
};

export default Bookmarks;
