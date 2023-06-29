const API_KEY = '4287ad07';

export async function movieRepo(searchValue) {
	if (searchValue === '') return [];

	const res = await fetch(
		`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
	);

	if (!res.ok) throw console.error('Fetch error');

	const data = await res.json();
	const { Search } = data;

	const mappedMovies = Search?.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		image: movie.Poster,
		year: movie.Year,
	}));

	return mappedMovies;
}
