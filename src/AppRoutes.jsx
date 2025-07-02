import { Route, Routes } from "react-router-dom";
import AddGame from "./pages/AddGame";
import Home from "./pages/Home";
import EditGame from "./pages/EditGame";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="*" element={<Home />} />
      <Route path="/add-game/" element={<AddGame />} />
      <Route path="/edit-game/:id" element={<EditGame />} />
    </Routes>
  );
};

export default AppRoutes;
