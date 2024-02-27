import { Outlet } from "react-router-dom";
import Navbar from "../pages/answers/Navbar";

const AppLayout = () => (
  <div>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
  </div>
);

export default AppLayout;
