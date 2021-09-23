import React, { useContext, useEffect, useMemo, useState } from "react";
import PageBanner from "../../../components/SingleCoursesTwo/PageBanner";
import CoursesDetailsSidebar from "../../../components/SingleCoursesTwo/CoursesDetailsSidebar";
import { Link, useParams } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import Loader from "../../../components/Preloader";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import Image from "@escolalms/connector/lib/components/Image";
import { API } from "@escolalms/connector/lib";
import { useTranslation } from "react-i18next";
import Layout from "../../../components/_App/Layout";
import CourseProgramPreview from "../../../components/Course/CourseProgramPreview";

export const CourseProgramList: React.FC<{
  program: API.Lesson[];
  onPreview?: (topic: API.Topic) => void;
}> = ({ program, onPreview = null }) => {
  const { t } = useTranslation();

  return (
    <div className="courses-curriculum">
      {program.map((lesson, lesson_index) => {
        return (
          <React.Fragment key={lesson.id}>
            <h3 className="d-flex justify-content-between align-items-center">
              <span>
                <small>{lesson_index + 1}. </small> {lesson.title}
              </span>
              <div className="courses-meta">
                {lesson.duration && (
                  <span className="duration">{lesson.duration}</span>
                )}
              </div>
            </h3>
            <ul>
              {lesson.topics.map((topic, topic_index) => {
                return (
                  <li key={topic.id}>
                    <div className="d-flex justify-content-between align-items-center anchor">
                      <span className="courses-name">
                        <small>
                          {lesson_index + 1}.{topic_index + 1}{" "}
                        </small>
                        {topic.title}
                      </span>
                      <div className="courses-meta">
                        <span className="questions">
                          {t(topic.topicable_type.split("\\").pop())}
                        </span>
                        {topic.preview ? (
                          <span
                            className="status preview"
                            onClick={(e) => {
                              e.preventDefault();
                              onPreview && onPreview(topic);
                            }}
                          >
                            {t("Preview")}
                          </span>
                        ) : (
                          <span className="status locked">
                            <i className="flaticon-password"></i>
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const CoursePriceButton: React.FC<{ course: API.Course }> = ({ course }) => {
  const { t } = useTranslation();

  const { settings, addToCart, cart, user, progress, fetchProgress } =
    useContext(EscolaLMSContext);

  const { id } = course;

  const courseInCart = useMemo(() => {
    return cart.value.items.some((item) => Number(item.id) === Number(id));
  }, [id, cart]);

  useEffect(() => {
    user && user.value && fetchProgress();
  }, [user]);

  const userOwnThisCourse = useMemo(() => {
    return (
      progress.value &&
      progress.value.findIndex((item) => item.course.id === id) !== -1
    );
  }, [progress, id]);

  const priceLiteral = useMemo(() => {
    return course.base_price === 0
      ? t("FREE")
      : `${settings?.currencies?.default} ${(course.base_price / 100).toFixed(
          2
        )}`;
  }, [course, settings]);

  return (
    <div className="courses-price">
      {!courseInCart && <div className="price">{priceLiteral}</div>}

      {userOwnThisCourse ? (
        <Link to={`/course/${course.id}`} className="default-btn">
          <i className="flaticon-user"></i> {t("Attend to Course")}{" "}
          <span></span>
        </Link>
      ) : courseInCart ? (
        <Link to={`/cart`} className="default-btn full-width">
          <i className="flaticon-shopping-cart"></i>
          {t("Checkout Course")} <small>{priceLiteral}</small> <span></span>
        </Link>
      ) : user.value ? (
        <button
          className="default-btn"
          disabled={cart.loading}
          onClick={() => addToCart(course.id)}
        >
          <i className="flaticon-shopping-cart"></i> {t("Buy Course")}{" "}
          <span></span>
        </button>
      ) : (
        <Link to={`/authentication`} className="default-btn">
          <i className="flaticon-shopping-cart"></i>{" "}
          <small>{t("Login to buy")}</small> <span></span>
        </Link>
      )}

      {course.base_price === 0 && (
        <Link
          to={`/courses/preview/${course.id}`}
          className="default-btn full-width"
        >
          <i className="flaticon-user"></i> {t("Preview course for free")}{" "}
          <span></span>
        </Link>
      )}
    </div>
  );
};

const SingleCourses = ({ pageProps }) => {
  const { t } = useTranslation();

  const { id } = useParams();

  const { course, fetchCourse, fetchCart, user } = useContext(EscolaLMSContext);

  const [previewTopic, setPreviewTopic] = useState<API.Topic>();

  useEffect(() => {
    if (id) {
      fetchCourse(Number(id));
    }
  }, [id, fetchCourse]);

  useEffect(() => {
    user.value && fetchCart();
  }, [user]);

  if (course.loading || !course.value) {
    return <Loader />;
  }

  if (course.error) {
    return <pre>{course.error.message}</pre>;
  }

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle={course.value.title}
          subtitle={course.value.subtitle}
          homePageUrl="/"
          homePageText="Home"
          innerPageUrl={`/courses`}
          innerPageText={t("Courses")}
          activePageText={course.value.title}
        />

        {previewTopic && (
          <CourseProgramPreview
            topic={previewTopic}
            onClose={() => {
              setPreviewTopic(null);
            }}
          />
        )}

        <div className="courses-details-area ptb-100">
          <div className="container">
            <div className="courses-details-header">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="courses-meta">
                    <ul>
                      {course.value.categories.length > 0 && (
                        <li>
                          <i className="bx bx-folder-open"></i>
                          <span>{t("Category")}</span>

                          {course.value.categories.map((category) => (
                            <Link
                              to={`/courses?category_id=${category.id}`}
                              key={category.id}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </li>
                      )}
                      {course.value.users_count > 0 && (
                        <li>
                          <i className="bx bx-group"></i>
                          <span>
                            {t("StudentsEnrolled", {
                              count: course.value.users_count,
                            })}
                          </span>
                          <Link to="#">{course.value.users_count}</Link>
                        </li>
                      )}
                      <li>
                        <i className="bx bx-calendar"></i>
                        <span>{t("Last Updated")}</span>
                        <Link to="#">
                          {format(
                            new Date(course.value.updated_at),
                            "dd/MM/yyyy"
                          )}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <CoursePriceButton course={course.value} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="courses-details-image-style-two text-center">
                  <Image
                    path={course.value.image_path}
                    srcSizes={[790 * 0.5, 790, 2 * 790]}
                  />
                </div>

                <div className="courses-details-desc-style-two">
                  <h3>{t("Summary")}</h3>
                  <ReactMarkdown>{course.value.summary}</ReactMarkdown>

                  <h3>{t("Course Program")}</h3>
                  <CourseProgramList
                    program={course.value.lessons}
                    onPreview={(topic) => setPreviewTopic(topic)}
                  />

                  <h3>{t("Description")}</h3>
                  <ReactMarkdown>{course.value.description}</ReactMarkdown>

                  <h3>{t("Meet Your Instructors")}</h3>
                  <div className="courses-author">
                    <div className="author-profile-header"></div>
                    <div className="author-profile">
                      <Link to={`/tutors/${course.value.author.id}`}>
                        <div className="author-profile-title">
                          {course.value.author?.path_avatar && (
                            <Image
                              path={course.value.author?.path_avatar}
                              className="shadow-sm rounded-circle"
                              srcSizes={[94, 94 * 2]}
                            />
                          )}
                          <div className="author-profile-title-details">
                            <div className="author-profile-details">
                              <h4>
                                {course.value.author.first_name}{" "}
                                {course.value.author.last_name}
                              </h4>
                              <span className="d-block">Tutor</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="bio">
                        <ReactMarkdown>
                          {course.value.author?.bio}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <CoursesDetailsSidebar course={course.value} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default SingleCourses;