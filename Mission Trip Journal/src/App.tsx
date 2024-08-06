import './App.css';
import Header from './components/Header';
import JournalEntry from './components/JournalEntry';
import entries from './data/data';

function App() {
	const journalEntries = entries.map((entry) => (
		<JournalEntry key={entry.id} {...entry} />
	));

	return (
		<>
			<Header />
			{journalEntries}
		</>
	);
}

export default App;
