import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageNotFound = ({ history }) => (
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

PageNotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageNotFound;
