import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

import Photography from "../pages/Photography/Photography";
import Videography from "../pages/Videography/Videography";
import SocialMedia from "../pages/SocialMediaCouverage/SocialMedia";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/videography" element={<Videography />} />
      <Route path="/socialmedia" element={<SocialMedia />} />
    </Routes>
  );
}

export default AppRoutes;
