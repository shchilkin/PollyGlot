import { useState } from 'react';
import { ReactCountryFlag } from 'react-country-flag';

const LanguageSelector = () => {
	const languages = [
		{ name: 'Danish', countryCode: 'DK' },
		{ name: 'Norwegian', countryCode: 'NO' },
		{ name: 'Finnish', countryCode: 'FI' },
		{ name: 'Swedish', countryCode: 'SE' },
		{ name: 'Russian', countryCode: 'RU' },
	];
	const [selected, setSelected] = useState('');

	return (
		<fieldset className="block">
			<legend className="font-bold text-polly-ink">Select language</legend>
			<div className="mt-2 space-y-2 flex flex-col">
				{languages.map(({ name, countryCode }) => (
					<label key={name} className="inline-flex items-center">
						<input
							type="radio"
							name="lang"
							value={name}
							checked={selected === name}
							onChange={() => setSelected(name)}
							required={!selected}
							className="form-radio text-polly-ink"
						/>
						<ReactCountryFlag
							countryCode={countryCode}
							svg
							style={{
								width: '1.25em',
								height: '1.25em',
							}}
							className="ml-2"
						/>
						<span className="ml-2 text-polly-ink">{name}</span>
					</label>
				))}
			</div>
		</fieldset>
	);
};

export default LanguageSelector;
