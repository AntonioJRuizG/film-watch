import { useMovies } from '../../hooks/useMovies';
import MovieCard from '../card/movie.card';
import styles from './list.module.scss';

export default function MoviesList() {
	const { movies: mappedMovies } = useMovies();

	const hasMovies = mappedMovies?.length > 0;

	return (
		<section>
			{hasMovies ? (
				<ul className={styles.listContainer}>
					<MovieCard movies={mappedMovies}></MovieCard>
				</ul>
			) : (
				<p>No results</p>
			)}
		</section>
	);
}
