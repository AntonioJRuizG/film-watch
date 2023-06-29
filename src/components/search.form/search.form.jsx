/* eslint-disable react-hooks/exhaustive-deps */
import styles from './search.form.module.scss';
import { useSearch } from '../../hooks/useSearch';
import { useMovies } from '../../hooks/useMovies';
import { useCallback, useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import debounce from 'just-debounce-it';

export default function SearchForm() {
	const { sort, sortList, movies } = useContext(MoviesContext);
	const { error, searchValue, updateSearchValue } = useSearch();
	const { getMovies } = useMovies({ searchValue });

	const handleSubmit = (event) => {
		event.preventDefault();
		if (error !== '' || event.currentTarget[0].value === '') return;
		getMovies(searchValue);
	};

	// NOTE: Implement useCallback to make sure the function is always the same and it is not redeclarated on every render. debounce is already a callback.
	const debouncedGetMovies = useCallback(
		debounce((searchValue) => {
			getMovies(searchValue);
		}, 300),
		[]
	);

	const handleChange = (event) => {
		const element = event.target;
		const newSearchValue = element.value;
		if (newSearchValue === ' ') return;
		updateSearchValue(newSearchValue);
		debouncedGetMovies(newSearchValue);
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
						<span>Sort alphabetically</span>
					</label>
				</div>
			</form>
			<p className={styles.errorText}>{error}</p>
		</section>
	);
}
