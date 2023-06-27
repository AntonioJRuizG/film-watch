import { useContext } from 'react';
import MovieCard from '../card/movie.card';
import styles from './list.module.scss';
import { MoviesContext } from '../../context/MoviesContext';

export default function MoviesList() {
	const { movies, loading } = useContext(MoviesContext);

	const hasMovies = movies?.length > 0;

	return (
		<section>
			{(loading && <p>Loading movies...</p>) ||
				(hasMovies ? (
					<ul className={styles.listContainer}>
						<MovieCard movies={movies}></MovieCard>
					</ul>
				) : (
					<p>No results</p>
				))}
		</section>
	);
}
