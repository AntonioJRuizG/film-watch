import { useState } from 'react';
import styles from './search.form.module.scss';

export default function SearchForm() {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (event) => {
		const element = event.target;
		setSearchValue(element.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
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
		</>
	);
}
