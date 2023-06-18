import { useQuery } from "@tanstack/react-query";
import { getComingSoon, IAPIResponse, makeBgPath } from "../api";
import { Chart, ChartContainer, Poster } from "../components/Styles";

const ComingSoon = () => {
  const { data } = useQuery<IAPIResponse>(["movies"], getComingSoon);
  const movies = data?.results;
  return (
    <>
      <ChartContainer>
        {movies?.map((movie) => (
          <Chart key={movie.id}>
            <Poster src={makeBgPath(movie.poster_path)} />
            {movie.title}
          </Chart>
        ))}
      </ChartContainer>
    </>
  );
};

export default ComingSoon;
