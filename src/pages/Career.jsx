import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          <div className="badge badge-warning badge-lg mb-4">
            🚧 Work in Progress
          </div>
          <div>
            <Link to="/" className="btn ">
              Go To Home
            </Link>
          </div>

          <h2 className="card-title text-2xl font-bold">
            Careers Page Coming Soon
          </h2>

          <p className="text-base-content/70 mt-2">
            We are currently building this page to bring you exciting career
            opportunities. Stay tuned — something great is on the way!
          </p>

          <div className="mt-6 flex gap-2">
            <span className="loading loading-dots loading-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
