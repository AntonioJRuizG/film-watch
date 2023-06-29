/* eslint-disable react/prop-types */
import styles from './movie.card.module.scss';

export default function MovieCard({ movies }) {
	return (
		<>
			{movies?.map((movie) => (
				<li key={movie.id} className={styles.card}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.image} alt={movie.title}></img>
				</li>
			))}
		</>
	);
}
