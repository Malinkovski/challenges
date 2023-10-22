import React from "react";
import { Link } from "react-router-dom";

const Eror404Page = () => {
  return (
    <div className="error-page">
      <div >
        <div>
          <h1>ERROR 404.</h1>

          <h2>PAGE NOT FOUND</h2>
        </div>
        <div>
          <Link to="/home">
            <strong>Go back to main page</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Eror404Page;
