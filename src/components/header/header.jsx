import SearchForm from '../search.form/search.form';
import styles from './header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Movies search engine</h1>
			<SearchForm></SearchForm>
		</header>
	);
}
