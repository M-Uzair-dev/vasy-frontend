import toast from "react-hot-toast";
export const toastMessage = (message = "Action Done", type = "success") => {
  if (type === "success") {
    return toast.success(message);
  }
  if (type === "error") {
    return toast.error(message);
  }
};
