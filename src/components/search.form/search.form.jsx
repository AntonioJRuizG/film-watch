import { useState } from 'react';
import styles from './search.form.module.scss';

export default function SearchForm() {
	const [searchValue, setSearchValue] = useState('');
	const handleChange = (event) => {
		const element = event.target;
		setSearchValue(element.value);
	};

	return (
		<>
			<form className={styles.form}>
				<input
					type='text'
					name='search'
					value={searchValue}
					placeholder='Forrest Gump, Jumanji, Avengers ...'
					onChange={(event) => handleChange(event)}
				></input>
				<button type='submit'>Search</button>
			</form>
		</>
	);
}
