import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, IAPIResponse, makeBgPath } from "../api";
import { Chart, ChartContainer, Poster } from "../components/Styles";

const NowPlaying = () => {
  const { data } = useQuery<IAPIResponse>(["movies"], getNowPlaying);
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

export default NowPlaying;
