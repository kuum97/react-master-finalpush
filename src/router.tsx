import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./screens/ComingSoon";
import NowPlaying from "./screens/NowPlaying";
import Popular from "./screens/Popular";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
      },
    ],
  },
]);
