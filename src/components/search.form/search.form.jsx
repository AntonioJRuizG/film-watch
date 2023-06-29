import styles from './search.form.module.scss';
import { useSearch } from '../../hooks/useSearch';
import { useMovies } from '../../hooks/useMovies';
import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';

export default function SearchForm() {
	const { sort, sortList, movies } = useContext(MoviesContext);
	const { error, searchValue, updateSearchValue } = useSearch();
	const { getMovies } = useMovies({ searchValue });

	const handleSubmit = (event) => {
		event.preventDefault();
		if (error !== '' || event.currentTarget[0].value === '') return;
		getMovies(searchValue);
	};

	const handleChange = (event) => {
		const element = event.target;
		const newSearchValue = element.value;
		if (newSearchValue === ' ') return;
		updateSearchValue(newSearchValue);
		getMovies(searchValue);
	};

	const handleSort = () => {
		if (movies) sortList(!sort);
	};

	return (
		<section className={styles.section}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					value={searchValue}
					placeholder='Avengers, Matrix ...'
					onChange={handleChange}
				></input>

				<button type='submit'>Search</button>
				<div>
					<label className={styles.checkboxes}>
						<input type='checkbox' onChange={handleSort} checked={sort}></input>
						<span>Sorted alphabetically</span>
					</label>
				</div>
			</form>
			<p className={styles.errorText}>{error}</p>
		</section>
	);
}
