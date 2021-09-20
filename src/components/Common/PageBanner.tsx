import React from "react";
import { Link } from "react-router-dom";

const PageBanner: React.FC<{
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}> = ({ pageTitle, homePageUrl, homePageText, activePageText }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <ul>
            <li>
              <Link to={homePageUrl}>{homePageText}</Link>
            </li>
            <li className="active">{activePageText}</li>
          </ul>

          <h2>{pageTitle}</h2>
        </div>
      </div>

      <div className="shape9">
        <img src="/Front/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default PageBanner;
