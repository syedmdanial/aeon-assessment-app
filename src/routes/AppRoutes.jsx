import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import App from "../pages/App";

/** Mock pages */
import Docs from "../pages/mockPages/Docs";
import Blogs from "../pages/mockPages/Blog";
import Analytics from "../pages/mockPages/Analytics";
import Commerce from "../pages/mockPages/Commerce";
import Templates from "../pages/mockPages/Templates";
import Enterprise from "../pages/mockPages/Enterprise";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
