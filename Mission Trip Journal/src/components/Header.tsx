import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Header() {
	return (
		<header className='header--container'>
			<FontAwesomeIcon icon={faEarthAmericas} size='xl' />
			<h3 className='header--title'>my mission trip journal</h3>
		</header>
	);
}

export default Header;
