import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import confirm from "../../animations/confirm.json";
import Lottie from "lottie-react";
// import Loading from "../../components/Loading";

const ConfirmEmail = () => {
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  useEffect(() => {
    const confirmEmail = async () => {
      try {
        setIsError(null);
        setIsSuccess(null);
        setIsLoading(true);
        const res = await api.post(`/auth/confirm-email/${token}`);
        setIsLoading(false);
        setIsSuccess(res.data.message);
      } catch (error) {
        setIsLoading(false);
        setIsError(error?.response?.data.message);
      }
    };
    if (token) {
      confirmEmail();
    }
  }, [token]);

  return (
    <div className="confirm-email d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1>Plant Diesase</h1>
      <div className="mt-5">
        {isLoading ? (
          <Lottie
            className="mx-auto "
            style={{
              width: "50%",
              height: "50%",
            }}
            animationData={confirm}
          />
        ) : null}
        {isError ? (
          <div className="text-danger fw-semibold fs-5">{isError}</div>
        ) : null}
        {isSuccess ? (
          <>
            <div className="mb-2 fw-semibold fs-5">{isSuccess}</div>
            <Link className="btn btn-primary" to="/auth/signin">
              Login
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ConfirmEmail;
