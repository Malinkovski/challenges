import React from "react";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div>
        <div className="loading-content">
{/*           <h4 className="loading">
            Loading <span>.</span><span>.</span><span>.</span>
          </h4> */}
            <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
