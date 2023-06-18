import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div>
      <Reset />
      <Navigation />
      <Outlet />
    </div>
  );
}
