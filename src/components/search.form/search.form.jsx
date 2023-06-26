import styles from './search.form.module.scss';
import { useSearch } from '../../hooks/useSearch';
import { useMovies } from '../../hooks/useMovies';

export default function SearchForm() {
	const { error, searchValue, setSearchValue } = useSearch();
	const { getMovies } = useMovies();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (error !== '' || event.currentTarget[0].value === '') return;
		getMovies(searchValue);
	};

	const handleChange = (event) => {
		const element = event.target;
		const newSearchValue = element.value;
		if (newSearchValue === ' ') return;
		setSearchValue(newSearchValue);
		if (error !== '') return;
		getMovies(newSearchValue);
	};

	return (
		<section className={styles.section}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					value={searchValue}
					placeholder='Forrest Gump, Jumanji, Avengers ...'
					onChange={handleChange}
				></input>
				<button type='submit'>Search</button>
			</form>
			<p className={styles.errorText}>{error}</p>
		</section>
	);
}
