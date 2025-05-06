import { data, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useActionData, useNavigation } from '@remix-run/react';
import OpenAI from 'openai';
import Header from '~/components/Header';
import Translator from '~/components/Translator';

type ActionData = { ok: true; translation: string } | { ok: false; error: string };

export const meta: MetaFunction = () => [
	{ title: 'PollyGlot' },
	{
		name: 'description',
		content: 'Solo project for the "Intro to AI Engineering" chapter from "The AI Engineer Path" on Scrimba.',
	},
];

export async function action({ request }: ActionFunctionArgs) {
	const client = new OpenAI({
		apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
	});

	const formData = await request.formData();
	const text = formData.get('text')?.toString() ?? '';
	const lang = formData.get('lang')?.toString() ?? '';

	if (!text.trim() || !lang) {
		return data({ ok: false, error: 'Please supply text and a target language' }, { status: 400 });
	}

	const response = await client.responses.create({
		model: 'gpt-4o',
		instructions: `You are a profeccional translator. Translate the following text into ${lang}. Return only the translation.`,
		input: text,
		temperature: 0.2,
	});

	const translation = response.output_text;

	return data({ ok: true, translation });
}

export default function Index() {
	const actionData = useActionData<ActionData>();
	const navigation = useNavigation();

	return (
		<div className="flex h-screen flex-col items-center">
			<Header />
			<Translator
				actionState={navigation.state}
				translation={actionData?.ok ? actionData.translation : undefined}
				error={actionData?.ok === false ? actionData.error : undefined}
			/>
		</div>
	);
}
