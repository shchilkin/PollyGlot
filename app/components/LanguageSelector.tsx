// const LanguareSelector = () => {
// 	return (
// 		<label className="block">
// 			<span className="font-bold text-polly-ink">Select language</span>
// 			<select name="lang" required className="mt-2 w-full rounded-lg border-2 p-2 text-polly-ink">
// 				<option value="Arabic">Arabic</option>
// 				<option value="Chinese (Simplified)">Chinese (Simplified)</option>
// 				<option value="English">English</option>
// 				<option value="Finnish">Finnish</option>
// 				<option value="French">French</option>
// 				<option value="German">German</option>
// 				<option value="Japanese">Japanese</option>
// 				<option value="Spanish">Spanish</option>
// 			</select>
// 		</label>
// 	);
// };

// import { useState } from 'react';

// const LanguageSelector = () => {
// 	const languages = [
// 		'Arabic',
// 		'Chinese (Simplified)',
// 		'English',
// 		'Finnish',
// 		'French',
// 		'German',
// 		'Japanese',
// 		'Spanish',
// 	];
// 	const [selected, setSelected] = useState('');

// 	return (
// 		<fieldset className="block">
// 			<legend className="font-bold text-polly-ink">Select language</legend>
// 			<div className="mt-2 space-y-2">
// 				{languages.map((lang) => (
// 					<label key={lang} className="inline-flex items-center">
// 						<input
// 							type="radio"
// 							name="lang"
// 							value={lang}
// 							checked={selected === lang}
// 							onChange={() => setSelected(lang)}
// 							required={!selected}
// 							className="form-radio text-polly-ink"
// 						/>
// 						<span className="ml-2 text-polly-ink">{lang}</span>
// 					</label>
// 				))}
// 			</div>
// 		</fieldset>
// 	);
// };

// import { useState } from 'react';

// const LanguageSelector = () => {
// 	const languages = [
// 		{ name: 'Arabic', emoji: '🇸🇦' },
// 		{ name: 'Chinese (Simplified)', emoji: '🇨🇳' },
// 		{ name: 'English', emoji: '🇬🇧' },
// 		{ name: 'Finnish', emoji: '🇫🇮' },
// 		{ name: 'French', emoji: '🇫🇷' },
// 		{ name: 'German', emoji: '🇩🇪' },
// 		{ name: 'Japanese', emoji: '🇯🇵' },
// 		{ name: 'Spanish', emoji: '🇪🇸' },
// 	];
// 	const [selected, setSelected] = useState('');

// 	return (
// 		<fieldset className="block">
// 			<legend className="font-bold text-polly-ink">Select language</legend>
// 			<div className="mt-2 space-y-2 flex flex-col">
// 				{languages.map(({ name, emoji }) => (
// 					<label key={name} className="inline-flex items-center">
// 						<input
// 							type="radio"
// 							name="lang"
// 							value={name}
// 							checked={selected === name}
// 							onChange={() => setSelected(name)}
// 							required={!selected}
// 							className="form-radio text-polly-ink"
// 						/>
// 						<span className="ml-2">
// 							<span className="mr-1">{emoji}</span>
// 							{name}
// 						</span>
// 					</label>
// 				))}
// 			</div>
// 		</fieldset>
// 	);
// };

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
