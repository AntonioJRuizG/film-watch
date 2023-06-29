import { useContext } from 'react';
import MovieCard from '../card/movie.card';
import styles from './list.module.scss';
import { MoviesContext } from '../../context/MoviesContext';

export default function MoviesList() {
	const { sort, movies, loading, sortedMovies } = useContext(MoviesContext);

	const hasMovies = movies?.length > 0;

	return (
		<section>
			{(loading && <p>Loading movies...</p>) || hasMovies ? (
				<ul className={styles.listContainer}>
					{sort ? (
						<MovieCard movies={sortedMovies}></MovieCard>
					) : (
						<MovieCard movies={movies}></MovieCard>
					)}
				</ul>
			) : (
				<p>Your search did not match any movies.</p>
			)}
		</section>
	);
}
