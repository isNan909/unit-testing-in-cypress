import countries from '../data/countries';

const SearchingPage = () => {
	return (
		<div className="container-wrapper">
			<Autocomplete countries={countries} />
		</div>
	);
};

export default SearchingPage;
