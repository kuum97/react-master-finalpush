import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPopular, makeBgPath, IAPIResponse } from "../api";
import { AnimatePresence, motion } from "framer-motion";
import {
  Poster,
  Chart,
  ChartContainer,
  ChartVariants,
  ChartChildrenVariants,
} from "../components/Styles";
import MovieDetail from "./MovieDetail";

const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Popular = () => {
  const { data } = useQuery<IAPIResponse>(["movies"], getPopular);
  const [id, setId] = useState<null | string>(null);
  const movies = data?.results;
  return (
    <>
      <ChartContainer variants={ChartVariants} initial="start" animate="end">
        {movies?.map((movie) => (
          <Chart
            variants={ChartChildrenVariants}
            onClick={() => setId(movie.id + "")}
            key={movie.id}
            layoutId={movie.id + ""}
          >
            <Poster src={makeBgPath(movie.poster_path)} />
            {movie.title}
          </Chart>
        ))}
      </ChartContainer>
      <AnimatePresence>
        {id ? (
          <Box layoutId={id} onClick={() => setId(null)}>
            <MovieDetail movieId={id} />
          </Box>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Popular;
