import { useState, useEffect } from 'react';
import { Form } from '@remix-run/react';
import LanguageSelector from './LanguageSelector';

interface TranslatorProps {
  actionState: 'idle' | 'submitting' | 'loading';
  translation?: string;
  error?: string;
}

export default function Translator({ actionState, translation, error }: TranslatorProps) {
  const [originalText, setOriginalText] = useState('');
  const [savedTranslation, setSavedTranslation] = useState(translation || '');
  
  useEffect(() => {
    if (translation) {
      setSavedTranslation(translation);
    }
  }, [translation]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    setOriginalText(formData.get('text')?.toString() || '');
  };

  return (
    <div className="w-full max-w-2xl space-y-4 p-4 md:p-6">
      {!translation ? (
        <Form method="post" className="space-y-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="font-bold text-polly-ink">Text to translate</span>
            <textarea
              name="text"
              required
              placeholder="Hi, how you are doing?"
              className="mt-2 w-full rounded-lg border-2 bg-gray-100 p-4 text-polly-ink placeholder:text-polly-ink"
            />
          </label>
          
          <LanguageSelector />
          
          <button
            type="submit"
            disabled={actionState === 'submitting'}
            className="rounded-lg w-full bg-polly-primary px-6 py-3 font-semibold text-polly-inc disabled:opacity-50"
          >
            {actionState === 'submitting' ? 'Translating…' : 'Translate'}
          </button>
        </Form>
      ) : (
        <>
          <label className="block">
            <span className="font-bold text-polly-ink">Text to translate</span>
            <textarea
              name="text"
              readOnly
              value={originalText}
              className="mt-2 w-full rounded-lg border-2 bg-gray-100 p-4 text-polly-ink"
            />
          </label>
          <p className="rounded bg-green-100 p-4 text-slate-800 whitespace-pre-wrap">{savedTranslation}</p>
          <Form method="post">
            <input type="hidden" name="_action" value="reset" />
            <button 
              type="submit"
              className="rounded-lg w-full bg-polly-primary px-6 py-3 font-semibold text-polly-ink"
            >
              Start over
            </button>
          </Form>
        </>
      )}

      {error && <p className="rounded bg-red-100 p-4 text-red-700">{error}</p>}
    </div>
  );
}