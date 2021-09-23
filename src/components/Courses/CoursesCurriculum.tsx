import React from "react";
import { Link } from "react-router-dom";

const CoursesCurriculum = ({ videos }) => {
  return (
    <div className="courses-curriculum">
      <h3>Course Videos</h3>
      {videos ? (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <Link
                to="/courses"
                className="d-flex justify-content-between align-items-center"
                onClick={(e) => e.preventDefault()}
              >
                <span className="courses-name">{video.name}</span>
                <div className="courses-meta">
                  <span className="status locked">
                    <i className="flaticon-password"></i>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Videos</h3>
      )}
    </div>
  );
};

export default CoursesCurriculum;