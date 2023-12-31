import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/chef-error.jpg";


const ErrorPage = () => {
  return (
    <div className="container-full page-container bg-dark  vh-100">
      <div className="text-center" >
        <img className="w-75" src={errorImg} alt="" />
      </div>
      <div className="mt-4">
        <h5 className="text-center error-text text-white fw-bold">
          {" "}
          Oops! Page Not Found
        </h5>
      </div>

      <div className="text-center text-success mt-4">
        <Link
          to="/"
          className="btn btn-danger px-5  py-3 font-weight-bold rounded-pill fw-bold"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
