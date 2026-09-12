import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Toast = () => {
    return (

        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="light" 
        />

    );
};

export default Toast;