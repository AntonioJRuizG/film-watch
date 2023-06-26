/* eslint-disable react/prop-types */
export default function MovieCard({ movies }) {
	return (
		<>
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.image} alt={movie.title}></img>
				</li>
			))}
		</>
	);
}
