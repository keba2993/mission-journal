import '../App.css';
import { Entry } from '../types/entries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function JournalEntry(props: Entry) {
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	return (
		<>
			<div className='entry--container'>
				<img src={props.imageUrl} alt={props.title} className='entry--img' />
				<section className='entry--content'>
					<div className='entry--location'>
						<FontAwesomeIcon icon={faLocationDot} className='fa-green' />
						<p>{props.location}</p>
						<a href={props.ministryUrl}>{props.ministryName}</a>
					</div>
					<h2>{props.title}</h2>
					<h4 className='entry--dates'>
						{props.startDate.toLocaleDateString('en-US', dateOptions)} -{' '}
						{props.endDate.toLocaleDateString('en-US', dateOptions)}
					</h4>
					<p className='entry--description'>{props.description}</p>
				</section>
			</div>
			<hr />
		</>
	);
}

export default JournalEntry;
