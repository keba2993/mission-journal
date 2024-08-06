import '../App.css';
import { Entry } from '../types/entries';

function JournalEntry(props: Entry) {
	return (
		<div className='entry--container'>
			<img src='' alt='' />
			<section>
				<p>{props.location}</p>
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
