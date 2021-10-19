import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '@escolalms/sdk/lib';
export const PageCard: React.FC<{ page: API.Page }> = ({ page }) => {
  return (
    <div className="single-courses-box">
      <div className="courses-content">
        <h3>
          <Link to={`/page/${page.slug}`}>{page.title}</Link>
        </h3>

        <ul className="courses-box-footer d-flex justify-content-between align-items-center"></ul>
      </div>
    </div>
  );
};

export default PageCard;