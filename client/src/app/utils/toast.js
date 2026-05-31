'use client'
import { Bounce, toast } from "react-toastify";

// --------exporting tostconntainer as client component to latout
export { ToastContainer } from "react-toastify";

export const showToast = (message, type = "success") => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else if (type === "info") {
    toast.info(message, options);
  } else if (type === "warning") {
    toast.warning(message, options);
  } else {
    toast(message, options);
  }
};

