import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const Toast = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default Toast;
