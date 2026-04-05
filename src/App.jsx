// import { useState } from "react";

import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import ParticlesBackground from "./components/Particles/Particles";
import ZoomAlert from "./components/ZoomAlert/ZoomAlert";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
      <ZoomAlert />
      <ParticlesBackground />
    </BrowserRouter>
  );
}

export default App;
