import type { MetaFunction } from '@remix-run/node';
import Header from '~/components/Header';
import Translator from '~/components/Translator';

export const meta: MetaFunction = () => {
	return [
		{ title: 'PollyGlot' },
		{
			name: 'description',
			content: 'Solo project for the Intro to AI Engineering chapter from "The AI Engineer Path" on Scrimba."',
		},
	];
};

export default function Index() {
	return (
		<div className="flex flex-col h-screen items-center justify-top">
			<Header />
			<Translator />
		</div>
	);
}
