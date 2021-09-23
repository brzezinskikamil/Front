import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Image from "@escolalms/connector/lib/components/Image";
import { API } from "@escolalms/connector/lib";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import { Spinner } from "reactstrap";
import ModalVideo from "react-modal-video";

const CoursesDetailsSidebarTwo: React.FC<{ course: API.Course }> = ({
  course,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();

  const { cart, addToCart } = useContext(EscolaLMSContext);

  return (
    <div className="courses-sidebar-sticky">
      {course.video_url && (
        <ModalVideo
          channel="custom"
          isOpen={!isOpen}
          url={course.video_url}
          onClose={() => setIsOpen(!isOpen)}
        />
      )}

      <div className="courses-details-info">
        <div className="image">
          {course.image_path && (
            <Image path={course.image_path} srcSizes={[356, 356 * 2]} />
          )}

          {course.video_url && (
            <React.Fragment>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                className="link-btn popup-youtube"
              ></div>

              <div className="content">
                <i className="flaticon-play"></i>
                <span>{t("Course Preview")}</span>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="courses-sidebar-information">
        <ul className="info">
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-teacher"></i> {t("Tutor")}
              </span>
              <Link to={`/tutors/${course.author.id}`}>
                {course.author?.first_name} {course.author?.last_name}
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time"></i> {t("Duration")}
              </span>
              {course.duration}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-learning"></i>{" "}
                {t("Lesson", { count: course.lessons.length })}
              </span>
              {course.lessons.length}
            </div>
          </li>
          {course.users_count > 0 && (
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <i className="flaticon-web"></i>{" "}
                  {t("Student", { count: course.users_count })}
                </span>
                {course.users_count}
              </div>
            </li>
          )}
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-html"></i> {t("Language")}
              </span>
              {course.language}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-caption"></i> {t("Level")}
              </span>
              {course.level}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-lock"></i> {t("Access")}
              </span>
              {t("Lifetime")}
            </div>
          </li>
        </ul>

        <div className="btn-box">
          {course.base_price === 0 ? (
            <Link to={`/course/${course.id}`} className="default-btn">
              <i className="flaticon-user"></i> {t("Attend to Course")}{" "}
              <span></span>
            </Link>
          ) : (
            <button
              onClick={() => addToCart(course.id)}
              className="default-btn"
            >
              <i className="flaticon-shopping-cart"></i> {t("Add to Cart")}{" "}
              <span></span>
              {cart.loading ? <Spinner color="success" /> : ""}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsSidebarTwo;