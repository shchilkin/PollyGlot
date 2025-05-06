import { data, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useActionData, useNavigation } from '@remix-run/react';
import OpenAI from 'openai';
import Header from '~/components/Header';
import Translator from '~/components/Translator';

// Define more explicit types
type SuccessResponse = { ok: true; translation: string };
type ErrorResponse = { ok: false; error: string };
type ActionData = SuccessResponse | ErrorResponse;

export const meta: MetaFunction = () => [
    { title: 'PollyGlot' },
    {
        name: 'description',
        content: 'Solo project for the "Intro to AI Engineering" chapter from "The AI Engineer Path" on Scrimba.',
    },
];

// Extract OpenAI translation to a separate function
async function translateText(text: string, targetLanguage: string): Promise<string> {
    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'],
    });

    const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: `You are a professional translator. Translate the following text into ${targetLanguage}. Return only the translation.`,
        input: text,
        temperature: 0.2,
    });

    return response.output_text;
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const _action = formData.get('_action')?.toString();

    // Handle reset action
    if (_action === 'reset') {
        return data<SuccessResponse>({ ok: true, translation: '' });
    }

    // Extract and validate input
    const text = formData.get('text')?.toString() ?? '';
    const lang = formData.get('lang')?.toString() ?? '';

    if (!text.trim() || !lang) {
        return data<ErrorResponse>(
            { ok: false, error: 'Please supply text and a target language' },
            { status: 400 }
        );
    }

    try {
        // Perform translation
        const translation = await translateText(text, lang);
        return data<SuccessResponse>({ ok: true, translation });
    } catch (error) {
        // Handle API errors
        return data<ErrorResponse>(
            { ok: false, error: 'Translation service error. Please try again.' },
            { status: 500 }
        );
    }
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