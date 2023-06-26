import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../card/movie.card';

export default function MoviesList() {
	const { movies: mappedMovies } = useMovies();

	const hasMovies = mappedMovies?.length > 0;

	return (
		<div>
			{hasMovies ? (
				<MovieCard movies={mappedMovies}></MovieCard>
			) : (
				<p>No results</p>
			)}
		</div>
	);
}
