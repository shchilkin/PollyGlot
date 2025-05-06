/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	bracketSpacing: true,
};
