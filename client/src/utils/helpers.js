import { toast } from "react-toastify";

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const notifyError = (message) => {
  toast.error(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const notifyWarning = (message) => {
  toast.warning(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const banner_text = [
  {
    text: "Early Plant Disease Detection",
    header: "PLANT DIESASE DETECTION",
    icon: false,
  },
  { text: "Do You Have Any Diseased Plant", header: "START NOW", icon: true },
  {
    text: "Detect Plant Disease Using",
    header: "CNN MODEL",
    icon: false,
    detection: true,
  },
];
