import { useState } from 'react';

export default function SearchForm() {
	const [searchValue, setSearchValue] = useState('');
	const handleChange = (event) => {
		const element = event.target;
		setSearchValue(element.value);
		console.log(event);
	};

	return (
		<>
			<form>
				<input
					type='text'
					name='search'
					value={searchValue}
					placeholder='Forrest Gump, Jumanji, Avengers ...'
					onChange={(event) => handleChange(event)}
				></input>
			</form>
		</>
	);
}
