import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled(motion.nav)`
  display: flex;
  height: 130px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  a {
    width: 100px;
    text-align: center;
    margin: 0px 50px;
    text-decoration: none;
    color: black;
    &.active {
      font-weight: bold;
      scale: 1.3;
    }
  }
`;

const Navigation = () => {
  const location = useLocation();
  return (
    <NavContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Popular
      </Link>
      <Link
        to="/coming-soon"
        className={location.pathname === "/coming-soon" ? "active" : ""}
      >
        Coming Soon
      </Link>
      <Link
        to="/now-playing"
        className={location.pathname === "/now-playing" ? "active" : ""}
      >
        Now Playing
      </Link>
    </NavContainer>
  );
};

export default Navigation;
