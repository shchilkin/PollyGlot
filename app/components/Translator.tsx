const Translator = () => {
	return (
		<div className="w-full flex flex-col h-screen my-4 items-center justify-top border-4 border-polly-ink rounded-[16px]">
			<h4 className="font-bold text-polly-ink">Text to translate</h4>
			<div className="w-full flex flex-col items-center justify-center px-4">
				<textarea
					className="w-full p-4 border-2 placeholder:text-polly-ink text-polly-ink bg-gray-400 rounded-[8px]"
					placeholder="Enter text here..."
				/>
			</div>
			<h4 className="text-bold">Select language</h4>
			<select>
				<option value="en">English</option>
			</select>
		</div>
	);
};

export default Translator;
