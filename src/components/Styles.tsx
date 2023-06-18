import styled from "styled-components";
import { motion } from "framer-motion";

export const Poster = styled(motion.img)`
  width: 180px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const ChartContainer = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Chart = styled(motion.li)`
  width: 180px;
  height: 280px;
  place-self: center;
  text-align: center;
  margin: 30px;
`;

export const ChartVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ChartChildrenVariants = {
  start: {
    opacity: 0,
    scale: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    opacity: 1,
    scale: 1,
  },
};
