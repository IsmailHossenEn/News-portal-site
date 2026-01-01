import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          <div className="text-6xl font-extrabold text-error mb-2">404</div>

          <h2 className="card-title text-2xl font-bold">Page Not Found</h2>

          <p className="text-base-content/70 mt-2">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Please check the URL or go back to the homepage.
          </p>

          <div className="card-actions mt-6">
            <Link to="/" className="btn btn-primary">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
