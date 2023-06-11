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
    text: "The Spring Plant Agency",
    header: "PLANT DIESASE DETECTION",
    icon: false,
  },
  { text: "The Spring Plant Agency", header: "HOUSEPLANT", icon: true },
  { text: "detect plant disease using", header: "CNN MODEL", icon: false },
];
