import React, { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { notifyError, notifyWarning } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { saveImage } from "../../features/user/userSlice";

const Detect = () => {
  const { token } = useSelector((state) => state.auth);
  const [isProccessed, setIsProccessed] = useState({});
  const [inProccessing, setInProccessing] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!imgPreview) {
      return notifyWarning("Please select image");
    }
    try {
      setIsProccessed({});
      const formData = new FormData();
      formData.append("file", imgPreview[0]);
      setInProccessing(true);
      const response = await api.post(
        "https://plant-model-4ltv.onrender.com/predict",
        formData
      );
      setIsProccessed(response.data);
      setInProccessing(false);
    } catch (error) {
      setInProccessing(false);
      notifyError(error.response.data.message);
    }
  };

  const onSave = async () => {
    const formData = new FormData();
    formData.append("file", imgPreview[0]);
    dispatch(saveImage(formData));
  };

  function showPreview(event) {
    if (event.target.files.length > 0) {
      setImgPreview(event.target.files);
    }
  }

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="img-upload-box d-flex align-items-center justify-content-center">
        {inProccessing ? null : (
          <label
            role="button"
            htmlFor="imgUpload"
            className="fs-5 fw-bold text-primary"
          >
            <BsFillCloudUploadFill className="me-2 fs-4" />
            Upload Your Image
          </label>
        )}
        <input
          onChange={showPreview}
          id="imgUpload"
          name="imgUpload"
          type="file"
          className="d-none"
        />
        {imgPreview ? (
          <img
            id="img-preview"
            src={URL.createObjectURL(imgPreview[0])}
            className={`w-100 h-100 position-absolute ${
              inProccessing ? "loading" : ""
            }`}
            style={{ objectFit: "contain" }}
          />
        ) : null}
      </div>
      {Object.keys(isProccessed).length > 0 ? (
        <>
          <span className=" fs-5 text-center d-block">
            Type :
            <span className="text-primary fw-semibold fs-6 ms-2">
              {isProccessed.class.split("_")[0]}
            </span>
          </span>
          <span className=" fs-5 text-center d-block">
            Diagnose :
            <span className="text-primary fw-semibold fs-6 ms-2">
              {isProccessed.class.split("__")[1].replace(/_/g, " ")}
            </span>
          </span>
          <span className=" fs-5 text-center d-block">
            Confidence :
            <span className="text-primary fw-semibold fs-6 ms-2">
              {isProccessed.confidence}
            </span>
          </span>
        </>
      ) : (
        ""
      )}
      <div className="d-flex mt-3 align-items-center gap-3">
        <button
          disabled={inProccessing ? true : false}
          type="submit"
          className=" btn btn-primary text-white"
        >
          Detect Now
        </button>
        {token && Object.values(isProccessed).length > 0 ? (
          <button onClick={() => onSave()} className="btn btn-secondary">
            Save to profile
          </button>
        ) : null}
        <label
          aria-disabled={inProccessing ? true : false}
          role="button"
          htmlFor="imgUpload"
          className=" btn btn-outline-primary"
        >
          <BsFillCloudUploadFill className="fs-5 " />
        </label>
      </div>
    </form>
  );
};

export default Detect;
