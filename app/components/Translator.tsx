// const Translator = () => {
// 	return (
// 		<div className="w-full flex flex-col h-screen my-4 items-center justify-top border-4 border-polly-ink rounded-[16px]">
// 			<h4 className="font-bold text-polly-ink">Text to translate</h4>
// 			<div className="w-full flex flex-col items-center justify-center px-4">
// 				<textarea
// 					className="w-full p-4 border-2 placeholder:text-polly-ink text-polly-ink bg-gray-400 rounded-[8px]"
// 					placeholder="Enter text here..."
// 				/>
// 			</div>
// 			<h4 className="text-bold">Select language</h4>
// 			<select>
// 				<option value="en">English</option>
// 			</select>
// 		</div>
// 	);
// };

// export default Translator;

import { Form } from '@remix-run/react';

interface TranslatorProps {
	actionState: 'idle' | 'submitting' | 'loading';
	translation?: string;
	error?: string;
}

export default function Translator({ actionState, translation, error }: TranslatorProps) {
	return (
		<div className="w-full max-w-2xl space-y-4 p-6">
			<Form method="post" className="space-y-4">
				<label className="block">
					<span className="font-bold text-polly-ink">Text to translate</span>
					<textarea
						name="text"
						required
						placeholder="Enter text here…"
						className="mt-2 w-full rounded-lg border-2 bg-gray-400 p-4 text-polly-ink placeholder:text-polly-ink"
					/>
				</label>

				<label className="block">
					<span className="font-bold text-polly-ink">Select language</span>
					<select name="lang" required className="mt-2 w-full rounded-lg border-2 p-2 text-polly-ink">
						<option value="Arabic">Arabic</option>
						<option value="Chinese (Simplified)">Chinese (Simplified)</option>
						<option value="English">English</option>
						<option value="Finnish">Finnish</option>
						<option value="French">French</option>
						<option value="German">German</option>
						<option value="Japanese">Japanese</option>
						<option value="Spanish">Spanish</option>
					</select>
				</label>

				<button
					type="submit"
					disabled={actionState === 'submitting'}
					className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white disabled:opacity-50"
				>
					{actionState === 'submitting' ? 'Translating…' : 'Translate'}
				</button>
			</Form>

			{translation && (
				<p className="rounded bg-green-100 p-4 text-slate-800 whitespace-pre-wrap">{translation}</p>
			)}

			{error && <p className="rounded bg-red-100 p-4 text-red-700">{error}</p>}
		</div>
	);
}