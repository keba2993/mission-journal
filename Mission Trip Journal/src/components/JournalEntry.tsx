import '../App.css';
import { Entry } from '../types/entries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function JournalEntry(props: Entry) {
	return (
		<div className='entry--container'>
			<img src={props.imageUrl} alt={props.title} />
			<section>
				<p>
					<FontAwesomeIcon icon={faLocationDot} className='fa-green' />
					{props.location}
					<a href={props.ministryUrl}>{props.ministryName}</a>
				</p>
				<h2>{props.title}</h2>
				<h4>
					{props.startDate.toLocaleDateString()} -{' '}
					{props.endDate.toLocaleDateString()}
				</h4>
				<p>{props.description}</p>
			</section>
			<hr />
		</div>
	);
}

export default JournalEntry;
