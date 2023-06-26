import styles from './search.form.module.scss';
import { useSearch } from '../../hooks/useSearch';

export default function SearchForm() {
	const { error, searchValue, setSearchValue } = useSearch();

	const handleSubmit = (event) => {
		if (error !== '') return;
		event.preventDefault();
	};

	const handleChange = (event) => {
		const element = event.target;
		const newSearchValue = element.value;
		if (newSearchValue === ' ') return;
		setSearchValue(newSearchValue);
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
