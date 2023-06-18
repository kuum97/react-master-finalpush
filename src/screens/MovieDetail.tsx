import { useQuery } from "@tanstack/react-query";
import { IMovieDetail, getMovie } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const Detail = styled(motion.div)`
  width: 600px;
  height: 800px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DetailItem = styled(motion.span)`
  margin: 10px;
`;

interface MovieDetailProps {
  movieId: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId }) => {
  const { data } = useQuery<IMovieDetail>(["movie", movieId], () =>
    getMovie(movieId)
  );
  return (
    <Detail>
      <DetailItem>{data?.title}</DetailItem>
      <DetailItem>{data?.overview}</DetailItem>
      <h1 style={{ fontSize: "xx-large" }}>Sorry...I'll finish it later...</h1>
    </Detail>
  );
};

export default MovieDetail;
