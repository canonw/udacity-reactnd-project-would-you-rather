import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="ui container">
    <div className="ui two column centered grid">
      <div className="row"></div>
      <div className="column">
        <div className="ui items">
          <div className="item">
            <div className="content">
              <div className="header">404 Page Not Found.</div>{" "}
              <div className="header">
                <Link
                  to={{
                    pathname: "/",
                  }}
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;
