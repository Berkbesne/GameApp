import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import { Route, Routes } from "react-router-dom";
import { EditGame } from "./pages/EditGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRoutes />
    </>
  );
};

export default App;
