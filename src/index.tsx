import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import { useUTMTracking } from "./lib/useUTMTracking";

const AppWithTracking = () => {
  useUTMTracking();
  return <Home />;
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppWithTracking />
  </StrictMode>
);
