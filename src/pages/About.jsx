import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          <div className="badge badge-info badge-lg mb-4">
            🔧 Under Construction
          </div>
          <div>
            <Link to="/" className="btn ">
              Go To Home
            </Link>
          </div>

          <h2 className="card-title text-2xl font-bold">
            About Page Is On The Way
          </h2>

          <p className="text-base-content/70 mt-2">
            We are working hard to share our story, mission, and values with
            you. This page will be available very soon.
          </p>

          <div className="mt-6 flex gap-2">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
